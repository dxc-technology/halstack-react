import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import DocTitle from "../../common/DocTitle";
import Example from "../../common/Example";
import CardPropsTable from "./api.jsx";

import defaultCard from "./examples/defaultCard";
import alternativeCard from "./examples/alternativeCard";
import imageCard from "./examples/imageCard";
import imagePositions from "./examples/imagePositions";
import fullImages from "./examples/fullImagesCard";
import darkThemed from "./examples/darkThemedCard";

function Card() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Card</DocTitle>
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
                <Example title="Alternative Card" example={alternativeCard}></Example>
                <Example title="Image Card" example={imageCard}></Example>
                <Example title="Image Positions Card" example={imagePositions}></Example>
                <Example title="Full Image Card" example={fullImages}></Example>
                <Example title="Dark Themed Card" example={darkThemed}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Card;
