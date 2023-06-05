import React from "react";
import styled from "styled-components";
import { DxcFlex, DxcGrid, DxcQuickNav } from "@dxc-technology/halstack-react";
import Section from "./Section";
import { responsiveSizes } from "../common/variables";

type QuickNavContainerTypes = {
  title?: string;
  sections: SectionType[];
  startHeadingLevel?: 1 | 2 | 3 | 4 | 5;
};

type SectionType = {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5;
  content?: React.ReactNode;
  subSections?: SectionType[];
};

type LinkType = {
  label: string;
  links?: LinkType[];
};

const getSubSectionsLinks = (sections: SectionType[]) => {
  const linksList: LinkType[] = [];
  sections.map((section) => {
    if (section.subSections) {
      linksList.push({
        label: section.title,
        links: getSubSectionsLinks(section.subSections),
      });
    } else {
      linksList.push({ label: section.title });
    }
  });
  return linksList;
};

const DxcQuickNavContainer = ({
  title,
  sections,
  startHeadingLevel = 1,
}: QuickNavContainerTypes): JSX.Element => (
  <DxcGrid templateColumns={["15fr", "5fr"]} gap="1.5rem">
    <DxcFlex direction="column" gap="3rem">
      {sections.map((section) => (
        <Section
          title={section.title}
          subSections={section.subSections}
          level={startHeadingLevel}
          key={`section-${section.title}`}
        >
          {section.content}
        </Section>
      ))}
    </DxcFlex>
    <QuickNavContainer>
      <DxcQuickNav title={title} links={getSubSectionsLinks(sections)} />
    </QuickNavContainer>
  </DxcGrid>
);

const QuickNavContainer = styled.div`
  position: sticky;
  top: calc(64px + 24px);
  max-height: 568px;
  overflow-y: auto;

  @media (max-width: ${responsiveSizes.laptop}px) {
    display: none;
  }
  @media (max-height: 656px) {
    max-height: calc(100vh - 112px);
  }
`;

export default DxcQuickNavContainer;
