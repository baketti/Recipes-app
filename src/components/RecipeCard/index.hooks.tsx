import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useRecipeCard = () => {
    const navigate = useNavigate();

    const handleRecipeCardClick = useCallback(
        (recipeId: number) => {
            navigate(`/${recipeId}`);
        },[navigate]);

    return {
        handleRecipeCardClick
    };
}