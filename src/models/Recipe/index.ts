import { Ingredient } from "../Ingredient";

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
    }[];
    caloricBreakdown: {
        percentProtein: number;
        percentFat: number;
        percentCarbs: number;
    };
    weightPerServing: {
        amount: number;
        unit: string;
    };
}

type Taste = {
    sweetness: number;
    saltiness: number;
    sourness: number;
    bitterness: number;
    savoriness: number;
    fattiness: number;
    spiciness: number;
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