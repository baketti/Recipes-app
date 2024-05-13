import { RecipesList } from "@/models/Recipe";
import { Recipe } from "@/models/Recipe";

export interface RecipesState {
    recipesList: RecipesList;
    currentRecipe: Recipe | null;
}