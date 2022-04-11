type Props = {
  /**
   * Title of the quick nav component.
   */
  title: string;
  /**
   * Links to be shown inside the quick nav component.
   */
  links: Link[];
};

type Link = {
  /**
   * Label to be shown in the link.
   */
  label: string;
  /**
   *  Id used to navigate to the section that the link refers. This id must be passed to the wrapper that contains the section to make possible the navigation.
   */
  id: string;
  /**
   * Sublinks of the link.
   */
  links?: Link[];
};

export default Props;
