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
   * The area inside the sidenav. This area can be used to render the content inside the sidenav.
   */
  children: React.ReactNode;
  /**
   * The area assigned to render the sidenav title. It is highly recommended to use the sidenav title.
   */
  title?: React.ReactNode;
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
