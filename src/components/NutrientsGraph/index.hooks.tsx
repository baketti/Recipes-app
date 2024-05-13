import { useMemo } from "react";
import { Nutrient } from "../Nutrients";

export const useNutrientsGraph = (nutrients: Nutrient[]) => {

    //TODO: ORDERED NUTRIENTS con nutrients

    const data = useMemo(() => {
        return [
            { label: 'Carbs', value: 100 },//aggiungeremo color
            { label: 'Protein', value: 300 },
            { label: 'Fat', value: 100 },
        ];
    } ,[])

    const series = useMemo(() => {
        return [
            {
              innerRadius: 100,
              outerRadius: 140,
              id: 'series-2',
              data: data,
            },
        ];
    },[data])

    return {
        data,
        series
    }
}