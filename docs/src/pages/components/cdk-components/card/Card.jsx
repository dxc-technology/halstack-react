import React from "react";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import CardPropsTable from "./api.jsx";

import defaultCard from "./examples/defaultCard";
import themedCard from "./examples/themesCard";
import outlinedCard from "./examples/outlinedCard";
import linkCard from "./examples/linkCard";
import actionCard from "./examples/actionCard";

function Card() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Card"
        status="ready"
      ></ComponentHeader>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DocTitle size={2}>Props</DocTitle>
                <CardPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example title="Default Card" example={defaultCard}></Example>
                <Example title="Themed Card" example={themedCard}></Example>
                <Example title="Outlined Card" example={outlinedCard}></Example>
                <Example title="Card with Link" example={linkCard}></Example>
                <Example title="Card with Action" example={actionCard}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Card;
