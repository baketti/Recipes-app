import { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/spa/redux-store";

export const useRecipesList = () => {
    const dispatch = useDispatch();

    const recipesList = useSelector(selectors.getRecipesList);

    useEffect(() => {
        dispatch(actions.getRecipesRandom.request({}));
    }, [dispatch]);

    return {
        recipesList
    };
}