import { useMemo, useEffect,useCallback } from "react";
import { Nutrient } from "../Nutrients";
import { RecipeNutrients, NutrientsLabels } from "@/models/Recipe";

export const useNutrientsGraph = (nutrients: Nutrient[]) => {

    const filteredNutrients = useMemo(() => {
        const recipeNutrientsValues = Object.values(RecipeNutrients);
        return nutrients?.filter(nutrient => 
            nutrient.name !== RecipeNutrients.CALORIES && 
            recipeNutrientsValues.includes(nutrient.name as RecipeNutrients));
    }, [nutrients])

    const data = useMemo(() => {
        return filteredNutrients?.map((nutrient) => {       
            let color = ''; 
            let label = '';
            switch (nutrient.name) {
                case RecipeNutrients.CARBOHYDRATES:
                    label = NutrientsLabels.CARBOHYDRATES;
                    color = 'red';
                    break;
                case RecipeNutrients.PROTEIN:
                    label = NutrientsLabels.PROTEIN;
                    color = 'blue';
                    break;
                case RecipeNutrients.FAT:
                    label = NutrientsLabels.FAT;
                    color = 'orange';
                    break;
            }            
            return {
                label,
                value: nutrient.amount,
                color,
            }
        });
    }, [filteredNutrients]);
    
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

    const caloriesAmount = useMemo(() => {
        const calories = nutrients.find(nutrient => nutrient.name === RecipeNutrients.CALORIES);
        return calories?.amount;
    }, [nutrients])

    return {
        data,
        series,
        caloriesAmount,
        NutrientsLabels,
    }
}