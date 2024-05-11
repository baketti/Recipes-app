  import {
    apiActionBuilder,
    apiRequestPayloadBuilder,
    ApiSuccessAction,
    ApiFailAction,
    HttpMethod,
  } from "../api-builder";
  
  export interface ComplexSearchParams {
    query?: string;
    cuisine?: string;
    number?: number;
  }
  
  export interface ComplexSearchResponseData {
    results: Record<string, any>[]; 
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