type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  mode?: "horizontal" | "vertical";
  currentStep?: number;
  onStepClick?: void;
  steps?: any;
  margin?: Space | Margin;
  tabIndex?: number;
};

export default function DxcWizard(props: Props): JSX.Element;
