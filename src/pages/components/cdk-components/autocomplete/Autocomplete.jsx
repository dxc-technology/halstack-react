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
import darkThemed from "./examples/darkThemed";

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
                  As the autocomplete component is part of the text field
                  component you can find its documentation as part of the text
                  field´s ones
                  <DxcLink
                    text="here"
                    underlined={false}
                    margin="xxsmall"
                    href={`#/components/input`}
                  />
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
                <Example
                  title="Dark theme Autocomplete"
                  example={darkThemed}
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
