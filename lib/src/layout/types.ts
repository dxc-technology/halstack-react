type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";

type Padding = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type ChildrenType =
  | AppLayoutHeaderPropsType
  | AppLayoutMainPropsType
  | AppLayoutFooterPropsType
  | AppLayoutSidenavPropsType;

export type AppLayoutHeaderPropsType = {
  /**
   * Everything between this tags will be displayed as a header, at the top of the screen.
   * This is optional and if it is not specified, the DxcHeader will be shown by default.
   */
  children?: React.ReactNode;
};

export type AppLayoutMainPropsType = {
  /**
   * Everything between the tags will be displayed as the content of the main part of the application.
   */
  children: React.ReactNode;
};

export type AppLayoutFooterPropsType = {
  /**
   * Everything between the tags will be displayed as a footer, at the bottom of the screen.
   * This is optional and if it is not specified, the DxcFooter will be shown by default.
   */
  children?: React.ReactNode;
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
   * The area inside the sidenav. This area can be used to render custom content.
   */
  children: React.ReactElement<ChildrenType> | React.ReactElement<ChildrenType>[];
};

export default AppLayoutPropsType;
