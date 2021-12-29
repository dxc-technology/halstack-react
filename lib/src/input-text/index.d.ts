type Size = "small" | "medium" | "large" | "fillParent";
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  label?: string;
  name?: string;
  value?: string;
  assistiveText?: string;
  disabled?: boolean;
  prefix?: string;
  suffix?: string;
  prefixIcon?: any;
  suffixIcon?: any;
  prefixIconSrc?: string;
  suffixIconSrc?: string;
  onClickPrefix?: void;
  onClickSuffix?: void;
  onChange?: void;
  onBlur?: void;
  invalid?: boolean;
  required?: void;
  isMasked?: boolean;
  placeholder?: string;
  autocompleteOptions?: any;
  margin?: Space | Margin;
  size?: Size;
  tabIndex?: number;
};

export default function DxcInputText(props: Props): JSX.Element;
