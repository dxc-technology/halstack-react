type Size = "small" | "medium" | "large" | "fillParent";
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type FileData = {
  error?: string;
  file?: File;
  preview?: string;
};

type Props = {
  /**
   * Name attribute of the file input element.
   */
  name?: string;
  /**
   * Text to be placed above the file input.
   */
  label?: string;
  /**
   * Uses one of the available file input modes:
   *    'file': Files are selected by clicking the button and selecting it through the file explorer.
   *    'filedrop': Files can be selected by clicking the button and selecting it through the file explorer or by dropping them inside the drag and drop area.
   *    'dropzone':  Files can be selected by clicking the button and selecting it through the file explorer or by dropping them inside the drag and drop area. 
   *     The drag and drop area of this mode is bigger than the one of the filedrop mode.
   */
   mode?: "file" | "filedrop" | "dropzone";
  /**
   * Helper text to be placed above the file input.
   */
  helperText?: string;
  /**
   * Defines the file types accepted by the component. It is not possible to select a file with a non valid type.
   */
  accept?: string;
  /**
   * An array of FileData representing the selected files. 
   */
  value?: FileData[];
  /**
   * Minimum file size allowed (in bytes). If the file size does not comply the minSize, an error will be passed to the FileData.
   */
   minSize?: number;
  /**
   * Maximum file size allowed (in bytes). If the file size does not comply the maxSize, an error will be passed to the FileData.
   */
   maxSize?: number;
  /**
   * If true and if the file is an image, a preview of it will be shown. If it is not an image, an icon refering to the file's type will be shown. 
   * If mode is not multiple and there is one file already selected, the file will be replaced by the last selected one.
   */
   showPreview?: boolean;
  /**
   * If true, more than one file can be selected. If false, only one file can be selected.
   */
   multiple?: boolean;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * This function will be called when the user selects or drops a file. The list of files will be sent as a parameter.
   * In this function, the files can be updated or returned as they come. These files must be passed to the value in order to be shown.
   */
  callbackFile?: (files: FileData[]) => void;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
};

export default function DxcNewInputText(props: Props): JSX.Element;
