type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";

type Padding = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

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
   * Size of the padding to be applied to the custom area ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different padding sizes.
   */
  padding?: Space | Padding;
  /**
   * The area inside the sidenav. This area can be used to render custom content.
   */
  children: React.ReactNode;
  /**
   * If false, the arrow button is hidden.
   * In lower resolutions the arrow will be always displayed.
   */
  displayArrow?: boolean;
  /**
   * Default action over the content of the page, overlay the content or push to the right ('push' | 'overlay').
   * In lower resolutions the mode will always be overlay.
   */
  mode: "push" | "overlay";
};

type AppLayoutPropsType = {
  /**
   * The area inside the sidenav. This area can be used to render custom content.
   */
  children: React.ReactNode;
};

export default AppLayoutPropsType;
