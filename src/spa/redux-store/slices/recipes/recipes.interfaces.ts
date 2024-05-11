import { RecipesList } from "@/models/Recipe";

export interface RecipesState {
    recipesList: RecipesList;
    currentRecipe: Record<string, any> | null;
}