import { ReactElement, ReactNode } from "react";

export type AppLayoutMainPropsType = {
  /**
   * Everything between the tags will be displayed as the content of the main part of the application.
   */
  children: ReactNode;
};

export type AppLayoutSidenavPropsType = {
  /**
   * The area inside the sidenav. This area can be used to render the content inside the sidenav.
   */
  children: ReactNode;
  /**
   * The area assigned to render the sidenav title. It is highly recommended to use the sidenav title.
   */
  title?: ReactNode;
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
  header?: ReactNode;
  /**
   * Sidenav content
   */
  sidenav?: ReactNode;
  /**
   * Footer content
   */
  footer?: ReactNode;
  /**
   * Use the DxcApplicationLayout.Main provided to render main content.
   */
  children: ReactElement<AppLayoutMainPropsType>;
};

export default AppLayoutPropsType;
