import React, { FC, memo } from 'react';
import { Stack, Box } from '@mui/material';
import Image from 'next/image';
import  { formatTime } from '@/utils';
import TimerIcon from '@mui/icons-material/Timer';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CircleIcon from '@mui/icons-material/Circle';
import { useRecipeCard } from './index.hooks';

type RecipeCardProps = {
    recipe: Record<string, any>;
};

export const RecipeCard:FC<RecipeCardProps> = memo(({recipe}) => {
    const {
        handleRecipeCardClick,
    } = useRecipeCard();
  return (
    <Stack onClick={() => handleRecipeCardClick(recipe.id)} width="440px" spacing={2} sx={{
        borderRadius:"8px",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",
        minHeight:"250px",
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
    }}>
        <Image 
            src={recipe.image}
            alt='recipe-image'
            width={440}
            height={250}
            style={{borderRadius:"8px 8px 0 0",maxHeight:"250px"}}   
        />
        <Stack spacing={2} alignItems="center" width={1} position="absolute" bottom={0} 
            sx={{backgroundColor:"white", py:2}}>
            <Box sx={{maxWidth:"80%",overflow:"hidden"}}>
                {recipe.title}
            </Box>
            <Stack direction="row" spacing={4} color="#6f737a">
                <Box sx={{display:"flex",alignItems:"center"}}>
                    <TimerIcon /> {formatTime(recipe.readyInMinutes)}
                </Box>
                <Box sx={{display:"flex",alignItems:"center"}}>
                  <LocalFireDepartmentIcon/> {Math.floor(recipe.nutrients[0].amount)} {recipe.nutrients[0].name}
                </Box>
                <Box>
                    <Stack direction="row" spacing={1}>
                        <Box sx={{display:"flex",alignItems:"center"}}> 
                            <CircleIcon sx={{color:"#fda120"}}/> {Math.floor(recipe.nutrients[1].amount)}{recipe.nutrients[1].unit}
                        </Box>
                        <Box sx={{display:"flex",alignItems:"center"}}> 
                            <CircleIcon sx={{color:"#f94642"}} /> {Math.floor(recipe.nutrients[2].amount)}{recipe.nutrients[2].unit}
                        </Box>
                        <Box sx={{display:"flex",alignItems:"center"}}> 
                            <CircleIcon sx={{color:"#3177bb"}}/> {Math.floor(recipe.nutrients[3].amount)}{recipe.nutrients[3].unit}
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    </Stack>
  );
});

RecipeCard.displayName = 'RecipeCard';