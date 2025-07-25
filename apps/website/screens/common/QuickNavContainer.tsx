import styled from "@emotion/styled";
import { DxcGrid, DxcQuickNav } from "@dxc-technology/halstack-react";
import Section, { SectionType } from "./Section";
import { responsiveSizes } from "../common/variables";

type QuickNavContainerTypes = {
  sections: SectionType[];
  startHeadingLevel?: 1 | 2 | 3 | 4 | 5;
  title?: string;
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

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 800px 1fr;

  @media (max-width: ${responsiveSizes.desktop}px) {
    grid-template-columns: 75% 25%;
  }
  @media (max-width: ${responsiveSizes.tablet}px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const QuickNavContainer = styled.div`
  position: sticky;
  top: calc(64px + 24px);
  max-height: 568px;
  margin-left: 1.5rem;
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: ${responsiveSizes.tablet}px) {
    display: none;
  }
  @media (max-height: 656px) {
    max-height: calc(100vh - 112px);
  }
`;

export default function DxcQuickNavContainer({
  sections,
  startHeadingLevel = 1,
  title = "On this page",
}: QuickNavContainerTypes) {
  return (
    <MainContainer>
      <DxcGrid gap="var(--spacing-gap-xxl)" templateColumns={["minmax(0, 1fr)"]}>
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
}
