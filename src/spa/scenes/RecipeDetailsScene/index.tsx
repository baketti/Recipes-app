import React, { memo } from 'react';
import { useRecipeDetailsScene } from './index.hooks';
import { Stack, Typography, Box, CircularProgress } from '@mui/material';
import Image from 'next/image';

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
            <Image src={recipe.image} alt='recipe-image' width={440} height={250} />
        </Stack>
    );
})

RecipeDetailsScene.displayName = "RecipeDetailsScene";

export default RecipeDetailsScene;