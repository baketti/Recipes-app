import { Recipe, RecipeDetails } from "@/models/Recipe";

export interface RecipesState {
    recipesList: Recipe[];
    currentRecipe: RecipeDetails | null;
    queryFilters: {
        cuisine?: string;
        intolerances?: string;
        type?: string;
    };
}