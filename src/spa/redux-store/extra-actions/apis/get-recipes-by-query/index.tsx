  import {
    apiActionBuilder,
    apiRequestPayloadBuilder,
    ApiSuccessAction,
    ApiFailAction,
    HttpMethod,
  } from "../api-builder";
  import { Recipe } from "@/models/Recipe";

  export interface ComplexSearchParams {
    query?: string;
    cuisine?: string;
    number?: number;
  }
  
  export interface ComplexSearchResponseData {
    results: Recipe[]; 
    //totalResults: number;
  }
  
  export default apiActionBuilder<
    ComplexSearchParams,
    ApiSuccessAction<ComplexSearchResponseData, ComplexSearchParams>,
    ApiFailAction<ComplexSearchParams>
  >(
    "apis/spoonacular/complexSearch",
    (
      params: ComplexSearchParams,
    ) => ({
      payload: apiRequestPayloadBuilder<ComplexSearchParams>(
        {
          path: "/complexSearch",
          method: HttpMethod.GET,
          query: {
            addRecipeNutrition: true,
            ...params,
          },
        },
      ),
    }),
  );