import { useMemo } from "react";
import { Nutrient } from "../Nutrients";
import { RecipeNutrients, NutrientsLabels } from "@/models/Recipe";

export const useNutrientsGraph = (nutrients: Nutrient[]) => {

    const filteredNutrients = useMemo(() => {
        const recipeNutrientsValues = Object.values(RecipeNutrients);
        return nutrients?.filter(nutrient => 
            nutrient.name !== RecipeNutrients.CALORIES && 
            recipeNutrientsValues.includes(nutrient.name as RecipeNutrients));
    }, [nutrients])

    const caloriesAmount = useMemo(() => {
        const calories = nutrients?.find(nutrient => nutrient.name === RecipeNutrients.CALORIES);
        return calories?.amount;
    } ,[nutrients])

    const data = useMemo(() => {
        const labels = Object.values(NutrientsLabels);
        return filteredNutrients?.map((nutrient,i) => ({
            label: labels[i],
            value: nutrient.amount,
            color: nutrient.name === RecipeNutrients.CARBOHYDRATES ? 'red' : 
                   nutrient.name === RecipeNutrients.PROTEIN ? 'blue' : 
                   'orange'
            })
        ) 
    } ,[filteredNutrients])

    const series = useMemo(() => {
        return [
            {
              innerRadius: 100,
              outerRadius: 140,
              id: 'series1',
              data: data || [],
            },
        ];
    },[data])

    return {
        data,
        series,
        caloriesAmount,
        NutrientsLabels,
    }
}