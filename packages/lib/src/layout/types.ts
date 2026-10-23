import { ReactElement, ReactNode } from "react";
import { SVG } from "../common/types";

export type AppLayoutMainProps = {
  /**
   * Everything between the tags will be displayed as the content of the main part of the application.
   */
  children: ReactNode;
};

export type AppLayoutLogo = {
  /**
   * Alternative text for the logo image.
   */
  alt: string;
  /**
   * URL to navigate when the logo is clicked.
   */
  href?: string;
  /**
   * Function to be called on logo click.
   */
  onClick?: () => void;
  /**
   * URL or SVG of the image that will be placed in the logo.
   */
  src: string | SVG;
};

export type AppLayoutSidenavProps = {
  /**
   * The area inside the sidenav. This area can be used to render the content inside the sidenav.
   */
  children: ReactNode;
  /**
   * The area assigned to render the sidenav title. It is highly recommended to use the sidenav title.
   */
  title?: ReactNode;
};

export type ApplicationLayoutContext = {
  /**
   * Logo properties.
   */
  logo?: AppLayoutLogo;
  /**
   * Indicates if the header exists.
   */
  headerExists: boolean;
  /**
   * Allows the sidenav to hide the main content when needed
   */
  setHideMainContent: (hide: boolean) => void;
};

export type ApplicationLayoutProps = {
  /**
   * Logo properties.
   */
  logo?: AppLayoutLogo;
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
  children: ReactElement<AppLayoutMainProps>;
};

export type { ApplicationLayoutProps as default };
