export type IndexedThemeInput = {
  [key: string]: string;
}
export type IndexedTheme = {
  [key: string]: IndexedThemeInput;
}

type ImportDialogProps = {
  customThemeSchema: IndexedTheme;
  setCustomTheme: React.Dispatch<React.SetStateAction<IndexedTheme>>;
  setDialogVisible: (isVisible: boolean) => void;
};

export default ImportDialogProps;