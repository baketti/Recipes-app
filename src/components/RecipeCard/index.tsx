import React, { memo } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import Image from 'next/image';
import { 
    formatTime,
    shimmer,
    toBase64
 } from '@/utils';
import TimerIcon from '@mui/icons-material/Timer';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CircleIcon from '@mui/icons-material/Circle';
import { useRecipeCard } from './index.hooks';
import { Recipe } from '@/models/Recipe';
import noImageAvailable from '@/assets/No_Image_Available.png';
import { Tooltip } from '@mui/material';

const recipeCardStyles = {
    borderRadius:"8px",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",
    minHeight:"300px",
    px:0,
    pb:2,
    position: 'relative',
    alignItems: "center",
    overflow: "hidden",
    '&:hover img': { 
        transform: "scale(1.2)",
        transition: "transform 0.3s ease-in-out", 
    },
    cursor: "pointer",
    '@media (min-width: 1200px) and (max-width: 1240px)': {
        width: 650,
    },
    '@media (min-width: 600px) and (max-width: 660px)': {
        width: 580,
    },
    '@media (max-width: 460px)': {
        width: 350,
    },
}

type RecipeCardProps = {
    recipe: Recipe;
};

export const RecipeCard = memo(({recipe}:RecipeCardProps) => {
    const {
        imgSrc, 
        setImgSrc,
        handleRecipeCardClick,
    } = useRecipeCard(recipe);

  return (
    <Stack onClick={() => handleRecipeCardClick(recipe.id)} 
        width={{lg:560,sm:650,xs:460}} 
        spacing={2} 
        sx={{...recipeCardStyles}}>
        <Image 
            src={imgSrc}
            alt='recipe-image'
            fill
            sizes="(max-width: 600px) 460px, (max-width: 900px) 650px, 560px"
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(650, 250))}`}
            style={{
                borderRadius:"8px 8px 0 0",
                maxHeight:"250px",
            }}
            onError={() => setImgSrc(noImageAvailable.src)}
        />
        <Stack spacing={2} alignItems="center" width={1} position="absolute" bottom={0} 
            sx={{backgroundColor:"white", py:2}}>
            <Box sx={{maxWidth:"80%",overflow:"hidden", textAlign:"center"}}>
                <Typography variant="h4" fontWeight="bold" color="primary">
                    {recipe.title}
                </Typography>
            </Box>
            <Stack 
                direction={{xs:"column",sm:"row"}} 
                spacing={{xs:1,sm:4}} 
                color="#6f737a" 
                justifyContent="space-between"
                width={0.8}
            >
                <Stack direction="row" spacing={2}>
                    <Box sx={{display:"flex",alignItems:"center"}}>
                        <TimerIcon /> {formatTime(recipe.readyInMinutes)}
                    </Box>
                    <Box sx={{display:"flex",alignItems:"center"}}>
                        <LocalFireDepartmentIcon/> {Math.floor(recipe.nutrition?.nutrients[0].amount)} {recipe.nutrition?.nutrients[0].name}
                    </Box>
                </Stack>
                <Box>
                    <Stack direction="row" spacing={1}>
                        <Tooltip title={recipe.nutrition?.nutrients[1].name+'s'}>
                            <Box sx={{display:"flex",alignItems:"center"}}> 
                                <CircleIcon sx={{color:"#fda120"}}/> {Math.floor(recipe.nutrition?.nutrients[1].amount)}{recipe.nutrition?.nutrients[1].unit}
                            </Box>
                        </Tooltip>
                        <Tooltip title={recipe.nutrition?.nutrients[2].name}>
                            <Box sx={{display:"flex",alignItems:"center"}}> 
                                <CircleIcon sx={{color:"#f94642"}} /> {Math.floor(recipe.nutrition?.nutrients[2].amount)}{recipe.nutrition?.nutrients[2].unit}
                            </Box>
                        </Tooltip>
                        <Tooltip title={recipe.nutrition?.nutrients[3].name+'s'}>
                            <Box sx={{display:"flex",alignItems:"center"}}> 
                                <CircleIcon sx={{color:"#3177bb"}}/> {Math.floor(recipe.nutrition?.nutrients[3].amount)}{recipe.nutrition?.nutrients[3].unit}
                            </Box>
                        </Tooltip>
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    </Stack>
  );
});

RecipeCard.displayName = 'RecipeCard';