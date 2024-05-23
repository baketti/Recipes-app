import { RootState } from "@/spa/redux-store";
import { createSelector } from "@reduxjs/toolkit";

//memoized selectors
export const getRecipesList = createSelector(
    (state: RootState) => state?.recipes?.recipesList ?? [],
    (recipesList) => recipesList.map(recipe => recipe)
);

export const getBestRecipesList = createSelector(
    (state: RootState) => state?.recipes?.bestRecipesList ?? [],
    (bestRecipesList) => bestRecipesList.map(recipe => recipe)
);

export const getHealthiestRecipesList = createSelector(
    (state: RootState) => state?.recipes?.healthRecipesList ?? [],
    (healthRecipesList) => healthRecipesList.map(recipe => recipe)
);

//non-memoized selectors
export const getCurrentRecipe = (state: RootState) => state?.recipes?.currentRecipe;

export const getQueryFilters = (state: RootState) => state?.recipes?.queryFilters;

