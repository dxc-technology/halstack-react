import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import TabsPropsTable from "./api.jsx";
import controlledTabs from "./examples/controlledTabs";
import uncontrolledTabs from "./examples/uncontrolledTabs";
import iconsTabs from "./examples/iconsTabs";
import notificationTabs from "./examples/notificationTabs";
import withContentTabs from "./examples/withContentTabs";

function Tabs() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Tabs" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <TabsPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Controlled Tabs" example={controlledTabs}></Example>
        <Example title="Uncontrolled Tabs" example={uncontrolledTabs}></Example>
        <Example title="Tabs with icons" example={iconsTabs}></Example>
        <Example title="Notification tabs" example={notificationTabs}></Example>
        <Example title="Tabs with content" example={withContentTabs}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Tabs;
