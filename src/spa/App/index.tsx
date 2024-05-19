import React, { memo } from "react";
import { ThemeProvider } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SearchRecipesScene from "@/spa/scenes/SearchRecipesScene";
import RecipeDetailsScene from "../scenes/RecipeDetailsScene";
import AppContainer from "@/components/AppContainer";
import { AppSnackbar } from "@/components/AppSnackbar";
import useAppHooks from "./index.hooks";

const App = memo(() => {
  const { lightTheme, open, type, message, handleClose } = useAppHooks();
    return (
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter basename="/recipes">
          <Routes>
            <Route element={<AppContainer />}>
              <Route path="" element={<SearchRecipesScene />} />
              <Route path="/:recipeId" element={<RecipeDetailsScene />} />
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
        <AppSnackbar
          open={open}
          message={message}
          severity={type}
          onClose={handleClose}
        />
      </ThemeProvider>
    );
  });
  
  App.displayName = "App";

  export default memo(App);
  