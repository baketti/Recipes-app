import React, { memo } from "react";
import { 
    Box, 
    Stack,
    CircularProgress
} from "@mui/material";
import { RecipeCard } from "@/components/RecipeCard";
import { useRecipesList } from "./index.hooks"
import { Recipe } from "@/models/Recipe";

type RecipesListProps = {
    recipesList: Recipe[];
};

export const RecipesList = memo(({recipesList}: RecipesListProps) => {
    const {} = useRecipesList();

    return (
        <Stack 
            direction="row" 
            sx={{ 
                flexWrap:"wrap", 
                justifyContent:"center", 
                gap:4 
            }}
        >
            {recipesList.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe}/>
            ))}
        </Stack>
    );
});

RecipesList.displayName = "RecipesList";