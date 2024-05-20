export enum DialogTypes {
  FILTERS_FORM = "FILTERS_FORM",
}

export interface UiState {
  errorText: string | null;
  isDialogOpen: {
    [key in DialogTypes]: boolean;
  };
}
