import { useMemo } from "react";
import { Taste } from "@/models/Recipe";

const tasteLabels: { [K in keyof Taste]: string } = {
    sweetness: 'sweet',
    saltiness: 'salty',
    sourness: 'sour',
    bitterness: 'bitter',
    savoriness: 'savory',
    fattiness: 'fatty',
    spiciness: 'spicy'
};

export const useTasteGraph = (taste:Taste) => {
    const tasteEntries = useMemo(() => Object.entries(taste), [taste]);

    const dataset = useMemo(() => 
            tasteEntries.map(entry => ({
                key: tasteLabels[entry[0] as keyof Taste],
                taste: entry[1]
            })), 
        [tasteEntries]);

    return {
        dataset
    }
}