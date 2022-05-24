type Props = {
  /**
   * Title of the quick nav component.
   */
  title?: string;
  /**
   * Links to be shown inside the quick nav component.
   */
  links: LinkType[];
};

type LinkType = {
  /**
   * Label to be shown in the link.
   */
  label: string;
  /**
   * Sublinks of the link.
   */
  links?: LinkType[];
};

export default Props;
