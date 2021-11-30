type SVG = string | (HTMLElement & SVGElement);
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type OptionGroup = {
  label: string;
  options: Option[];
};
type Option = {
  icon?: string | SVG;
  label: string;
  value: string;
};

type Props = {
  label: string;
  name: string;
  value: string | string[];
  options: Option[] | OptionGroup[];
  helperText: string;
  placeholder: string;
  disabled: boolean;
  optional: boolean;
  searchable: boolean;
  multiple: boolean;
  onChange: (value: string | string[]) => void;
  onBlur: (val: { value: string | string[]; error: string }) => void;
  error: string;
  margin: string | Margin;
  size: "small" | "medium" | "large" | "fillParent";
  tabIndex: number;
  ref: React.RefObject<HTMLDivElement>;
};

export default function DxcNewSelect(props: Props): JSX.Element;