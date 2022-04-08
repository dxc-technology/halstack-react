import React from "react";
import { DxcAlert, DxcHeading, DxcLink } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import StackPropsTable from "./api.jsx";
import basicUsage from "./examples/basicUsage";
import align from "./examples/align";
import gutterAndDivider from "./examples/gutterAndDivider";
import Code from "../../common/Code";

function Stack() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Stack" status="experimental"></ComponentHeader>
      <DxcAlert type="warning" margin={{ bottom: "small" }} size="fillParent">
        Some older browsers may not support <Code>gutter</Code> prop. Please
        check{" "}
        <DxcLink
          href="https://caniuse.com/flexbox-gap"
          underlined={false}
          inheritedColor={true}
          newWindow
          text="here"
        ></DxcLink>{" "}
        that it works in your target browsers.
      </DxcAlert>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <StackPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Default Stack" example={basicUsage}></Example>
        <Example title="Alignment" example={align}></Example>
        <Example
          title="Gutter and divider"
          example={gutterAndDivider}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Stack;
