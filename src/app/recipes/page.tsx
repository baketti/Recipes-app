"use client"

import React, { memo } from "react";
import RecipesSpa from "@/spa";

type RecipesProps = {};

const Recipes = memo(({}: RecipesProps) => {
  return <RecipesSpa />;
});
Recipes.displayName = "Recipes";

export default Recipes;