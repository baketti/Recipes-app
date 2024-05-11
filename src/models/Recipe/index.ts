export type RecipesList = {
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
}[];

export type Recipe = {
    //TODO: definire il tipo di un oggetto Recipe per il dettaglio
}