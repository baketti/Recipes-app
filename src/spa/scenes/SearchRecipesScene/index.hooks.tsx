import { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux-store";

export const useSearchRecipesScene = () => {
  const dispatch = useDispatch();
  const recipesList = useSelector(selectors.getRecipesList);
  console.log(recipesList);
  /* const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); */

  const getRecipesByQuery = useCallback(
    () => {
      //setLoading(true);
      dispatch(actions.getRecipesByQuery.request({}));
    },
    [dispatch]
  );

  useEffect(() => {
      getRecipesByQuery();
  }, [getRecipesByQuery]);

  return {};
};