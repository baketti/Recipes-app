import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as selectors from "./recipes.selectors";
import { RecipesState } from "./recipes.interfaces";
import * as extraActions from "../../extra-actions";
import { convertToRecipe } from "@/models/Recipe";

const initialState: RecipesState = {
  recipesList: [],
  currentRecipe: null,
};

export const recipesStore = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    //OPERAZIONI SINCRONE
    resetRecipesList: (state) => {
      state.recipesList = [];
    },
    resetCurrentRecipe: (state) => {
      state.currentRecipe = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      extraActions.getRecipesByQuery.success, (state, action) => {
        const recipes = action.payload.data.results.map(convertToRecipe);
        state.recipesList = [...recipes];
      }
    );
    builder.addCase(
      extraActions.getRecipesRandom.success,
      (state, action) => {
        const recipes = action.payload.data.recipes.map(convertToRecipe);
        state.recipesList = [...recipes];
    });
    builder.addCase(
      extraActions.getRecipeByRecipeId.success,
      (state, action) => {        
        state.currentRecipe = action.payload.data ?? null;
      }
    );
  }
});

export { selectors };