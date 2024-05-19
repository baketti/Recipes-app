import {
    apiActionBuilder,
    apiRequestPayloadBuilder,
    ApiSuccessAction,
    ApiFailAction,
    HttpMethod,
  } from "../api-builder";
  import { Recipe } from "@/models/Recipe";

  export interface GetRecipesRandomParams {}
  
  export interface GetRecipesRandomResponseData {
    recipes: Recipe[]; 
  }
  
  export default apiActionBuilder<
  GetRecipesRandomParams,
    ApiSuccessAction<GetRecipesRandomResponseData, GetRecipesRandomParams>,
    ApiFailAction<GetRecipesRandomParams>
  >(
    "apis/spoonacular/random",
    (
      params: GetRecipesRandomParams,
    ) => ({
      payload: apiRequestPayloadBuilder<GetRecipesRandomParams>(
        {
          path: "/random",
          method: HttpMethod.GET,
          query: {
            number: 0,
            'include-tags': 'vegetarian',
            includeNutrition: true,
          },
          ...params,
        },
      ),
    }),
  );