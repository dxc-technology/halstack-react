import React from "react";
import ComponentDoc from "../../common/ComponentDoc";

import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import SidenavPropsTable from "./api.jsx";
import SidenavTokensTable from "./Tokens.jsx";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";

import defaultSidenav from "./examples/default";
import pushSidenav from "./examples/pushSidenav";
import fixedSidenav from "./examples/fixedSidenav";

function Sidenav() {
    return (
        <ComponentDoc>
            <ComponentHeader
                title="Sidenav"
                status="ready"
            >
            </ComponentHeader>
            <DxcTabsForSections
                stickAtPx={64}
                tabsMode="underlined"
                sections={[
                    {
                        tabLabel: "Props",
                        section: () => (
                            <Section>
                                <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} /> 
                                <SidenavPropsTable />
                            </Section>
                        )
                    },
                    {
                        tabLabel: "Theming",
                        section: () => (
                          <Section>
                            <DxcHeading level={3} text="Theming" margin={{ bottom: "small" }} />
                            <SidenavTokensTable />
                          </Section>
                        ),
                      },
                    {
                        tabLabel: "Examples",
                        section: () => (
                            <Section>
                                <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
                                <Example
                                    title="Default Sidenav"
                                    example={defaultSidenav}
                                >
                                </Example>
                                <Example
                                    title="Push content Sidenav"
                                    example={pushSidenav}
                                >
                                </Example>
                                <Example
                                    title="Sidenav without arrow"
                                    example={fixedSidenav}
                                >
                                </Example>
                            </Section>
                        )
                    }
                ]}
            ></DxcTabsForSections>
        </ComponentDoc>
    );
}

export default Sidenav;