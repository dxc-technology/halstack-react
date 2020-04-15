import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import Section from "../../common/Section";
import WizardPropsTable from "./api.jsx";

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
                }
            ]}
            >

            </DxcTabsForSections>
        </ComponentDoc>
    );
}

export default Wizard;