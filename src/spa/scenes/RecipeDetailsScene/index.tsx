import React, { memo } from 'react';
import { useRecipeDetailsScene } from './index.hooks';
import { 
    Stack, 
    Typography, 
    Box, 
    CircularProgress, 
    Divider 
} from '@mui/material';
import Image from 'next/image';
import { NutrientsGraph } from '@/components/NutrientsGraph';
import { Ingredients } from '@/components/Ingredients';

type RecipeDetailsSceneProps = {};

const RecipeDetailsScene = memo(({}:RecipeDetailsSceneProps) => {
    const {
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
        <Stack spacing={2}>
            <Image src={recipe.image} alt='recipe-image' width={950} height={350} />
            <Stack spacing={2} direction="row" alignItems="center">
                <Box>
                    <Stack>
                        <Typography>Prep time</Typography>
                    </Stack>
                </Box>
                <Box>
                    <Stack>
                        <Typography>Cook time</Typography>
                    </Stack>
                </Box>
                <Box>
                    <Stack>
                        <Typography>Ready time</Typography>
                    </Stack>
                </Box>
            </Stack>
            <Divider />
            <Stack>
                <Typography variant='h2'>{recipe.title}</Typography>
            </Stack>
            <Stack>
                <Typography variant='body1' component="p" dangerouslySetInnerHTML={{ __html: recipe.summary }} />
            </Stack>
            <Stack>
                <NutrientsGraph nutrients={recipe.nutrition.nutrients} />
            </Stack>
            <Stack>
                <Typography variant='h3'>Ingredients</Typography>
                <Ingredients ingredients={recipe.extendedIngredients} />
            </Stack>
            <Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant='h3'>Recipe Steps</Typography>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography variant='body1'>steps {recipe.extendedIngredients.length}</Typography>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Typography variant='body1'>{recipe.readyInMinutes}min</Typography>
                    </Stack>
                </Stack>
                {recipe.analyzedInstructions[0].steps.map((step) => (
                    <Stack key={step.number}>
                        <Typography variant='h5'>Step {step.number}</Typography>
                        <Typography variant='body1'>{step.step}</Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
})

RecipeDetailsScene.displayName = "RecipeDetailsScene";

export default RecipeDetailsScene;