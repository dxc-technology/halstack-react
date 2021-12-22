import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import TagPropsTable from "./api.jsx";
import basicExample from "./examples/basicExample";
import linkExample from "./examples/linkExample";
import actionExample from "./examples/actionExample";
import sized from "./examples/sized";

function Tag() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Tag" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <TagPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Basic Tag" example={basicExample}></Example>
        <Example title="Tag with Link" example={linkExample}></Example>
        <Example title="Tag with Action" example={actionExample}></Example>
        <Example title="Sized Tag" example={sized}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Tag;
