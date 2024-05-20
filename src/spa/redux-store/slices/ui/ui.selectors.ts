import { RootState } from "@/spa/redux-store";

export const getIsDialogOpen = (state: RootState) => state.ui.isDialogOpen;
export const getErrorText = (state: RootState) => state.ui.errorText;
