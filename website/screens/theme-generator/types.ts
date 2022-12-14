export interface IInputThemeDictionary {
  [key: string]: string;
}
export interface IThemeDictionary {
  [key: string]: IInputThemeDictionary;
}

type ImportDialogProps = {
  customThemeSchema: IThemeDictionary;
  setCustomTheme: React.Dispatch<React.SetStateAction<IThemeDictionary>>;
  setDialogVisible: (isVisible: boolean) => void;
};

export default ImportDialogProps;