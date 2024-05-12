import { useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/spa/redux-store";

const schema = yup.object().shape({
  query: yup.string().optional().min(3).max(50),
});

type FormSearchRecipesData = {
  query: string;
}

export const useSearchRecipesScene = () => {
  const dispatch = useDispatch();

  const defaultValues: FormSearchRecipesData = useMemo<FormSearchRecipesData>(
    () => ({
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
    formState: { isValid, isSubmitted, isDirty },
  } = formData;

  const submitDisabled = (isSubmitted && !isValid) || !isDirty;

  const triggerSubmit = useMemo(
    ()=> handleSubmit((data) => {
      console.log(data);
      const { query } = data;
      dispatch(actions.getRecipesByQuery.request({ query }));
    }), [handleSubmit, dispatch]);

  useEffect(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  return {
    formData,
    triggerSubmit,
    submitDisabled,
  };
};