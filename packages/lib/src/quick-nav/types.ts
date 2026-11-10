export type QuickNavLink = {
  /**
   * Label to be shown in the link.
   */
  label: string;
  /**
   * Sublinks of the link.
   */
  links?: QuickNavLink[];
};

export type QuickNavProps = {
  /**
   * Title of the quick nav component.
   */
  title?: string;
  /**
   * Links to be shown inside the quick nav component.
   */
  links: QuickNavLink[];
};

export type { QuickNavProps as default };
