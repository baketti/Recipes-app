import {
    apiActionBuilder,
    apiRequestPayloadBuilder,
    ApiSuccessAction,
    ApiFailAction,
    HttpMethod,
} from "../api-builder";
import { Recipe } from "@/models/Recipe";

export interface GetHealthiestRecipesParams {}

export interface GetHealthiestRecipesResponseData {
    results: Recipe[]; 
  }
  
  export default apiActionBuilder<
  GetHealthiestRecipesParams,
    ApiSuccessAction<GetHealthiestRecipesResponseData, GetHealthiestRecipesParams>,
    ApiFailAction<GetHealthiestRecipesParams>
  >(
    "apis/spoonacular/complexSearch",
    (
      params: GetHealthiestRecipesParams,
    ) => ({
      payload: apiRequestPayloadBuilder<GetHealthiestRecipesParams>(
        {
          path: "/complexSearch",
          method: HttpMethod.GET,
          query: {
            number: 4,
            diet: 'vegetarian',
            addRecipeNutrition: true,
            sort: 'healthiness',
            ...params,
          },
        },
      ),
    }),
  );