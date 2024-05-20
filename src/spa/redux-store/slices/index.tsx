import * as extraActions from '../extra-actions';
import * as recipes from './recipes';
import * as ajax from './ajax';
import * as feedback from './feedback';
import * as ui from './ui';

export const reducers = {
    ajax: ajax.ajaxStore.reducer,
    recipes: recipes.recipesStore.reducer,
    feedback: feedback.feedbackStore.reducer,
    ui: ui.uiStore.reducer,
};
  
export const actions = {
    ...extraActions,
    ...ajax.ajaxStore.actions,
    ...recipes.recipesStore.actions,
    ...feedback.feedbackStore.actions,
    ...ui.uiStore.actions,
};
  
export const selectors = {
    ...ajax.selectors,
    ...recipes.selectors,
    ...feedback.selectors,
    ...ui.selectors,
};

export const sagas = [
    ...Object.values(ajax.sagas),
    ...Object.values(feedback.sagas),
]
  