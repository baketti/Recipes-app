import React,{ memo } from 'react';
import { useNutrients } from './index.hooks';

export type Nutrient = { 
    name: string,
    amount: number, 
    unit: string,
}

export type NutrientsProps = {
    nutrients: Nutrient[];
};

export const Nutrients = memo(({ nutrients }:NutrientsProps) => {
    const {
        filteredNutrients
    } = useNutrients(nutrients);

    return (
        <div>
            <h2>Nutritional Information</h2>
            <ul>
                {filteredNutrients.map((nutrient: { name: string; amount: number; unit: string }) => (
                    <li key={nutrient.name}>
                        <strong>{nutrient.name}:</strong> {nutrient.amount} {nutrient.unit}
                    </li>
                ))}
            </ul>
        </div>
    );
});

Nutrients.displayName = "Nutrients";
