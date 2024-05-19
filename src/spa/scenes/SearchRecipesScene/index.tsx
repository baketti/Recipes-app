import React, { memo } from "react";
import { 
  Typography, 
  Box, 
  Stack, 
  CircularProgress 
} from "@mui/material";
import { useSearchRecipesScene } from "./index.hooks";
import { RecipesList } from "@/components/RecipesList";
import { SearchTextField } from "@/components/SearchTextField";
import { FormProvider } from "react-hook-form";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

type SearchRecipesSceneProps = {};

const SearchRecipesScene = memo(({}: SearchRecipesSceneProps) => {
  const {
    recipesList,
    isRecipesListLoading,
    formData,
    triggerSubmit,
    submitDisabled,
    bestRecipes,
    helthiestRecipes
  } = useSearchRecipesScene();
  return (
    <Stack sx={{ p: 2, alignItems:"center", width:"100%", mb:10 }} spacing={4}>
      <FormProvider {...formData}>
        <form onSubmit={triggerSubmit} style={{width:"100%"}}>
          <Stack direction="row" spacing={1} justifyContent="center">
            <SearchTextField name="query" label="Search" sx={{ flexGrow: 0.5 }}/>
            <IconButton 
                type="submit" color="primary" aria-label="search" size="large" 
                disabled={submitDisabled}
            >
              <SearchIcon />
            </IconButton>
          </Stack>
        </form>
      </FormProvider>
      {isRecipesListLoading ? ( 
            <Box sx={{
                width: "100%",
                height: "50vh", 
                display: "flex", 
                justifyContent: "center",
                alignItems: "center"
            }}>
              <CircularProgress />
            </Box>
        ) : (
          <>
            <RecipesList recipesList={recipesList}/>
            <Stack alignItems='center' spacing={2} sx={{mt:10}}>
              <Typography variant="h1" fontWeight="bold" color="primary">
                Best Recipes
              </Typography>
              <RecipesList recipesList={bestRecipes}/>
            </Stack>
            <Stack alignItems='center' spacing={2} sx={{mt:10}}>
              <Typography variant="h1" fontWeight="bold" color="primary">
                Healthiest Recipes
              </Typography>
              <RecipesList recipesList={helthiestRecipes}/>
            </Stack>
          </>
        )
      }
    </Stack>
  );
});

SearchRecipesScene.displayName = "SearchRecipesScene";

export default SearchRecipesScene;