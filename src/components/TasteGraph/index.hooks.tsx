import { useMemo } from "react";
import { Taste, tasteLabels } from "@/models/Recipe";

export const useTasteGraph = (taste:Taste) => {
    const tasteEntries = useMemo(() => 
        taste ? Object.entries(taste) : [], 
    [taste]);

    const tasteDataset = useMemo(() => 
        tasteEntries.map(entry => ({
            key: tasteLabels[entry[0] as keyof Taste],
            taste: entry[1]
        })), 
    [tasteEntries]);

    return {
        tasteDataset
    }
}