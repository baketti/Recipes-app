import { useMemo } from "react";
import { Nutrient } from "./index";

export const useNutrients = (nutrients:Nutrient[]) => {

    const nutrientsToUse = useMemo(()=> 
        [
            'Calories', 
            'Net Carbohydrates', 
            'Fiber', 
            'Carbohydrates',
            'Protein',
            'Fat', 
        ]
    ,[]);

    const filteredNutrients = useMemo(()=> 
        nutrients.filter(nutrient => 
            nutrientsToUse.includes(nutrient.name)
        ),[nutrients,nutrientsToUse]
    );

    return {
        filteredNutrients
    }
}