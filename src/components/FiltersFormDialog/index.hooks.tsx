import { useState, useMemo, useEffect, useCallback } from "react";
import { DialogTypes } from "@/spa/redux-store/slices/ui/ui.interfaces";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/spa/redux-store";

const schema = yup.object().shape({
    cuisine: yup.string().optional(),
    intolerances: yup.string().optional(),
    type: yup.string().optional(),
});

type FormQueryFiltersData = {
    cuisine?: string;
    intolerances?: string;
    type?: string;
}

export const useFiltersFormDialog = () => {
    const dispatch = useDispatch();
    
    const isFiltersFormDialogOpen = useSelector(selectors.getIsDialogOpen)[
        DialogTypes.FILTERS_FORM
    ];

    const defaultValues = useMemo<FormQueryFiltersData>(
        () => ({
            cuisine: "",
            intolerances: "",
            type: "",
       }), []
    );
    
    const formData = useForm({
        resolver: yupResolver(schema),
        defaultValues,
    });

    const {
        handleSubmit,
        reset,
        formState: { isValid, isSubmitted, isDirty },
    } = formData;

    const submitDisabled = (isSubmitted && !isValid) || !isDirty;

    const triggerSubmit = useMemo(
        ()=> handleSubmit((data) => {
            const filteredValues = Object.entries(data).reduce(
                (acc, [key, value]) => {
                    if (value !== "") {
                        acc[key as keyof FormQueryFiltersData] = value;
                    }
                    return acc;
                }, {} as FormQueryFiltersData);
            window.alert(JSON.stringify(filteredValues))
    }), [handleSubmit]);

    const handleCancel = useCallback(() => {
        dispatch(actions.setDialogOpen({ 
            dialogType: DialogTypes.FILTERS_FORM, 
            open: false 
        }));
    }, [dispatch]);

    useEffect(() => {
        reset(defaultValues);
    }, [reset, defaultValues]);

    return {
        isFiltersFormDialogOpen,
        formData,
        submitDisabled,
        triggerSubmit,
        handleCancel
    }
}