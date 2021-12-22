import React from "react";
import { DxcHeading, DxcLink } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import defaultLayout from "././examples/default";
import sidenavLayout from "././examples/sidenavLayout";
import SidenavApplicationLayoutPropsTable from "./api.jsx";

function ApplicationLayout() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Application Layout"
        status="ready"
      ></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Children" margin={{ bottom: "small" }} />
        <p>
          This component has no props. It has children and it follows the design
          guidelines available{" "}
          <DxcLink
            href="https://developer.dxc.com/design/guidelines/principles/layout"
            underlined={false}
            text="here"
          ></DxcLink>
          .
        </p>
        <DxcHeading
          text="DxcApplicationLayout.Header"
          level={4}
          weight="bold"
        />
        <p>
          Everything between this tags will be displayed as a header, at the top
          of the screen. If you want to show a{" "}
          <DxcLink
            href={`#/components/header`}
            underlined={false}
            text="DxcHeader"
          ></DxcLink>
          , as a shortcut, you can use it as a direct child of the
          DxcApplicationLayout without the tags. This is optional and if it is
          not specified, the DxcHeader will be shown by default.
        </p>
        <DxcHeading
          text="DxcApplicationLayout.Footer"
          level={4}
          weight="bold"
        />
        <p>
          Everything between the tags will be displayed as a footer, at the
          bottom of the screen. If you want to show a{" "}
          <DxcLink
            href={`#/components/footer`}
            underlined={false}
            text="DxcFooter"
          ></DxcLink>
          , as a shortcut, you can use it as a direct child of the
          DxcApplicationLayout without the tags. This is optional and if it is
          not specified, the DxcFooter will be shown by default.
        </p>
        <DxcHeading
          text="DxcApplicationLayout.Sidenav"
          level={4}
          weight="bold"
        />
        <p>
          Everything between the tags will be displayed as the content of the{" "}
          <DxcLink
            href={`#/components/sidenav`}
            underlined={false}
            text="DxcSidenav"
          ></DxcLink>
          , positioned on the left side of the screen, between the header and
          the footer. This is optional and if it is not specified, the
          DxcSidenav will not be shown.
        </p>
        <DxcHeading
          text="Props"
          level={5}
          weight="bold"
          margin={{ bottom: "medium" }}
        />{" "}
        <SidenavApplicationLayoutPropsTable />
        <p>
          In addition to these props, DxcApplicationLayout will also have the{" "}
          <DxcLink
            href={`#/components/sidenav`}
            underlined={false}
            text="DxcSidenav"
          ></DxcLink>{" "}
          props.{" "}
        </p>
        <DxcHeading text="DxcApplicationLayout.Main" level={4} weight="bold" />
        <p>
          Everything between the tags will be displayed as the content of the
          main part of the application.{" "}
        </p>
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Application layout" example={defaultLayout}></Example>
        <Example
          title="Application layout with sidenav"
          example={sidenavLayout}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}

export default ApplicationLayout;
