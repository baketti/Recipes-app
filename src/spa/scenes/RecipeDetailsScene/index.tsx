import React, { memo } from 'react';
import { useRecipeDetailsScene } from './index.hooks';
import { Stack, Typography, Box, CircularProgress } from '@mui/material';
    
type RecipeDetailsSceneProps = {};

const RecipeDetailsScene = memo(({}:RecipeDetailsSceneProps) => {
    const {
        recipeId,
        isLoadingRecipe,
        recipe
    } = useRecipeDetailsScene();

    if (isLoadingRecipe || !recipe) {
        return (
            <Box sx={{ p: 5, display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
        );
    }

    return (
        <Stack>
            <Typography variant="h4">
                Recipe Details Scene of {recipeId}
            </Typography>
        </Stack>
    );
})

RecipeDetailsScene.displayName = "RecipeDetailsScene";

export default RecipeDetailsScene;