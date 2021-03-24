import React from "react";
import {
  DxcTabsForSections,
  DxcLink,
  DxcHeading,
} from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
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
                <DxcHeading
                  level={3}
                  text="Props"
                  margin={{ bottom: "small" }}
                />
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
                <DxcHeading
                  level={3}
                  text="Examples"
                  margin={{ bottom: "small" }}
                />
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
