type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type SVG = React.SVGProps<SVGSVGElement> | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
type Step = {
  /**
   * Step label.
   */
  label: string;
  /**
   * Description that will be placed next to the step.
   */
  description?: string;
  /**
   * Element used as the icon to be displayed in the step.
   */
  icon?: SVG;
  /**
   * @deprecated URL of the icon to be displayed in the step.
   */
  iconSrc?: string;
  /**
   * Whether the step is disabled or not.
   */
  disabled?: boolean;
  /**
   * Whether the step is valid or not.
   */
  valid?: boolean;
};
type Props = {
  /**
   * The wizard can be showed in horizontal or vertical.
   */
  mode?: "horizontal" | "vertical";
  /**
   * Defines which step is marked as the current. The numeration starts in 0.
   */
  currentStep?: number;
  /**
   * This function will be called when the user clicks a step. The step
   * number will be passed as a parameter.
   */
  onStepClick?: (newCurrentStep: number) => void;
  /**
   * An array of objects representing the steps.
   */
  steps: Step[];
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Value of the tabindex attribute that is given to all the steps.
   */
  tabIndex?: number;
};

export default Props;
