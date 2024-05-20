export enum DialogTypes {}

export interface UiState {
  errorText: string | null;
  isDialogOpen: {
    [key in DialogTypes]: boolean;
  };
}
