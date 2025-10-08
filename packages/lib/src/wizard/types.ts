import { Margin, SVG, Space } from "../common/utils";

export type StepProps = {
  /**
   * Step label.
   */
  label: string;
  /**
   * Description that will be placed next to the step.
   */
  description?: string;
  /**
   * Material Symbol name or SVG element used as the icon displayed in the step.
   */
  icon?: string | SVG;
  /**
   * If true, the step will be disabled.
   */
  disabled?: boolean;
  /**
   * Whether the step is valid or not.
   */
  valid?: boolean;
};

type Props = {
  /**
   * The wizard can be shown in horizontal or vertical.
   */
  mode?: "horizontal" | "vertical";
  /**
   * Initially selected step, only when it is uncontrolled.
   */
  defaultCurrentStep?: number;
  /**
   * Defines which step is marked as the current. The numeration starts at 0.
   */
  currentStep?: number;
  /**
   * This function will be called when the user clicks a step. The step
   * number will be passed as a parameter.
   */
  onStepClick?: (currentStep: number) => void;
  /**
   * An array of objects representing the steps.
   */
  steps: StepProps[];
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
