// @ts-nocheck
import React from "react";
import { DxcStack } from "@dxc-technology/halstack-react";
import styled from "styled-components";
import HeadingLink from "./HeadingLink";

type SectionType = {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5;
  subSections?: SectionType[];
  children?: React.ReactNode;
};

const Section = ({
  title,
  subSections,
  level,
  children,
}: SectionType): JSX.Element => {
  return (
    <DxcStack
      gutter={level === 1 ? "3rem" : level === 2 ? "2rem" : "1.5rem"}
    >
      <HeadingLink level={level}>{title}</HeadingLink>
      {children}
      {subSections?.map((subSection) => {
        return (
          <Subsection key={subSection.title}>
            <Section
              key={`subSection-${subSection.title}`}
              title={subSection.title}
              subSections={subSection.subSections}
              level={level + 1 <= 5 ? level + 1 : 5}
            >
              {subSection.content}
            </Section>
          </Subsection>
        );
      })}
    </DxcStack>
  );
};

const Subsection = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Section;
