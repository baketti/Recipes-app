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
import { 
    formatTime,
    shimmer,
    toBase64
 } from '@/utils';
import TimerIcon from '@mui/icons-material/Timer';
import noImageAvailable from '@/assets/No_Image_Available.png';

type RecipeDetailsSceneProps = {};

const RecipeDetailsScene = memo(({}:RecipeDetailsSceneProps) => {
    const {
        isLoadingRecipe,
        recipe
    } = useRecipeDetailsScene();

    if (isLoadingRecipe || !recipe) {
        return (
            <Box sx={{  
                height: "50vh",
                display: "flex", 
                justifyContent: "center",
                alignItems: "center"
            }}>
              <CircularProgress />
            </Box>
        );
    }

    return (
        <Stack spacing={8} mt={2} mb={8} sx={{
            '@media (max-width: 430px)': {
                width: "390px",
            },
            '@media (max-width: 380px)': {
                width: "350px",
            },
        }}>
            <Stack 
                direction={{ xs: 'column', lg: 'row' }} 
                spacing={2} 
                justifyContent="space-between"
                sx={{
                    '@media (max-width: 430px)': {
                        alignItems: "center",
                    }
                }}
            >
                <Stack sx={{
                        width:{xs: "100%", lg: "60%"},
                    }} 
                    spacing={2}
                >
                    <Stack spacing={2} direction="row" alignItems="center">
                        <Box>
                            <Stack sx={{mt:{xs:2,lg:0}}}>
                                <Typography 
                                    variant='h5' 
                                    color='primary' 
                                    fontWeight="bold"
                                >
                                    READY TIME
                                </Typography>
                                <Box 
                                    display="flex" 
                                    alignItems="center"  
                                    color='rgba(0, 0, 0, .57)'
                                >
                                    <Typography 
                                        variant='h4' 
                                        sx={{
                                            ml:-2,
                                            mt:0.5,
                                            '@media (max-width: 400px)': {
                                                ml:'unset',
                                            }
                                        }}       
                                    >
                                        <TimerIcon /> 
                                    </Typography>
                                    <Typography 
                                        variant='h3'
                                    >
                                        {formatTime(recipe.readyInMinutes)}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                    <Divider />
                    <Stack>
                        <Typography variant='h1' color='primary' fontWeight='bold'>
                            {recipe.title}
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography 
                            variant='body1' 
                            component="p" 
                            dangerouslySetInnerHTML={{ 
                                __html: recipe.summary
                                }}
                        />
                    </Stack>
                </Stack>
                <Box sx={{
                    width: {xs: "100%", lg: "650px"},
                    maxHeight: {xs: "300px", sm: "350px"},
                    order: { xs: -1, lg: 'unset' },
                }}>
                    <Image 
                        src={recipe.image || noImageAvailable}
                        alt='recipe-image'
                        width={650} 
                        height={350}
                        layout="responsive"
                        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(650, 350))}`}
                        style={{
                            borderRadius: "16px",
                            maxHeight: "350px",
                        }}
                    />
                </Box>
            </Stack>
            <Stack>
                <NutrientsGraph nutrients={recipe.nutrition.nutrients} />
            </Stack>
            <Stack>
                <Typography variant='h3' fontWeight='bold' color='primary'>
                    Ingredients
                </Typography>
                <Ingredients ingredients={recipe.extendedIngredients} />
            </Stack>
            <Stack>
                <Stack 
                    direction="row" 
                    justifyContent="space-between" 
                    alignItems='center' 
                >
                    <Typography variant='h3' fontWeight='bold' color='primary'>
                        Recipe Steps
                    </Typography>
                    <Stack 
                        direction="row" 
                        alignItems="center" 
                        spacing={2}
                        sx={{ 
                            p:2, 
                            borderRadius: 6, 
                            backgroundColor: 'rgba(250, 250, 250, 0.95)',
                        }}
                        color='rgba(0,0,0,0.6)'
                    >
                        <Typography variant='h4' fontWeight="bold">
                            steps {recipe.analyzedInstructions[0]?.steps.length || 0}
                        </Typography>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Typography variant='h4'>
                            {recipe.readyInMinutes}min
                        </Typography>
                    </Stack>
                </Stack>
                <Stack spacing={2} mt={2}>
                    {recipe.analyzedInstructions.length > 0 ? (
                        recipe.analyzedInstructions[0].steps.map((step) => (
                            <Stack key={step.number}>
                                <Typography variant='h5'fontWeight='bold' color='primary'>
                                    Step {step.number}
                                </Typography>
                                <Typography variant='h6' fontWeight={400}>{step.step}</Typography>
                            </Stack>
                        ))) : (
                            <Typography variant='h6' fontWeight={400}>
                                No steps available
                            </Typography>
                        )
                    }
                </Stack>
            </Stack>
        </Stack>
    );
})

RecipeDetailsScene.displayName = "RecipeDetailsScene";

export default RecipeDetailsScene;