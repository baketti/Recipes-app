import React, { memo } from 'react';
import { useIngredients } from './index.hooks';
import { Stack, Paper, Typography, Box } from '@mui/material';
import { Ingredient } from '@/models/Ingredient';
import Image from 'next/image';

const BASE_INGREDIENT_IMG_URL = "https://img.spoonacular.com/ingredients_100x100/";

type IngredientProps = {
    ingredients: Ingredient[];
};

export const Ingredients = memo(({ ingredients }: IngredientProps) => {
    const {} = useIngredients();

    return (
        <Stack spacing={1}>
            {ingredients.map((ingredient) => (
                <Paper key={ingredient.id} sx={{ p: 2 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Stack direction="row">
                            <Image src={BASE_INGREDIENT_IMG_URL+ingredient.image} alt='ingredient-image' 
                                width={60} height={60} />
                            <Typography>{ingredient.nameClean}</Typography>
                        </Stack>
                        <Typography>
                            {ingredient.measures.metric.amount} {ingredient.measures.metric.unitShort}    
                        </Typography>
                    </Stack>
                </Paper>
            ))}
        </Stack>
    );
});

Ingredients.displayName = "Ingredients";