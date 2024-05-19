import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '@/spa/redux-store';
import { useParams } from 'react-router-dom';

export const useRecipeDetailsScene = () => { 
    const dispatch = useDispatch();
    const { recipeId } = useParams<{ recipeId:string }>();

    const recipe = useSelector(selectors.getCurrentRecipe);
    const isLoadingRecipe = useSelector(
        selectors.getAjaxIsLoadingByApi(actions.getRecipeByRecipeId.api)
    );
    
    useEffect(() => {
        if (recipeId) {
            dispatch(actions.getRecipeByRecipeId.request({ recipeId }));
        }
        return () => {
            dispatch(actions.resetCurrentRecipe());
        };
    }, [dispatch, recipeId]);

    useEffect(() => {
        console.log(recipe);
    }, [recipe]);

    return {
        isLoadingRecipe,
        recipe  
    };
}