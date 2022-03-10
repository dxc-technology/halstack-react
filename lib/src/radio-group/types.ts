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
  optionalItemLabel?: string;
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
  currentValue?: string;
  onChange: (optionValue: string) => void;
  disabledRadioGroup: boolean;
  error?: string;
  /**
   * True if it is the first radio/option and there isn't any other radio in the radio group checked. 
   * False in any other case. When the radio group gains the focus, it should give it to the first radio/option.
   */
  first?: boolean;
};

export default RadioGroupProps;
