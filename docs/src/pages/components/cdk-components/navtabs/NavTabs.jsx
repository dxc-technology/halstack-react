import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import NavTabsPropsTable from "./api.jsx";
import TabPropsTable from "./tabApi.jsx";
import defaultNavTabs from "./examples/defaultNavTabs";
import iconsNavTabs from "./examples/iconsNavTabs";
import notificationNavTabs from "./examples/notificationNavTabs";
import customNavTabs from "./examples/customNavTabs";

function Tabs() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Nav Tabs" status="experimental"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <NavTabsPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Children" margin={{ bottom: "small" }} />
        <p>
          This component includes different compound components that are
          customized following the design guidelines.
        </p>
        <DxcHeading text="DxcNavTabs.Tab" level={4} weight="bold" />
        <p>Customized tab that allows this Nav Tabs component.</p>
        <DxcHeading
          text="Props"
          level={5}
          weight="bold"
          margin={{ bottom: "medium" }}
        />{" "}
        <TabPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Default Nav Tabs" example={defaultNavTabs}></Example>
        <Example title="Nav Tabs with icons" example={iconsNavTabs}></Example>
        <Example
          title="Notification tabs"
          example={notificationNavTabs}
        ></Example>
        <Example
          title="Custom Nav Tabs with React Router"
          example={customNavTabs}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Tabs;
