import React, { memo } from "react";
import { Typography, Button, Paper, Box, Stack } from "@mui/material";
import { RecipeCard } from "@/components/RecipeCard";
import { useRecipesList } from "./index.hooks"

type RecipesListProps = {};

export const RecipesList = memo(({}: RecipesListProps) => {
    const {
        recipesList,
    } = useRecipesList();
    return (
        <Stack direction="row" sx={{ flexWrap:"wrap", justifyContent:"center", gap:4 }}>
                {recipesList.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
        </Stack>
    );
});

RecipesList.displayName = "RecipesList";