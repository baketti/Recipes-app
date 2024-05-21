import axios from 'axios';
import { useState, useMemo, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/spa/redux-store";
import { Recipe, convertToRecipe } from "@/models/Recipe";
import { DialogTypes } from "@/spa/redux-store/slices/ui/ui.interfaces";

/* const schema = yup.object().shape({
  query: yup.string().min(3,"Keyword must be at least 3 characters").max(50),
}); */

interface Filters {
  cuisine?: string;
  intolerances?: string;
  type?: string;
}

const schema = yup.object().shape({
  filters: yup.object().shape({
    cuisine: yup.string().optional(),
    intolerances: yup.string().optional(),
    type: yup.string().optional(),
  }),
  query: yup.string().when('filters', 
    (filters: Filters[], schema: yup.StringSchema) => {
      return !!Object.keys(filters[0]).length ? schema.min(0) : 
      schema.min(3, "Keyword must be at least 3 characters").max(50);
    }),
});

type FormSearchRecipesData = {
  filters: Filters;
  query: string;
}

type ApiResponse = {
  results: Record<string, any>[];
};

export const useSearchRecipesScene = () => {
  const [bestRecipes, setBestRecipes] = useState<Recipe[]>([]);
  const [helthiestRecipes, setHelthiestRecipes] = useState<Recipe[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getRecipesRandom.request({}));
    return () => {
        dispatch(actions.resetRecipesList());
    }
  }, [dispatch]);  

  const isRecipesListLoading = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.getRecipesRandom.api)
  );

  const recipesList = useSelector(selectors.getRecipesList);

  const fetchBestRecipes = useCallback(async():Promise<Recipe[]> => {
      const { data } = await axios.get<ApiResponse>(
        'https://api.spoonacular.com/recipes/complexSearch', {
          params:{
            apiKey:process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
            number: 4,
            sort: 'popularity',
            addRecipeNutrition: true,
          }
        });
      const { results } = data;
      return results.map(convertToRecipe);
  }, []);

  const fetchHelthiestRecipes = useCallback(async():Promise<Recipe[]> => {
      const { data } = await axios.get<ApiResponse>(
        'https://api.spoonacular.com/recipes/complexSearch', {
          params:{
            apiKey:process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
            number: 4,
            sort: 'healthiness',
            addRecipeNutrition: true,
          }
        });
      const { results } = data;
      return results.map(convertToRecipe);
  }, []);

/*   useEffect(() => {
      const getBestRecipes = async () => {
          const recipes = await fetchBestRecipes();
          setBestRecipes(recipes);
      };
      const getHelthiestRecipes = async () => {
          const recipes = await fetchHelthiestRecipes();
          setHelthiestRecipes(recipes);
      }
      getBestRecipes();
      getHelthiestRecipes();
    }, 
    [fetchBestRecipes,fetchHelthiestRecipes]
  );       */           

  const handleFiltersIconClick = useCallback(() => {
    dispatch(actions.setDialogOpen({
      dialogType: DialogTypes.FILTERS_FORM,
      open: true,
    }))
  }, [dispatch]);
                  
  const defaultValues = useMemo<FormSearchRecipesData>(
    () => ({
      filters:{},
      query: "",
    }), []
  );

  const formData = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    setValue,
    formState: { isValid, isSubmitted, isDirty },
  } = formData;

  const queryFilters = useSelector(selectors.getQueryFilters);
  console.log("queryFilters", queryFilters);

  useEffect(()=>{
    setValue('filters', queryFilters);
  },[setValue,queryFilters])

  const hasFilters = useMemo(() => {
    return !!Object.keys(queryFilters).length
  },[queryFilters]);
  console.log("hasFilters", hasFilters);
  
  const submitDisabled = (isSubmitted && !isValid) || (!isDirty && !hasFilters);

  const triggerSubmit = useMemo(
    ()=> handleSubmit((data) => {
      console.log(data);
      const { query } = data;
      dispatch(actions.getRecipesByQuery.request({ query, ...queryFilters }));
    }), [handleSubmit, dispatch,queryFilters]);

  useEffect(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  return {
    recipesList,
    isRecipesListLoading,
    handleFiltersIconClick,
    formData,
    triggerSubmit,
    submitDisabled,
    bestRecipes,
    helthiestRecipes,
  };
};