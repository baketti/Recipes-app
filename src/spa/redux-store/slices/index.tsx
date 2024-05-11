import * as extraActions from '../extra-actions';
import * as recipes from './recipes';
import * as ajax from './ajax';

export const reducers = {
    ajax: ajax.ajaxStore.reducer,
    recipes: recipes.recipesStore.reducer,
};
  
export const actions = {
    ...extraActions,
    ...ajax.ajaxStore.actions,
    ...recipes.recipesStore.actions,
};
  
export const selectors = {
    ...ajax.selectors,
    ...recipes.selectors,
};

export const sagas = [
    ...Object.values(ajax.sagas),
]
  