import { Mode } from "../common/types";

export type StatusLightProps = {
  /**
   * It will define the color of the light based on its semantic meaning.
   */
  mode?: Mode;
  /**
   * An auxiliar text that will add some context to the status. It is the only accessible text of the component:
   * without it, the status light is only a colored dot and it must be accompanied by a visible element or by
   * surrounding context that explains its meaning. Screen readers only announce the status when a label is provided.
   */
  label?: string;
  /**
   *  Size of the component. Should be defined based on its importance and/or available space.
   */
  size?: "small" | "medium" | "large";
};

export type { StatusLightProps as default };
