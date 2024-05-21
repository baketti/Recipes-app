import { Recipe } from "@/models/Recipe";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useRecipeCard = (recipe: Recipe) => {
    const [imgSrc, setImgSrc] = useState<string>(recipe.image);

    const navigate = useNavigate();

    const handleRecipeCardClick = useCallback(
        (recipeId: number) => {
            navigate(`/${recipeId}`);
        },[navigate]);

    return {
        imgSrc, 
        setImgSrc,
        handleRecipeCardClick
    };
}