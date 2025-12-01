import { ReactElement, ReactNode } from "react";
import { SVG } from "../common/utils";

export type AppLayoutMainPropsType = {
  /**
   * Everything between the tags will be displayed as the content of the main part of the application.
   */
  children: ReactNode;
};

type LogoPropsType = {
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

export type ApplicationLayoutContextType = {
  /**
   * Logo properties.
   */
  logo?: LogoPropsType;
  /**
   * Indicates if the header exists.
   */
  headerExists: boolean;
};

type ApplicationLayoutPropsType = {
  /**
   * Logo properties.
   */
  logo?: LogoPropsType;
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

export default ApplicationLayoutPropsType;
