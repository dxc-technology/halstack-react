import React from "react";
import { DxcAlert, DxcHeading, DxcLink } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import RowPropsTable from "./api.jsx";
import basicUsage from "./examples/basicUsage";
import alignAndJustify from "./examples/alignAndJustify";
import gutterAndReverse from "./examples/gutterAndReverse";
import wrap from "./examples/wrap";
import Code from "../../common/Code";

function Row() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Row" status="experimental"></ComponentHeader>
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
        <RowPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Default Row" example={basicUsage}></Example>
        <Example
          title="Alignment and justification"
          example={alignAndJustify}
        ></Example>
        <Example
          title="Gutter and reverse"
          example={gutterAndReverse}
        ></Example>
        <Example title="No wrap" example={wrap}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Row;
