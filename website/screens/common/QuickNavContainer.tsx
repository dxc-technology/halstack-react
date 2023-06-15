import React from "react";
import styled from "styled-components";
import { DxcGrid, DxcQuickNav } from "@dxc-technology/halstack-react";
import Section, { SectionType } from "./Section";
import { responsiveSizes } from "../common/variables";

type QuickNavContainerTypes = {
  title?: string;
  sections: SectionType[];
  startHeadingLevel?: 1 | 2 | 3 | 4 | 5;
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
  <MainContainer>
    <DxcGrid gap="3rem" templateColumns={["100%"]}>
      {sections.map((section) => (
        <Section
          key={`section-${section.title}`}
          title={section.title}
          level={startHeadingLevel}
          subSections={section.subSections}
          content={section.content}
        />
      ))}
    </DxcGrid>
    <QuickNavContainer>
      <DxcQuickNav title={title} links={getSubSectionsLinks(sections)} />
    </QuickNavContainer>
  </MainContainer>
);

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 15fr 5fr;
  gap: 1.5rem;

  @media (max-width: ${responsiveSizes.laptop}px) {
    grid-template-columns: 100%;
  }
`;

const QuickNavContainer = styled.div`
  position: sticky;
  top: calc(64px + 24px);
  max-height: 568px;
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: ${responsiveSizes.laptop}px) {
    display: none;
  }
  @media (max-height: 656px) {
    max-height: calc(100vh - 112px);
  }
`;

export default DxcQuickNavContainer;
