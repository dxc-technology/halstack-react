import React from "react";
import styled from "styled-components";
import { DxcQuickNav, DxcStack } from "@dxc-technology/halstack-react";
import Section from "./Section";
import { responsiveSizes } from "../common/variables.js";

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

const DxcQuickNavContainer = ({
  title,
  sections,
  startHeadingLevel = 1,
}: QuickNavContainerTypes): JSX.Element => {
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

  return (
    <Container>
      <ContentContainer>
        <DxcStack gutter="xlarge">
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
        </DxcStack>
      </ContentContainer>
      <QuickNavContainer>
        <DxcQuickNav
          title={title}
          links={getSubSectionsLinks(sections)}
        ></DxcQuickNav>
      </QuickNavContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
`;

const QuickNavContainer = styled.div`
  position: sticky;
  margin-left: 24px;
  max-width: 300px;
  top: calc(64px + 24px);
  max-height: calc(100vh - 64px);
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background-color: #d9d9d9;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #66666626;
    border-radius: 3px;
  }

  @media (max-width: ${responsiveSizes.laptop}px) {
    display: none;
  }
`;

export default DxcQuickNavContainer;
