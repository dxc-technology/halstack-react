import React from "react";
import styled from "styled-components";
import DxcQuickNav from "../quick-nav/QuickNav";
import DxcStack from "../stack/Stack";
import Section from "./Section";
import QuickNavContainerTypes from "./types";

const DxcQuickNavContainer = ({ title, sections, startHeadingLevel = 1 }: QuickNavContainerTypes): JSX.Element => {
  const getSubSectionsLinks = (sections) => {
    const linksList = [];
    sections.map((section) => {
      if (section.subSections) {
        linksList.push({ label: section.title, links: getSubSectionsLinks(section.subSections) });
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
        <DxcQuickNav title={title} links={getSubSectionsLinks(sections)}></DxcQuickNav>
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
`;

const QuickNavContainer = styled.div`
  max-height: calc(100vh - 200px);
  position: sticky;
  top: 200px;
  width: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background-color: #d9d9d9;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #666666;
    border-radius: 3px;
  }
`;

export default DxcQuickNavContainer;
