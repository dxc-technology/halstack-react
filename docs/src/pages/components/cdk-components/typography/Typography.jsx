import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import TypographyPropsTable from "./api.jsx";
import basicUsage from "./examples/basicUsage";
import nestedTexts from "./examples/nestedTexts";

function Typography() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Typography"
        status="experimental"
      ></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <TypographyPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Basic Usage" example={basicUsage}></Example>
        <Example title="Nested examples" example={nestedTexts}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Typography;
