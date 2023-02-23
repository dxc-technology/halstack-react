type Props = {
  /**
   * Type of the input.
   */
  typeNumber?: string;
  /**
   * Minimum value allowed by the number input.
   */
  minNumber?: number;
  /**
   * Maximum value allowed by the number input.
   */
  maxNumber?: number;
  /**
   * The step interval to use when using the up and down arrows to adjust the value.
   */
  stepNumber?: number;
};

export default Props;
