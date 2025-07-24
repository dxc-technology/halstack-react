type Mode = "default" | "info" | "success" | "warning" | "error";
type Size = "small" | "medium" | "large";

type Props = {
  /**
   * It will define the color of the light based on its semantic meaning.
   */
  mode?: Mode;
  /**
   * An auxiliar text that will add some context to the status.
   */
  label: string;
  /**
   * Size of the component. Should be defined based on its importance and/or available space.
   */
  size?: Size;
};

export default Props;
