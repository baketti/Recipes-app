import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as selectors from "./recipes.selectors"
import { RecipesState } from "./recipes.interfaces";
import * as extraActions from "../../extra-actions";

const initialState: RecipesState = {
  recipesList: [],
  currentRecipe: null,
};

export const recipesStore = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    //OPERAZIONI SINCRONE
  },
  extraReducers: (builder) => {
    builder.addCase(
      extraActions.getRecipesByQuery.success, (state, action) => {
        console.log("action.payload.data.results", action.payload.data.results);
        const payload = {
            data: {
              results: action.payload.data.results.map(result => ({
                // Only include the properties of the result that are serializable
                id: result.id,
                title: result.title,
                readyInMinutes: result.readyInMinutes,
                image: result.image,
                nutrients: result.nutrition.nutrients.filter((nutrient: { name: string; }) => nutrient.name === "Calories" || nutrient.name === "Protein" || nutrient.name === "Fat" || nutrient.name === "Carbohydrates"),
              })),
            },
          };
        state.recipesList = [...payload.data.results];
      }
    );
    builder.addCase(
      extraActions.getRecipeByRecipeId.success,
      (state, action) => {        
        state.currentRecipe = action.payload.data;
      }
    );
  }
});

export { selectors };