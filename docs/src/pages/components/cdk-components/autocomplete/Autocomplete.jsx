import React from "react";
import { DxcTabsForSections, DxcLink } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";

import autocompleteControlledSynchronous from "./examples/autocompleteControlledSynchronous";
import autocompleteUncontrolledSynchronous from "./examples/autocompleteUncontrolledSynchronous";
import autocompoleteControlledAsynchronous from "./examples/autocompleteControlledAsynchronous";
import autocompoleteUncontrolledAsynchronous from "./examples/autocompoleteUncontrolledAsynchronous";

function Autocomplete() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Autocomplete" status="ready"></ComponentHeader>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DocTitle size={2}>Props</DocTitle>
                <React.Fragment>
                  The autocomplete functionality has been implemented as part of
                  the
                  <DxcLink
                    text="Text Field"
                    underlined={false}
                    margin="xxsmall"
                    href={`#/components/input`}
                  />
                  component. The whole documentation of public API for this
                  component can be found in that page.
                </React.Fragment>
              </Section>
            ),
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example
                  title="Synchronous Controlled Autocomplete"
                  example={autocompleteControlledSynchronous}
                ></Example>
                <Example
                  title="Synchronous Uncontrolled Autocomplete"
                  example={autocompleteUncontrolledSynchronous}
                ></Example>
                <Example
                  title="Asynchronous Controlled Autocomplete"
                  example={autocompoleteControlledAsynchronous}
                ></Example>
                <Example
                  title="Asynchronous Unontrolled Autocomplete"
                  example={autocompoleteUncontrolledAsynchronous}
                ></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Autocomplete;
