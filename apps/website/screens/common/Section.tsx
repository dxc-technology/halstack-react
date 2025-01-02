import { DxcFlex } from "@dxc-technology/halstack-react";
import HeadingLink from "./HeadingLink";
import { ReactNode } from "react";

type LevelEnum = 1 | 2 | 3 | 4 | 5;

export type SectionType = {
  title: string;
  level?: LevelEnum;
  subSections?: SectionType[];
  content?: ReactNode;
  navSubtitle?: string;
};

const Section = ({ title, level = 1, subSections, content, navSubtitle }: SectionType): JSX.Element => (
  <DxcFlex direction="column" gap={level === 1 ? "3rem" : level === 2 ? "2rem" : "1.5rem"}>
    <HeadingLink level={level} navSubtitle={navSubtitle}>
      {title}
    </HeadingLink>
    {content}
    {subSections?.map((subSection) => (
      <DxcFlex direction="column" key={subSection.title}>
        <Section
          key={`subSection-${subSection.title}`}
          title={subSection.title}
          level={(level + 1 <= 5 ? level + 1 : 5) as LevelEnum}
          subSections={subSection.subSections}
          content={subSection.content}
          navSubtitle={`${title} ${subSection.title}`}
        />
      </DxcFlex>
    ))}
  </DxcFlex>
);

export default Section;
