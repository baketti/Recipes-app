import { Ingredient } from "../Ingredient";

export type RecipesList = Recipe[];

export type Recipe = {
    id: number;
    image: string;
    nutrients: {
        name: string;
        amount: number;
        unit: string;
        percentOfDailyNeeds: number;
    }[];
    readyInMinutes: number;
    title: string;
}

export type RecipeDetails = Recipe & {
    extendedIngredients: Ingredient[];
    preparationMinutes: number;
    cookingMinutes: number;
    summary: string;
    tastes: Taste;
    analyzedInstructions: AnalyzedInstructions;
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