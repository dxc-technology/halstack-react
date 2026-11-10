import { ReactNode } from "react";
import { SVG } from "../common/types";

type FooterSocialLink = {
  /**
   * URL of the page the link goes to.
   */
  href: string;
  /**
   * Material Symbol name or SVG element as the icon used for the link.
   */
  logo: string | SVG;
  /**
   * Value for the HTML properties title and aria-label.
   */
  title: string;
};

type FooterBottomLink = {
  /**
   * URL of the page the link goes to.
   */
  href: string;
  /**
   * Text for the link.
   */
  text: string;
};

type FooterLogo = {
  /**
   * Source of the logo image.
   */
  src: string | SVG;
  /**
   * Alternative text for the logo image.
   */
  alt: string;
};

type FooterProps = {
  /**
   * An array of objects representing the links that will be rendered at
   * the bottom part of the footer.
   */
  bottomLinks?: FooterBottomLink[];
  /**
   * The text that will be displayed as copyright disclaimer.
   */
  copyright?: string;
  /**
   * Content to be displayed on the left side of the footer under the logo.
   */
  leftContent?: ReactNode;
  /**
   * Logo to be displayed inside the footer
   */
  logo?: FooterLogo;
  /**
   * Determines the visual style and layout
   * - "default": The default mode with full content and styling.
   * - "reduced": A reduced mode with minimal content and styling.
   */
  mode?: "default" | "reduced";
  /**
   * Content to be displayed on the right side of the footer before the socialLinks if provided.
   */
  rightContent?: ReactNode;
  /**
   * An array of objects representing the links that will be rendered as
   * icons at the top-right side of the footer.
   */
  socialLinks?: FooterSocialLink[];
  /**
   * Value of the tabindex for all interactive elements, except those
   * inside the leftContent and rightContent.
   */
  tabIndex?: number;
  /**
   * Visual variant of the footer.
   */
  variant?: "branded" | "neutral";
};

export type { FooterProps as default, FooterProps, FooterBottomLink, FooterLogo, FooterSocialLink };
