import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";
import styled from "styled-components";

import DocTitle from "../../common/DocTitle";
import Section from "../components/common/Section";

function Alert() {
  return (
    <StyledOverview>
      <DocTitle size={1}>Overview</DocTitle>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Getting Started",
            section: () => (
              <Section>
                <DocTitle size={2}>Getting Started</DocTitle>
                <p>Getting Started text</p>
              </Section>
            )
          },
          {
            tabLabel: "Installation",
            section: () => (
              <Section>
                <DocTitle size={2}>Installation</DocTitle>
                <p>Installation text</p>
              </Section>
            )
          },
          {
            tabLabel: "Using Components",
            section: () => (
              <Section>
                <DocTitle size={2}>Using Components</DocTitle>
                <p>Using Components text</p>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </StyledOverview>
  );
}

const StyledOverview = styled.div`
  max-width: 900px;
  margin: 50px auto;
`;

export default Alert;
