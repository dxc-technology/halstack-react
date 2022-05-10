type Props = {
  /**
   * Title of the quick nav component.
   */
  title: string;
  /**
   * Sections to be shown as the content of the quick nav container.
   */
  sections: SectionType[];
  /**
   * The level of the first heading of the content.
   */
  startHeadingLevel?: 1 | 2 | 3 | 4 | 5;
};

type SectionType = {
  /**
   * Title of each section.
   */
  title: string;
  /**
   * Level of each section.
   */
  level?: 1 | 2 | 3 | 4 | 5;
  /**
   * Content of each section.
   */
  content?: React.ReactNode;
  /**
   * Subsections of each section.
   */
  subSections?: SectionType[];
};

export default Props;
