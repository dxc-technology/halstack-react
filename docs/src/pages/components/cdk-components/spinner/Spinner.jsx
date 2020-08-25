import React from "react";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";

import SpinnerPropsTable from "./api.jsx";
import SpinnerTokensTable from "./Tokens.jsx";

import defaultSpinner from "./examples/defaultSpinner";
import valueSpinner from "./examples/valueSpinner";
import smallSpinner from "./examples/smallSpinner";
import spinnerWithOverlay from "./examples/spinnerWithOverlay";

function Spinner() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Spinner" status="ready"></ComponentHeader>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DocTitle size={2}>Props</DocTitle>
                <SpinnerPropsTable />
              </Section>
            ),
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DocTitle size={2}>Theming</DocTitle>
                <SpinnerTokensTable />
              </Section>
            ),
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example
                  title="Undetermined Spinner"
                  example={defaultSpinner}
                ></Example>
                <Example
                  title="Determined Spinner"
                  example={valueSpinner}
                ></Example>
                <Example title="Small Spinner" example={smallSpinner}></Example>
                <Example
                  title="Spinner with Overlay"
                  example={spinnerWithOverlay}
                ></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Spinner;
