import { ReactNode, ReactElement } from "react";
import { Margin, SVG, Space } from "../common/utils";

export type AccordionItemProps = {
  /**
   * The panel label.
   */
  label: string;
  /**
   * Additional info label positioned under the label.
   */
  subLabel?: string;
  /**
   * Badge component to add extra value to the accordion.
   */
  badge?: {
    position: "before" | "after";
    element: ReactNode;
  };
  /**
   * Status light component to add extra value to the accordion.
   */
  statusLight?: ReactNode;
  /**
   * Material Symbol name or SVG element used as the icon that will be
   * placed next to panel label. When using Material Symbols, replace spaces with underscores.
   * By default they are outlined if you want it to be filled
   * prefix the symbol name with "filled_".
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
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
};

type CommonProps = {
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Contains one or more accordion items.
   */
  children: ReactElement<AccordionItemProps>[] | ReactElement<AccordionItemProps>;
};

type IndependentProps = CommonProps & {
  /**
   * When true, limits the user to single-open section at a time. When false, multiple sections can be opened simultaneously.
   */
  independent: true;
  /**
   * Initially active accordion, only when it is uncontrolled.If the accordion is not independent,
   * several accordions can be activated by default.
   */
  defaultIndexActive?: number;
  /**
   * The index of the active accordion. If undefined, the component will be uncontrolled and the active
   * accordion will be managed internally by the component. If null, the component will be controlled and all
   * accordions will be closed. If the accordion is not independent, several accordions can be activated.
   */
  indexActive?: number;
  /**
   * This function will be called when the user clicks on an accordion. The index of the clicked accordion will be passed as a parameter.
   */
  onActiveChange?: (index: number) => void;
};

type NonIndependentProps = CommonProps & {
  /**
   * When true, limits the user to single-open section at a time. When false, multiple sections can be opened simultaneously.
   */
  independent?: false;
  /**
   * Initially active accordion, only when it is uncontrolled. If the accordion is not independent,
   * several accordions can be activated by default.
   */
  defaultIndexActive?: number[];
  /**
   * The index of the active accordion. If undefined, the component will be uncontrolled and the active
   * accordion will be managed internally by the component. If null, the component will be controlled and all
   * accordions will be closed. If the accordion is not independent, several accordions can be activated.
   */
  indexActive?: number[];
  /**
   * This function will be called when the user clicks on an accordion. The index of the clicked accordion will be passed as a parameter.
   */
  onActiveChange?: (index: number[]) => void;
};

type Props = IndependentProps | NonIndependentProps;

export type AccordionContextProps = {
  index: number;
  activeIndex?: number | number[];
  handlerActiveChange?: (index: number | number[]) => void;
  independent?: boolean;
};

export default Props;
