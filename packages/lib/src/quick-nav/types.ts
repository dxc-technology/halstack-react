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
   * If true, enables navigation to sections within the page using the onClick handler, ensuring compatibility with HashRouter.
   */
  isHashRouter?: boolean;
  /**
   * Title of the quick nav component.
   */
  title?: string;
  /**
   * Links to be shown inside the quick nav component.
   */
  links: Link[];
};

export default Props;
