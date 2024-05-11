import { RootState } from "@/spa/redux-store";
import { createSelector } from "@reduxjs/toolkit";

export const getRecipesList = createSelector(
    (state: RootState) => state?.recipes?.recipesList ?? [],
    (recipesList) => recipesList.map(recipe => recipe)
);

export const getCurrentRecipe = (state: RootState) => state?.recipes?.currentRecipe;
