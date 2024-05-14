import React, { memo } from "react";
import { Typography, Button, Paper, Box, Stack } from "@mui/material";
import { useSearchRecipesScene } from "./index.hooks";
import { RecipesList } from "@/components/RecipesList";
import { SearchTextField } from "@/components/SearchTextField";
import { FormProvider } from "react-hook-form";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

type SearchRecipesSceneProps = {};

const SearchRecipesScene = memo(({}: SearchRecipesSceneProps) => {
  const {
    formData,
    triggerSubmit,
    submitDisabled,
  } = useSearchRecipesScene();
  return (
    <Stack sx={{ p: 2, alignItems:"center", width:"100%" }} spacing={4}>
      <FormProvider {...formData}>
        <form onSubmit={triggerSubmit} style={{width:"100%"}}>
          <Stack direction="row" spacing={1} justifyContent="center">
            <SearchTextField name="query" label="Search" sx={{ flexGrow: 0.5 }}/>
            <IconButton 
                type="submit" color="primary" aria-label="search" size="large" 
                disabled={submitDisabled}>
              <SearchIcon />
            </IconButton>
          </Stack>
        </form>
      </FormProvider>
      <RecipesList />
    </Stack>
  );
});

SearchRecipesScene.displayName = "SearchRecipesScene";

export default SearchRecipesScene;