import React, { useCallback, useMemo } from "react";
import { useFormContext, useWatch } from "react-hook-form";

type useFormFieldProps = {
    name: string;
  };
  
    const useFormField = <T,>({ name }: useFormFieldProps) => {
    const {
        control,
        getFieldState,
        formState: { errors, isSubmitted },
        setValue: _setValue,
    } = useFormContext();

    const value: T = useWatch({
        control,
        name,
    });

    const setValue = useCallback(
        (newValue: T) => {
        _setValue(name, newValue, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: isSubmitted,
        });
        },
        [name, _setValue, isSubmitted],
    );

    const error: string | null = getFieldState(name)?.error?.message ?? null;

    return {
        value,
        setValue,
        error,
    };
};

export default useFormField;