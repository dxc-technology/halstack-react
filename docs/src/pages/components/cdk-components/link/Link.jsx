import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import LinkPropsTable from "./api.jsx";
import defaultLink from "./examples/default";
import undecoratedLink from "./examples/undecorated";
import iconLink from "./examples/iconLink";
import disabledLink from "./examples/disabledLink";
import actionLink from "./examples/actionLink";

function Link() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Link" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <LinkPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Default Link" example={defaultLink}></Example>
        <Example
          title="Undecorated link with new window"
          example={undecoratedLink}
        ></Example>
        <Example title="Disabled Link" example={disabledLink}></Example>
        <Example title="Link with action" example={actionLink}></Example>
        <Example title="Link with icon" example={iconLink}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Link;
