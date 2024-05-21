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
import NextLink from "next/link";
import { ChevronLeft } from "@mui/icons-material";
import { ErrorMessage } from "@/components/ErrorMessage";
import TuneIcon from '@mui/icons-material/Tune';
import { FiltersFormDialog } from "@/components/FiltersFormDialog";

type SearchRecipesSceneProps = {};

const SearchRecipesScene = memo(({}: SearchRecipesSceneProps) => {
  const {
    recipesList,
    isRecipesListLoading,
    handleFiltersIconClick,
    formData,
    triggerSubmit,
    submitDisabled,
    bestRecipes,
    helthiestRecipes,
  } = useSearchRecipesScene();

  return (
    <Stack position="relative" sx={{ p: 2, alignItems:"center", width:"100%", mb:10 }} spacing={4}>
      <Box sx={{
        position:"absolute", 
        left:0, 
        top:{xs:-2,sm:'unset'},
        pl:{xs:2,sm:0},
      }}>
        <NextLink href="/" style={{display:"flex",alignItems:"center",textDecoration:"none"}}>
          <ChevronLeft
            sx={{
              width: "24px",
              height: "24px",
              color: "#E39257",
            }}
          />
          <Typography variant="h6" color="#E39257" sx={{ 
              "&:hover":{
                textDecoration:"underline",
              }
            }}
          >
            Back to home
          </Typography>
        </NextLink>
      </Box>
      <FormProvider {...formData}>
        <form onSubmit={triggerSubmit} style={{width:"100%"}}>
          <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
            <TuneIcon sx={{cursor:"pointer"}} fontSize="large" color="primary" onClick={handleFiltersIconClick} />
            <SearchTextField name="query" label="Search" sx={{ flexGrow: 0.5 }}/>
            <IconButton 
                type="submit" color="primary" aria-label="search" size="large" 
                disabled={submitDisabled}
            >
              <SearchIcon />
            </IconButton>
          </Stack>
          <FiltersFormDialog />
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
            {!!recipesList.length ? (
              <RecipesList recipesList={recipesList}/>
            ):(
              <ErrorMessage noDataMessage="No recipes found"/>
            )}
            {!!bestRecipes.length && !!helthiestRecipes.length ? (
                <>
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
              ) : <></>
            }
          </>
        )
      }
    </Stack>
  );
});

SearchRecipesScene.displayName = "SearchRecipesScene";

export default SearchRecipesScene;