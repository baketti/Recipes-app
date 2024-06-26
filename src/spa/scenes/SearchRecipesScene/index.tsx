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
import { Tooltip } from '@mui/material';
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { BackButton } from "@/components/BackButton";

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
    healthiestRecipes,
  } = useSearchRecipesScene();

  return (
    <Stack position="relative" sx={{ p: 2, alignItems:"center", width:"100%", mb:10 }} spacing={4}>
      <BackButton isDetailsScene={false} />
      <FormProvider {...formData}>
        <form onSubmit={triggerSubmit} style={{width:"100%"}}>
          <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
            <Tooltip title="Filters">
              <IconButton 
                  type="submit" color="primary" aria-label="filters" size="large" onClick={handleFiltersIconClick}
              >
                <TuneIcon sx={{cursor:"pointer"}} fontSize="large" color="primary"  />
              </IconButton>
            </Tooltip>
            <SearchTextField name="query" label="Search" sx={{ flexGrow: 0.5 }}/>
            <Tooltip title="Search">
              <IconButton 
                  type="submit" color="primary" aria-label="search" size="large" 
                  disabled={submitDisabled}
              >
                <SearchIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </form>
      </FormProvider>
      <FiltersFormDialog />
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
            {!!bestRecipes.length && !!healthiestRecipes.length ? ( 
                <>
                   <Stack alignItems='center' spacing={2}>
                    <Typography variant="h1" fontWeight="bold" color="primary">
                      Best Recipes
                    </Typography>
                    <RecipesList recipesList={bestRecipes}/>
                  </Stack>
                  <Stack alignItems='center' spacing={2}>
                    <Typography variant="h1" fontWeight="bold" color="primary">
                      Healthiest Recipes
                    </Typography>
                    <RecipesList recipesList={healthiestRecipes}/>
                  </Stack> 
                </>
              ) : <></>
            }
          </>
        )
      }
      <Tooltip title="Scroll to top">
        <ScrollToTopButton />
      </Tooltip>
    </Stack>
  );
});

SearchRecipesScene.displayName = "SearchRecipesScene";

export default SearchRecipesScene;