import React, { memo } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SearchRecipesScene from "@/spa/scenes/SearchRecipesScene";
import RecipeDetailsScene from "../scenes/RecipeDetailsScene";
import AppContainer from "@/components/AppContainer";

const App = memo(() => {
    return (
        <BrowserRouter basename="/recipes">
          <Routes>
            <Route element={<AppContainer />}>
              <Route path="" element={<SearchRecipesScene />} />
              <Route path="/:recipeId" element={<RecipeDetailsScene />} />
            </Route>
          </Routes>
        </BrowserRouter>
    );
  });
  
  App.displayName = "App";

  export default memo(App);
  