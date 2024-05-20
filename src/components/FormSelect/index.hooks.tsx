import useFormField from "@/hooks/useFormField";
import { SelectChangeEvent } from "@mui/material";
import React, { useCallback } from "react";

export const useFormSelect = (name: string) => {
  const { value, setValue, error } = useFormField<string>({ name });

  const handleChange = useCallback(
    (ev: SelectChangeEvent<string>) => {
      setValue(ev.target.value);
    },
    [setValue],
  );

  return {
    value,
    handleChange,
    error,
  };
};
