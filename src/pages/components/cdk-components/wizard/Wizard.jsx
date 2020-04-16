import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import Section from "../../common/Section";
import WizardPropsTable from "./api.jsx";

import controlledWizard from "./examples/controlledWizard";
import uncontrolledWizard from "./examples/uncontrolledWizard";
import darkThemeWizard from "./examples/darkThemeWizard";
import verticalWizard from "./examples/verticalWizard";

function Wizard() {
    return (
        <ComponentDoc>
            <ComponentHeader
            title="Wizard"
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
                            <WizardPropsTable />
                        </Section>
                    )
                }, 
                {
                    tabLabel: "Examples",
                    section: () => (
                        <Section>
                            <DocTitle size={2}>Examples</DocTitle>
                            <Example 
                              title="Controlled Wizard"
                              example={controlledWizard}
                            ></Example>
                            <Example 
                              title="Uncontrolled Wizard"
                              example={uncontrolledWizard}
                            ></Example>
                            <Example 
                              title="Dark theme Wizard"
                              example={darkThemeWizard}
                            ></Example>
                            <Example 
                              title="Vertical Wizard"
                              example={verticalWizard}
                            ></Example>
                        </Section>
                    )
                }
            ]}
            >

            </DxcTabsForSections>
        </ComponentDoc>
    );
}

export default Wizard;