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
        <Stack spacing={2} sx={{mt:2}}>
            {ingredients.map((ingredient) => (
                <Paper key={ingredient.id} sx={{ p: 2 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Stack direction="row" alignItems="center" spacing={3}>
                            <Image src={BASE_INGREDIENT_IMG_URL+ingredient.image} alt='ingredient-image' 
                                width={70} height={70} />
                            <Typography 
                                variant="h4" 
                                sx={{textTransform:"capitalize", fontWeight: "bold"}}
                                color='primary'
                            >
                                {ingredient.nameClean}
                            </Typography>
                        </Stack>
                        <Typography variant="h4" color='rgba(0,0,0,0.6)' sx={{fontWeight: "bold"}}>
                            {ingredient.measures.metric.amount} {ingredient.measures.metric.unitShort}    
                        </Typography>
                    </Stack>
                </Paper>
            ))}
        </Stack>
    );
});

Ingredients.displayName = "Ingredients";