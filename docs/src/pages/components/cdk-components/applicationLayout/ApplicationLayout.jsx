import React from "react";
import { DxcHeading, DxcLink } from "@dxc-technology/halstack-react";
import { Link } from "react-router-dom";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import defaultLayout from "././examples/default";
import sidenavLayout from "././examples/sidenavLayout";
import SidenavApplicationLayoutPropsTable, {
  ApplicationLayoutPropsTable,
} from "./api.jsx";

function ApplicationLayout() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Application Layout"
        status="ready"
      ></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" />
        <ApplicationLayoutPropsTable />
        <DxcHeading
          text="DxcApplicationLayout.Header"
          level={4}
          weight="bold"
        />
        <p>
          Everything between this tags will be displayed as a header, at the top
          of the screen. If you want to show a{" "}
          <Link to={`/components/header`} component={DxcLink}>
            DxcHeader
          </Link>
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
          <Link to={`/components/footer`} component={DxcLink}>
            DxcFooter
          </Link>
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
          Everything between the tags will be displayed as the content of the
          sidenav, positioned on the left side of the screen, between the header
          and the footer. This is optional and if it is not specified, the
          DxcSidenav will not be shown.
        </p>
        <DxcHeading text="Props" level={5} weight="bold" />
        <SidenavApplicationLayoutPropsTable />
        <DxcHeading text="DxcApplicationLayout.Main" level={4} weight="bold" />
        <p>
          Everything between the tags will be displayed as the content of the
          main part of the application.
        </p>
        <DxcHeading
          text="DxcApplicationLayout.useResponsiveSidenavVisibility"
          level={4}
          weight="bold"
        />
        <p>
          Custom hook that returns a function to manually change the visibility
          of the sidenav in responsive mode. This can be very useful for cases
          where a custom sidenav is being used and some of its inner elements
          can close it (for example, a navigation link).
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
