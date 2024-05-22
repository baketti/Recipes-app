import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as selectors from "./ui.selectors";
import { DialogTypes, UiState } from "./ui.interfaces";
import * as sagas from "./ui.sagas";
import * as extraActions from "../../extra-actions";

const initialState: UiState = {
  errorText: null,
  isDialogOpen: {
    [DialogTypes.FILTERS_FORM]: false,
  },
};

export const uiStore = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setDialogOpen: (
      state,
      action: PayloadAction<{
        dialogType: DialogTypes;
        open: boolean;
      }>,
    ) => {
      state.isDialogOpen = {
        ...(state.isDialogOpen ?? initialState.isDialogOpen),
        [action.payload.dialogType]: action.payload.open,
      };
    },
    setErrorText: (state, action: PayloadAction<string | null>) => {
      state.errorText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(extraActions.appStartup, (state) => {
      state.isDialogOpen = initialState.isDialogOpen;
      state.errorText = initialState.errorText;
    });
  },
});

export { selectors, sagas };
