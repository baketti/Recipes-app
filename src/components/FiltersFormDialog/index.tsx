import React,{ memo } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    DialogActions,
    Button,
} from "@mui/material";
import { FormProvider } from "react-hook-form";
import { useFiltersFormDialog } from "./index.hooks";
import { QueryFiltersForm } from "../QueryFiltersForm";

type FiltersFormDialogProps = {};

export const FiltersFormDialog = memo(({}: FiltersFormDialogProps) => {
    const {
        isFiltersFormDialogOpen,
        formData,
        submitDisabled,
        triggerSubmit,
        handleCancel
    } = useFiltersFormDialog();

    return (
        <Dialog open={isFiltersFormDialogOpen}>
            <DialogTitle>
                <Typography variant="h6" color="primary">
                    Filter your recipes search
                </Typography>
            </DialogTitle>
            <FormProvider {...formData}>
                <form onSubmit={triggerSubmit}>
                    <DialogContent>
                        <QueryFiltersForm />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCancel} color="error">Cancel</Button>
                        <Button type="submit">Apply</Button>
                    </DialogActions>
                </form>
            </FormProvider>
        </Dialog>
    )
});

FiltersFormDialog.displayName = "FiltersFormDialog";