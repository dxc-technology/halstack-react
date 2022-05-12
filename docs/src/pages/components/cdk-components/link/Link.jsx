import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import LinkPropsTable from "./api.jsx";
import defaultLink from "./examples/default";
import disabledLink from "./examples/disabledLink";
import onClickIconLink from "./examples/onClickIconLink";
import inheritColorLink from "./examples/inheritColorLink";
import customLink from "./examples/customLink";

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
          title="Inherited color with new window"
          example={inheritColorLink}
        ></Example>
        <Example title="Disabled Link" example={disabledLink}></Example>
        <Example
          title="Link with onClick and icon"
          example={onClickIconLink}
        ></Example>
        <Example
          title="Custom Link with React Router"
          example={customLink}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Link;
