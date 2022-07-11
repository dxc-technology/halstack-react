import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import SidenavPropsTable, {
  SidenavTitlePropsTable,
  SidenavGroupPropsTable,
  SidenavLinkPropsTable,
} from "./api.jsx";
import { DxcHeading, DxcLink } from "@dxc-technology/halstack-react";
import defaultSidenav from "./examples/default";
import compoundSidenav from "./examples/compound";

function Sidenav() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Sidenav" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <SidenavPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Children" margin={{ bottom: "small" }} />
        <p>
          This component includes different compound components that are
          customized following the{" "}
          <DxcLink href="https://developer.dxc.com/design/guidelines/components/sidenav">
            design guidelines
          </DxcLink>
          .
        </p>
        <DxcHeading text="DxcSidenav.Title" level={4} weight="bold" />
        <p>
          The content will be showed as the main title in the sidenav, it should
          be used only in the sidenav title prop.
        </p>
        <SidenavTitlePropsTable />
        <DxcHeading
          text="DxcSidenav.Section"
          level={4}
          weight="bold"
          margin={{ top: "small" }}
        />
        <p>The content will be showed as a section the sidenav.</p>
        <DxcHeading text="DxcSidenav.Group" level={4} weight="bold" />
        <p>A group of Links, recommennded to use inside the section.</p>
        <SidenavGroupPropsTable />
        <DxcHeading
          text="DxcSidenav.Link"
          level={4}
          weight="bold"
          margin={{ top: "small" }}
        />
        <p>Customized link that allows the navigation.</p>
        <DxcHeading
          text="Props"
          level={5}
          weight="bold"
          margin={{ bottom: "small" }}
        />{" "}
        <SidenavLinkPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Default Sidenav" example={defaultSidenav}></Example>
        <Example
          title="Sidenav with compound components"
          example={compoundSidenav}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Sidenav;
