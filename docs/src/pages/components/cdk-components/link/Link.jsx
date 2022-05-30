import React from "react";
import { DxcHeading, DxcLink } from "@dxc-technology/halstack-react";
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
import Code from "../../common/Code";

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
        <Example title="Custom Link with React Router" example={customLink}>
          Our DxcLink component can be used with different routers (like{" "}
          <DxcLink
            href="https://v5.reactrouter.com/web/api/Link/component-reactcomponent"
            newWindow
          >
            React Router
          </DxcLink>{" "}
          or{" "}
          <DxcLink
            href="https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-functional-component"
            newWindow
          >
            NextJS Link
          </DxcLink>
          ). We only provide styles to the anchor, so follow the instructions
          for each type of router to combine it with our component. We forward
          the ref to the anchor element if needed. In this example we use{" "}
          <Code>component</Code> prop from React Router that can be used to
          allow the use of custom links.
        </Example>
      </Section>
    </ComponentDoc>
  );
}

export default Link;
