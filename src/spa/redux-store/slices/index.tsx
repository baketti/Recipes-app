import * as extraActions from '../extra-actions';
import * as recipes from './recipes';
import * as ajax from './ajax';
import * as feedback from './feedback';

export const reducers = {
    ajax: ajax.ajaxStore.reducer,
    recipes: recipes.recipesStore.reducer,
    feedback: feedback.feedbackStore.reducer,
};
  
export const actions = {
    ...extraActions,
    ...ajax.ajaxStore.actions,
    ...recipes.recipesStore.actions,
    ...feedback.feedbackStore.actions,
};
  
export const selectors = {
    ...ajax.selectors,
    ...recipes.selectors,
    ...feedback.selectors,
};

export const sagas = [
    ...Object.values(ajax.sagas),
    ...Object.values(feedback.sagas),
]
  