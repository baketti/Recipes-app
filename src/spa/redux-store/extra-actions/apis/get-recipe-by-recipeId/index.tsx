import {
    apiActionBuilder,
    apiRequestPayloadBuilder,
    ApiSuccessAction,
    ApiFailAction,
    HttpMethod,
  } from "../api-builder";
  export interface GetRecipeByRecipeIdParams {
    recipeId: string;
  }

  export interface GetRecipeByRecipeIdResponseData {
    recipeData: Record<string, any>;
  }

  export default apiActionBuilder<
  GetRecipeByRecipeIdParams,
  ApiSuccessAction<GetRecipeByRecipeIdResponseData, GetRecipeByRecipeIdParams>,
  ApiFailAction<GetRecipeByRecipeIdParams>
>(
  "apis/spoonacular/getRecipeByRecipeId",
  (
    params: GetRecipeByRecipeIdParams,
  ) => ({
    payload: apiRequestPayloadBuilder<GetRecipeByRecipeIdParams>(
      {
        path: `/${params.recipeId}/information`,
        method: HttpMethod.GET,
        query: {
          includeNutrition: true,
        }
      },
    ),
  }),
);