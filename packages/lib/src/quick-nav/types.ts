type Link = {
  /**
   * Label to be shown in the link.
   */
  label: string;
  /**
   * Sublinks of the link.
   */
  links?: Link[];
};

type Props = {
  /**
   * Title of the quick nav component.
   */
  title?: string;
  /**
   * Links to be shown inside the quick nav component.
   */
  links: Link[];
  /*
   * Links to be shown inside the quick nav component.
   */
  isHashRouter?: boolean;
};

export default Props;
