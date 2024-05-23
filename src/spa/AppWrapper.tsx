import React, { memo } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/spa/redux-store";
import App from "./App";
import SpaLoading from "@/components/SpaLoading";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<SpaLoading />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default memo(AppWrapper);
