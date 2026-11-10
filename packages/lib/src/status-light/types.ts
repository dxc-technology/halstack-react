import { Mode } from "../common/types";

export type StatusLightProps = {
  /**
   * It will define the color of the light based on its semantic meaning.
   */
  mode?: Mode;
  /**
   * An auxiliar text that will add some context to the status.
   */
  label: string;
  /**
   *  Size of the component. Should be defined based on its importance and/or available space.
   */
  size?: "small" | "medium" | "large";
};

export type { StatusLightProps as default };
