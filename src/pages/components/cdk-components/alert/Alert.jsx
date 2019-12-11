import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../common/DocTitle";
import Example from "../../common/Example";
import AlertPropsTable from "./api.jsx";
import Section from "../../common/Section";
import inlineInfo from "./examples/inlineInfo";
import inlineSuccess from "./examples/inlineSuccess";
import inlineWarning from "./examples/inlineWarning";
import inlineError from "./examples/inlineError";
import closableInline from "./examples/closableInline";
import nonClosableInline from "./examples/nonClosableInline";
import modal from "./examples/modal";

function Alert() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Alert</DocTitle>
      <Section>
        <DocTitle size={2}>Props</DocTitle>
        <AlertPropsTable />
      </Section>
      <Section>
        <DocTitle size={2}>Elements</DocTitle>
        <Example title="Information Alert" example={inlineInfo}></Example>
        <Example title="Success Alert" example={inlineSuccess}></Example>
        <Example title="Warning Alert" example={inlineWarning}></Example>
        <Example title="Error Alert" example={inlineError}></Example>
        <Example title="Modal alert" example={modal}></Example>
        <Example
          title="Closable inline alert"
          example={closableInline}
        ></Example>
        <Example
          title="Non closable inline alert"
          example={nonClosableInline}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Alert;
