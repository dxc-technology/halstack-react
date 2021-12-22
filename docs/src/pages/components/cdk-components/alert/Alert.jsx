import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import AlertPropsTable from "./api.jsx";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import inlineInfo from "./examples/inlineInfo";
import inlineSuccess from "./examples/inlineSuccess";
import inlineWarning from "./examples/inlineWarning";
import inlineError from "./examples/inlineError";
import sized from "./examples/sized";
import closableInline from "./examples/closableInline";
import children from "./examples/children";
import modal from "./examples/modal";

function Alert() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Alert" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <AlertPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Information Alert" example={inlineInfo}></Example>
        <Example title="Success Alert" example={inlineSuccess}></Example>
        <Example title="Warning Alert" example={inlineWarning}></Example>
        <Example title="Error Alert" example={inlineError}></Example>
        <Example title="Sized Alert" example={sized}></Example>
        <Example title="Modal Alert" example={modal}></Example>
        <Example
          title="Closable inline Alert"
          example={closableInline}
        ></Example>
        <Example title="Alert with children" example={children}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Alert;
