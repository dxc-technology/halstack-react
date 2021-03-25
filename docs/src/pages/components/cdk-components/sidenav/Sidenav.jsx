import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import SidenavPropsTable from "./api.jsx";
import SidenavLinkPropsTable from "./linkapi.jsx";
import {
  DxcTabsForSections,
  DxcHeading,
  DxcLink,
} from "@dxc-technology/halstack-react";
import defaultSidenav from "./examples/default";
import compoundSidenav from "./examples/compound";

function Sidenav() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Sidenav" status="ready"></ComponentHeader>
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
                <SidenavPropsTable />
              </Section>
            ),
          },
          {
            tabLabel: "Children",
            section: () => (
              <Section>
                <DxcHeading
                  level={3}
                  text="Children"
                  margin={{ bottom: "small" }}
                />
                <p>
                  This component includes different compound components that are
                  customized following the{" "}
                  <DxcLink
                    href="https://developer.dxc.com/design/components/sidenav"
                    underlined={false}
                    text="design guidelines"
                  ></DxcLink>
                  .
                </p>
                <DxcHeading text="DxcSidenav.Title" level={4} weight="bold" />
                <p>
                  The content will be showed as the main title in the sidenav.
                </p>
                <DxcHeading
                  text="DxcSidenav.Subtitle"
                  level={4}
                  weight="bold"
                />
                <p>The content will be showed as a subtitle.</p>
                <DxcHeading text="DxcSidenav.Link" level={4} weight="bold" />
                <p>Customized link that allows the navigation.</p>
                <DxcHeading
                  text="Props"
                  level={5}
                  weight="bold"
                  margin={{ bottom: "medium" }}
                />{" "}
                <SidenavLinkPropsTable />
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
                  title="Default Sidenav"
                  example={defaultSidenav}
                ></Example>
                <Example
                  title="Sidenav with compound components"
                  example={compoundSidenav}
                ></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Sidenav;
