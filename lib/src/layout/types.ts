type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";

type Padding = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type ChildrenType = AppLayoutMainPropsType | AppLayoutSidenavPropsType;

export type AppLayoutMainPropsType = {
  /**
   * Everything between the tags will be displayed as the content of the main part of the application.
   */
  children: React.ReactNode;
};

export type AppLayoutSidenavPropsType = {
  /**
   * Size of the padding to be applied to the custom area ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different padding sizes.
   */
  padding?: Space | Padding;
  /**
   * The area inside the sidenav. This area can be used to render custom content.
   */
  children: React.ReactNode;
};

type AppLayoutPropsType = {
  /**
   * Text to be placed next to the hamburger button that toggles the
   * visibility of the sidenav.
   */
  visibilityToggleLabel?: string;
  /**
   * Header content.
   */
  header?: React.ReactNode;
  /**
   * Sidenav content
   */
  sidenav?: React.ReactNode;
  /**
   * Footer content
   */
  footer?: React.ReactNode;
  /**
   * The area inside the sidenav. This area can be used to render custom content.
   */
  children: React.ReactElement<ChildrenType> | React.ReactElement<ChildrenType>[];
};

export default AppLayoutPropsType;
