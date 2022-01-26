import AccordionPropsType from "../accordion/types";

type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

// type Padding = {
//   top?: Space;
//   bottom?: Space;
//   left?: Space;
//   right?: Space;
// };
// type SVG = HTMLElement & SVGElement;
// type AccordionPropsType = {
//   label?: string;
//   icon?: SVG;
//   /**
//    * @deprecated
//    */
//   iconSrc?: string;
//   // iconPosition?: "before" | "after";
//   assistiveText?: string;
//   disabled?: boolean;
//   padding?: Space | Padding;
// };

type Props = {
  /**
   * The index of the active accordion. If undefined, the component will be uncontrolled and the active accordion will be managed internally by the component. 
   * If null, the component will be controlled and all accordions will be closed.
   */
  indexActive?: number;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * This function will be called when the user clicks on an accordion. The index of the clicked accordion will be passed as a parameter.
   */
  onActiveChange?: (indexActive: number) => void;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Customized accordion(s) that are allowed inside an Accordion Group. 
   */
  children: React.ReactElement<AccordionPropsType>[] | React.ReactElement<AccordionPropsType>;
};

export default Props;
