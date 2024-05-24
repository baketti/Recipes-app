import { Ingredient } from "../Ingredient";

export function convertToRecipe(recipe: Record<string, any>): Recipe {
    return {
        id: recipe.id,
        title: recipe.title,
        readyInMinutes: recipe.readyInMinutes,
        image: recipe.image,
        nutrition: {
            nutrients: recipe.nutrition.nutrients.filter((nutrient: { name: string; }) => 
                nutrient.name === "Calories" || 
                nutrient.name === "Protein" ||
                nutrient.name === "Fat" || 
                nutrient.name === "Carbohydrates"
            ),
        }
    }
}

export type Recipe = {
    id: number;
    image: string;
    nutrition: Nutrition;
    readyInMinutes: number;
    title: string;
}

export type RecipeDetails = Recipe & {
    extendedIngredients: Ingredient[];
    preparationMinutes: number;
    cookingMinutes: number;
    summary: string;
    taste: Taste;
    analyzedInstructions: AnalyzedInstructions;
}

type Nutrition = {
    nutrients: {
        name: string;
        amount: number;
        unit: string;
        percentOfDailyNeeds: number;
    }[]
}

export type Taste = {
    sweetness: number;
    saltiness: number;
    sourness: number;
    bitterness: number;
    savoriness: number;
    fattiness: number;
    spiciness: number;
};

export const tasteLabels: { [K in keyof Taste]: string } = {
    sweetness: 'sweet',
    saltiness: 'salty',
    sourness: 'sour',
    bitterness: 'bitter',
    savoriness: 'savory',
    fattiness: 'fatty',
    spiciness: 'spicy'
};

type AnalyzedInstructionsStep = {
    number: number;
    step: string;
    ingredients: {
        id: number;
        name: string;
        localizedName: string;
        image: string;
    }[];
    equipment: {
        id: number;
        name: string;
        localizedName: string;
        image: string;
    }[];
};

type AnalyzedInstructions = {
    name: string;
    steps: AnalyzedInstructionsStep[];
}[];

export enum RecipeNutrients {
    CARBOHYDRATES = "Carbohydrates",
    PROTEIN = "Protein",
    FAT = "Fat",
    CALORIES = "Calories",
}

export enum NutrientsLabels {
    CARBOHYDRATES = "Carbs",
    PROTEIN = "Protein",
    FAT = "Fats",
    CALORIES = "Cals",
}

export enum Intolerances {
    CANCEL = "",
    DAIRY = "Dairy",
    EGG = "Egg",
    GLUTEN = "Gluten",
    GRAIN = "Grain",
    PEANUT = "Peanut",
    SEAFOOD = "Seafood",
    SESAME = "Sesame",
    SHELLFISH = "Shellfish",
    SOY = "Soy",
    SULFITE = "Sulfite",
    TREE_NUT = "Tree Nut",
    WHEAT = "Wheat"
}

export enum Cuisines {
    CANCEL = "",
    AFRICAN = "African",
    AMERICAN = "American",
    BRITISH = "British",
    CARIBBEAN = "Caribbean",
    CHINESE = "Chinese",
    EASTERN_EUROPEAN = "Eastern European",
    EUROPEAN = "European",
    FRENCH = "French",
    GERMAN = "German",
    GREEK = "Greek",
    INDIAN = "Indian",
    IRISH = "Irish",
    ITALIAN = "Italian",
    JAPANESE = "Japanese",
    LATIN_AMERICAN = "Latin American",
    MEDITERRANEAN = "Mediterranean",
    MEXICAN = "Mexican",
    MIDDLE_EASTERN = "Middle Eastern",
    NORDIC = "Nordic",
    SOUTHERN = "Southern",
    SPANISH = "Spanish",
}

export enum MealTypes {
    CANCEL = "",
    MAIN_COURSE = "main course",
    SIDE_DISH = "side dish",
    DESSERT = "dessert",
    APPETIZER = "appetizer",
    SALAD = "salad",
    BREAD = "bread",
    BREAKFAST = "breakfast",
    SOUP = "soup",
    BEVERAGE = "beverage",
    SAUCE = "sauce",
    MARINADE = "marinade",
    FINGERFOOD = "fingerfood",
    SNACK = "snack",
    DRINK = "drink"
}
  