import { takeEvery, fork, take, put, delay, race } from "redux-saga/effects";
import { Action } from "redux";
import axios, { CancelTokenSource } from "axios";
import { ApiRequestAction } from "@/spa/redux-store/extra-actions/apis/api-builder";
import { actions } from "@/spa/redux-store/slices";

function* ajaxTask(
  requestAction: ApiRequestAction<any>,
  cancelToken: CancelTokenSource,
): any {
  const { type, payload } = requestAction;
  const { params } = payload;
  const { path, method, body, query } = params;
  const api = type.replace("/request", "");

  yield put(
    actions.setApiLoading({
      api,
      isLoading: true,
    }),
  );

  try {
    /* if (options?.requestDelay) {
      const { timeout } = yield race({
        delay: delay(options.requestDelay),
        timeout: take(type),
      });
      if (timeout) {
        return;
      }
    } */

    const { response } = yield race({
      response: axios({
        url: path,
        method,
        data: body,
        params: query,
        cancelToken: cancelToken.token,
      }),
      timeout: take(type),
    });

    if (response) {
      yield put({
        type: `${api}/success`,
        payload: {
          status: response?.status,
          data: response?.data,
        },
      });
      yield put(
        actions.setApiLoading({
          api,
          isLoading: false,
        }),
      );
    } else {
      cancelToken.cancel();
    }
  } catch (e) {
    if (!axios.isCancel(e) && axios.isAxiosError(e)) {
      const status = e?.response?.status || 500;
      const message: string = e?.response?.data?.message || e.message;
      yield put({
        type: `${api}/fail`,
        payload: {
          status,
          message,
        },
      });
      yield put(
        actions.setApiLoading({
          api,
          isLoading: false,
        }),
      );
    }
  }
}

export function* ajaxRequestSaga() {
  yield takeEvery(
    (action: Action) => /^apis\/(.*?)\/request$/.test(action.type),
    function* (requestAction: ApiRequestAction<any>) {
      try {
        const { type } = requestAction;
        const api = type.replace("/request", "");
        const cancelToken = axios.CancelToken.source();
        const task: any = yield fork(ajaxTask, requestAction, cancelToken);
        let exit = false;

        while (!exit) {
          const resultAction: Action = yield take([
            `${api}/success`,
            `${api}/fail`,
            `${api}/cancel`,
          ]);

          if (
            resultAction.type === `${api}/cancel` &&
            task &&
            task.isRunning()
          ) {
            cancelToken.cancel("Canceled");
          }

          if (resultAction.type === `${api}/fail`) {
            const { status, message } = (resultAction as any).payload;
            console.log(`[${api}] ${status}: ${message}`);
          }

          exit = true;
        }
      } catch (e) {
        console.error(e);
      }
    },
  );
}
