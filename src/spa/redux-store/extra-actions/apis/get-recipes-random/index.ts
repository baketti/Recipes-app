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
    results: Recipe[]; 
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
            number: 10,
            'include-tags': 'vegetarian',
            ...params,
          },
        },
      ),
    }),
  );