import { Margin, Space } from "../common/utils";

export type FileData = {
  /**
   * Error of the file. If it is defined, it will be shown and the file item will be mark as invalid.
   */
  error?: string;
  /**
   * Selected file.
   */
  file: File;
  /**
   * Preview of the file.
   */
  preview?: string;
};

type CommonProps = {
  /**
   * The file types that the component accepts. Its value must be one of all the possible values of the HTML file input's accept attribute.
   */
  accept?: string;
  /**
   * Text to be placed inside the button.
   */
  buttonLabel?: string;
  /**
   * This function will be called when the user selects or drops a file. The list of files will be sent as a parameter.
   * In this function, the files can be updated or returned as they come. These files must be passed to the value in order to be shown.
   */
  callbackFile: (files: FileData[]) => void;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * Helper text to be placed above the component.
   */
  helperText?: string;
  /**
   * Text to be placed above the component.
   */
  label?: string;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * The maximum file size (in bytes) allowed. If the size of the file does not comply the maxSize, the file will have an error.
   */
  maxSize?: number;
  /**
   * The minimum file size (in bytes) allowed. If the size of the file does not comply the minSize, the file will have an error.
   */
  minSize?: number;
  /**
   * If true, the component allows multiple file items and will show all of them. If false, only one file will be shown, and if there is already one
   *  file selected and a new one is chosen, it will be replaced by the new selected one.
   */
  multiple?: boolean;
  /**
   * If true, the input will be optional, showing '(Optional)'
   * next to the label. Otherwise, the field will be considered required and an error will be
   * passed as a parameter to the OnBlur and onChange functions when it has
   * not been filled.
   */
  optional?: boolean;
  /**
   * If true, if the file is an image, a preview of it will be shown. If not, an icon refering to the file type will be shown.
   */
  showPreview?: boolean;
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
  /**
   * An array of files representing the selected files.
   */
  value: FileData[];
};
type DropModeProps = CommonProps & {
  /**
   * Text to be placed inside the drag and drop zone alongside the button.
   */
  dropAreaLabel?: string;
  /**
   * Uses one of the available file input modes:
   *    'file': Files are selected by clicking the button and selecting it through the file explorer.
   *    'filedrop': Files can be selected by clicking the button and selecting it through the file explorer or by dropping them inside the drag and drop area.
   *    'dropzone':  Files can be selected by clicking the button and selecting it through the file explorer or by dropping them inside the drag and drop area.
   *     The drag and drop area of this mode is bigger than the one of the filedrop mode.
   */
  mode: "filedrop" | "dropzone";
};
type FileModeProps = CommonProps & {
  /**
   * Text to be placed inside the drag and drop zone alongside the button.
   */
  dropAreaLabel?: never;
  /**
   * Uses one of the available file input modes:
   *    'file': Files are selected by clicking the button and selecting it through the file explorer.
   *    'filedrop': Files can be selected by clicking the button and selecting it through the file explorer or by dropping them inside the drag and drop area.
   *    'dropzone':  Files can be selected by clicking the button and selecting it through the file explorer or by dropping them inside the drag and drop area.
   *     The drag and drop area of this mode is bigger than the one of the filedrop mode.
   */
  mode?: "file";
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
  error?: string;
  fileName?: string;
  onDelete: (fileName: string) => void;
  preview: string;
  showPreview: boolean;
  singleFileMode: boolean;
  tabIndex: number;
  type: string;
};

export default Props;
