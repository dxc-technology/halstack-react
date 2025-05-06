import { Dispatch, SetStateAction } from "react";

export type IndexedThemeInput = {
  [key: string]: string;
};
export type IndexedTheme = {
  [key: string]: IndexedThemeInput;
};

type ImportDialogProps = {
  customThemeSchema: IndexedTheme;
  setCustomTheme: Dispatch<SetStateAction<IndexedTheme>>;
  setDialogVisible: (_isVisible: boolean) => void;
};

export default ImportDialogProps;
