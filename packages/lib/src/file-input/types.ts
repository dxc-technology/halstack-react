import { Margin, Space } from "../common/utils";

export type FileData = {
  /**
   * Selected file.
   */
  file: File;
  /**
   * Error of the file. If it is defined, it will be shown and the file item will be mark as invalid.
   */
  error?: string;
  /**
   * Preview of the file.
   */
  preview?: string;
};

type CommonProps = {
  /**
   * Text to be placed above the component.
   */
  label?: string;
  /**
   * Text to be placed inside the button.
   */
  buttonLabel?: string;
  /**
   * Helper text to be placed above the component.
   */
  helperText?: string;
  /**
   * The file types that the component accepts. Its value must be one of all the possible values of the HTML file input's accept attribute.
   */
  accept?: string;
  /**
   * An array of files representing the selected files.
   */
  value: FileData[];
  /**
   * The minimum file size (in bytes) allowed. If the size of the file does not comply the minSize, the file will have an error.
   */
  minSize?: number;
  /**
   * The maximum file size (in bytes) allowed. If the size of the file does not comply the maxSize, the file will have an error.
   */
  maxSize?: number;
  /**
   * If true, if the file is an image, a preview of it will be shown. If not, an icon refering to the file type will be shown.
   */
  showPreview?: boolean;
  /**
   * If true, the component allows multiple file items and will show all of them. If false, only one file will be shown, and if there is already one
   *  file selected and a new one is chosen, it will be replaced by the new selected one.
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
  callbackFile: (files: FileData[]) => void;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
  /**
   * If true, the input will be optional, showing '(Optional)'
   * next to the label. Otherwise, the field will be considered required and an error will be
   * passed as a parameter to the OnBlur and onChange functions when it has
   * not been filled.
   */
  optional?: boolean;
};
type DropModeProps = CommonProps & {
  /**
   * Uses one of the available file input modes:
   *    'file': Files are selected by clicking the button and selecting it through the file explorer.
   *    'filedrop': Files can be selected by clicking the button and selecting it through the file explorer or by dropping them inside the drag and drop area.
   *    'dropzone':  Files can be selected by clicking the button and selecting it through the file explorer or by dropping them inside the drag and drop area.
   *     The drag and drop area of this mode is bigger than the one of the filedrop mode.
   */
  mode: "filedrop" | "dropzone";
  /**
   * Text to be placed inside the drag and drop zone alongside the button.
   */
  dropAreaLabel?: string;
};
type FileModeProps = CommonProps & {
  /**
   * Uses one of the available file input modes:
   *    'file': Files are selected by clicking the button and selecting it through the file explorer.
   *    'filedrop': Files can be selected by clicking the button and selecting it through the file explorer or by dropping them inside the drag and drop area.
   *    'dropzone':  Files can be selected by clicking the button and selecting it through the file explorer or by dropping them inside the drag and drop area.
   *     The drag and drop area of this mode is bigger than the one of the filedrop mode.
   */
  mode?: "file";
  /**
   * Text to be placed inside the drag and drop zone alongside the button.
   */
  dropAreaLabel?: never;
};

/**
 * Reference to the component.
 */
export type RefType = HTMLDivElement;

type Props = DropModeProps | FileModeProps;

/**
 * Single file item preview.
 */
export type FileItemProps = {
  fileName?: string;
  error?: string;
  showPreview: boolean;
  singleFileMode: boolean;
  preview: string;
  type: string;
  onDelete: (fileName: string) => void;
  tabIndex: number;
};

export default Props;
