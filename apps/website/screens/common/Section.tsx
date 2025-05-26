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

const Section = ({ content, level = 1, navSubtitle, subSections, title }: SectionType) => (
  <DxcFlex
    direction="column"
    gap={level === 1 ? "var(--spacing-gap-xl)" : level === 2 ? "var(--spacing-gap-xl)" : "var(--spacing-gap-l)"}
  >
    <HeadingLink level={level} navSubtitle={navSubtitle}>
      {title}
    </HeadingLink>
    {content}
    {subSections?.map((subSection) => (
      <DxcFlex direction="column" key={subSection.title}>
        <Section
          content={subSection.content}
          key={`subSection-${subSection.title}`}
          level={(level + 1 <= 5 ? level + 1 : 5) as LevelEnum}
          navSubtitle={`${title} ${subSection.title}`}
          subSections={subSection.subSections}
          title={subSection.title}
        />
      </DxcFlex>
    ))}
  </DxcFlex>
);

export default Section;
