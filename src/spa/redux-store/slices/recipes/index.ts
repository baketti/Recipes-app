import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as selectors from "./recipes.selectors";
import { RecipesState } from "./recipes.interfaces";
import * as extraActions from "../../extra-actions";
import { convertToRecipe } from "@/models/Recipe";

const initialState: RecipesState = {
  recipesList: [],
  bestRecipesList: [],
  healthRecipesList: [],
  currentRecipe: null,
  queryFilters: {},
};

export const recipesStore = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    resetRecipesList: (state) => {
      state.recipesList = [];
    },
    resetCurrentRecipe: (state) => {
      state.currentRecipe = null;
    },
    setQueryFilters: (
      state, { payload }:PayloadAction<{
        cuisine?: string;
        intolerances?: string;
        type?: string;
      }>) => {
      state.queryFilters = payload;
    },
    resetQueryFilters: (state) => {
      state.queryFilters = {};
    }
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
    builder.addCase(
      extraActions.getBestRecipes.success,
      (state, action) => {
        state.bestRecipesList = action.payload.data.results.map(convertToRecipe);
      }
    );
    builder.addCase(
      extraActions.getHelthiestRecipes.success,
      (state, action) => {
        state.healthRecipesList = action.payload.data.results.map(convertToRecipe);
      }
    );
  }
});

export { selectors };