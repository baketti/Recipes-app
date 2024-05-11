import React, { memo } from "react";
import { Typography, Button, Paper, Box, Stack } from "@mui/material";
import { RecipeCard } from "@/components/RecipeCard";
import { useSearchRecipesScene } from "./index.hooks"
import { RecipesList } from "@/components/RecipesList";

type SearchRecipesSceneProps = {};

const SearchRecipesScene = memo(({}: SearchRecipesSceneProps) => {
  const {} = useSearchRecipesScene();
  return (
    <RecipesList />
  );
});

SearchRecipesScene.displayName = "SearchRecipesScene";

export default SearchRecipesScene;