import { useMemo, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/spa/redux-store";
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
      schema.min(3, "Keyword must be at least 3 characters").max(20);
    }),
});

type FormSearchRecipesData = {
  filters: Filters;
  query: string;
}

export const useSearchRecipesScene = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getRecipesRandom.request({}));
    dispatch(actions.getBestRecipes.request({}));
    dispatch(actions.getHelthiestRecipes.request({}));
    return () => {
        dispatch(actions.resetRecipesList());
    }
  }, [dispatch]);  

  const isRecipesListLoading = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.getRecipesRandom.api)
  );

  const recipesList = useSelector(selectors.getRecipesList);

  const bestRecipes = useSelector(selectors.getBestRecipesList);

  const healthiestRecipes = useSelector(selectors.getHealthiestRecipesList)

  const handleFiltersIconClick = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
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

  useEffect(()=>{
    setValue('filters', queryFilters);
  },[setValue,queryFilters])

  const hasFilters = useMemo(() => {
    return !!Object.keys(queryFilters).length
  },[queryFilters]);
  
  const submitDisabled = (isSubmitted && !isValid) || (!isDirty && !hasFilters);

  const triggerSubmit = useMemo(
    ()=> handleSubmit((data) => {
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
    healthiestRecipes,
  };
};
