import { useMemo, } from "react";
import { 
    Intolerances, 
    Cuisines, 
    MealTypes 
} from "@/models/Recipe";

export const useQueryFiltersForm = () => {

    const intolerancesOptions = useMemo(() => 
        Object.values(Intolerances).map(intolerance => { 
            return { value: intolerance, label: intolerance };
         }), 
    []);

    const cuisinesOptions = useMemo(() => 
        Object.values(Cuisines).map(cuisine => { 
            return { value: cuisine, label: cuisine };
         }), 
    []);

    const mealTypesOptions = useMemo(() => 
        Object.values(MealTypes).map(mealType => { 
            return { value: mealType, label: mealType };
         }),
    []);

    return {
        intolerancesOptions,
        cuisinesOptions,
        mealTypesOptions,
    };
};