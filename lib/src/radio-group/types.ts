export type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

type RadioGroupProps = {
  label?: string;
  name?: string;
  helperText?: string;
  options: Option[];
  disabled?: boolean;
  optional?: boolean;
  optionalItemLabel?: string;
  readonly?: boolean;
  stacking?: "row" | "column";
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
};

export type RefType = HTMLDivElement;

export type RadioProps = {
  changeCurrentFocusIndex: () => void; // nombre ?
  option: Option;
  currentValue?: string;
  onChange: (optionValue: string) => void;
  error?: string;
  disabled: boolean;
  focused: boolean;
  firstTimeFocus: boolean;
  setFirstTimeFocus: (firstTimeFocus: boolean) => void;
};

export default RadioGroupProps;
