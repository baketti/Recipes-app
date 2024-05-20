import React,{memo} from 'react';
import { useQueryFiltersForm } from './index.hooks'; 
import { Stack } from "@mui/material";  
import { FormSelect } from "@/components/FormSelect";

export const QueryFiltersForm = memo(() => {
    const {
        intolerancesOptions,
        cuisinesOptions,
        mealTypesOptions,
    } = useQueryFiltersForm();

    return (
        <Stack spacing={2}>
            <FormSelect name='cuisine' label='Cuisines' options={cuisinesOptions}/>
            <FormSelect name='intolerance' label='Intolerances' options={intolerancesOptions}/>
            <FormSelect name='type' label='Meal types' options={mealTypesOptions}/>
        </Stack>
    );
});

QueryFiltersForm.displayName = "QueryFiltersForm";