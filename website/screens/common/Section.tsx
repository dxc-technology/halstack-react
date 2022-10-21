// @ts-nocheck
import React from "react";
import { DxcFlex } from "@dxc-technology/halstack-react";
import styled from "styled-components";
import HeadingLink from "./HeadingLink";

type SectionType = {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5;
  subSections?: SectionType[];
  children?: React.ReactNode;
  navSubtitle?: string;
};

const Section = ({
  title,
  subSections,
  level,
  children,
  navSubtitle,
}: SectionType): JSX.Element => {
  return (
    <DxcFlex
      direction="column"
      gap={level === 1 ? "3rem" : level === 2 ? "2rem" : "1.5rem"}
    >
      <HeadingLink level={level} navSubtitle={navSubtitle}>
        {title}
      </HeadingLink>
      {children}
      {subSections?.map((subSection) => {
        return (
          <Subsection key={subSection.title}>
            <Section
              key={`subSection-${subSection.title}`}
              title={subSection.title}
              subSections={subSection.subSections}
              level={level + 1 <= 5 ? level + 1 : 5}
              navSubtitle={`${title} ${subSection.title}`}
            >
              {subSection.content}
            </Section>
          </Subsection>
        );
      })}
    </DxcFlex>
  );
};

const Subsection = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Section;
