import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import Section from "../../common/Section";

import SpinnerPropsTable from "./api.jsx";

import defaultSpinner from "./examples/defaultSpinner";
import valueSpinner from "./examples/valueSpinner";
import smallSpinner from "./examples/smallSpinner";
import darkSpinner from "./examples/darkSpinner";
import spinnerWithOverlay from "./examples/spinnerWithOverlay";

function Spinner() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Spinner</DocTitle>
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
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example title="Undetermined Spinner" example={defaultSpinner}></Example>
                <Example title="Determined Spinner" example={valueSpinner}></Example>
                <Example title="Small Spinner" example={smallSpinner}></Example>
                <Example title="Dark theme Spinner" example={darkSpinner}></Example>
                <Example title="Spinner with Overlay" example={spinnerWithOverlay}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Spinner;
