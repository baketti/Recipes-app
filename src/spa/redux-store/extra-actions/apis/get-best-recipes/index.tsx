import { number } from "yup";
import {
    apiActionBuilder,
    apiRequestPayloadBuilder,
    ApiSuccessAction,
    ApiFailAction,
    HttpMethod,
} from "../api-builder";
import { Recipe } from "@/models/Recipe";

export interface GetBestRecipesParams {}

export interface GetBestRecipesResponseData {
    results: Recipe[]; 
  }
  
  export default apiActionBuilder<
    GetBestRecipesParams,
    ApiSuccessAction<GetBestRecipesResponseData, GetBestRecipesParams>,
    ApiFailAction<GetBestRecipesParams>
  >(
    "apis/spoonacular/complexSearch/best",
    (
      params: GetBestRecipesParams,
    ) => ({
      payload: apiRequestPayloadBuilder<GetBestRecipesParams>(
        {
          path: "/complexSearch",
          method: HttpMethod.GET,
          query: {
            number: 4,
            diet: 'vegetarian',
            addRecipeNutrition: true,
            sort: 'popularity',
            ...params,
          },
        },
      ),
    }),
  );