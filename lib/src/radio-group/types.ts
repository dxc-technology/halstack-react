export type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

type RadioGroupProps = {
  label: string;
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
  onBlur?: (val: { value?: string; error?: string }) => void;
  error?: string;
  tabIndex?: number;
};

export type RefType = HTMLDivElement;

export type RadioProps = {
  option: Option;
  currentValue?: string;
  onClick: () => void;
  error?: string;
  disabled: boolean;
  focused: boolean;
  readonly: boolean;
  tabIndex: number;
};

export default RadioGroupProps;
