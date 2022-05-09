import React from "react";
import styled from "styled-components";
import DxcQuickNav from "../quick-nav/QuickNav";
import DxcStack from "../stack/Stack";
import Section from "./Section";
import QuickNavContainerTypes from "./types";

const DxcQuickNavContainer = ({ title, sections }: QuickNavContainerTypes): JSX.Element => {
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
              level={section.level}
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
  max-height: calc(100vh - 150px);
  position: sticky;
  width: 300px;
`;

export default DxcQuickNavContainer;
