  import {
    apiActionBuilder,
    apiRequestPayloadBuilder,
    ApiSuccessAction,
    ApiFailAction,
    HttpMethod,
  } from "../api-builder";
  import { Recipe } from "@/models/Recipe";

  export interface GetRecipesByQueryParams {
    query?: string;
    cuisine?: string;
    number?: number;
    sort?: 'popularity' | 'healthiness' ;
    //...otherParams???
  }
  
  export interface GetRecipesByQueryResponseData {
    results: Recipe[]; 
  }
  
  export default apiActionBuilder<
    GetRecipesByQueryParams,
    ApiSuccessAction<GetRecipesByQueryResponseData, GetRecipesByQueryParams>,
    ApiFailAction<GetRecipesByQueryParams>
  >(
    "apis/spoonacular/complexSearch",
    (
      params: GetRecipesByQueryParams,
    ) => ({
      payload: apiRequestPayloadBuilder<GetRecipesByQueryParams>(
        {
          path: "/complexSearch",
          method: HttpMethod.GET,
          query: {
            diet: 'vegetarian',
            addRecipeNutrition: true,
            ...params,
          },
        },
      ),
    }),
  );