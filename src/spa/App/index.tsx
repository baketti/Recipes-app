import React, { memo } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SearchRecipesScene from "@/spa/scenes/SearchRecipesScene";
import RecipeDetailsScene from "../scenes/RecipeDetailsScene";
import AppContainer from "@/components/AppContainer";

const App: React.FC = () => {
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
  };
  
  export default memo(App);
  