type Option = {
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
  optionalOptionLabel?: string;
  readonly?: boolean;
  stacking?: "row" | "column";
  defaultValue?: string;
  value?: string;
  onChange?: (val: { value: string; error?: string }) => void;
  error?: string;
};

export type RefType = HTMLDivElement;

export type RadioProps = {
  option: Option;
  value: string;
  onChange: (optionValue: string) => void;
  disabled: boolean;
  error?: string;
};

export default RadioGroupProps;
