import { ReactElement, ReactNode } from "react";

import { Space, Margin, SVG } from "../common/utils";

export type AccordionPropsType = {
  /**
   * The panel label.
   */
  label: string;
  /**
   * Material Symbol name or SVG element used as the icon that will be placed next to panel label.
   */
  icon?: string | SVG;
  /**
   * Assistive text to be placed on the right side of the panel.
   */
  assistiveText?: string;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * The expanded panel of the accordion. This area can be used to render
   * custom content.
   */
  children: ReactNode;
};

type Props = {
  /**
   * Initially active accordion, only when it is uncontrolled.
   */
  defaultIndexActive?: number;
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
  children: ReactElement<AccordionPropsType>[] | ReactElement<AccordionPropsType>;
};

export type AccordionGroupAccordionContextProps = {
  activeIndex: number;
  handlerActiveChange: (index: number) => void;
  disabled: boolean;
  index: number;
};

export default Props;
