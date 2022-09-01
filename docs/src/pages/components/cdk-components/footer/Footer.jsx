import React from "react";
import {
  DxcHeading,
  DxcParagraph,
  DxcLink,
} from "@dxc-technology/halstack-react";
import { Link } from "react-router-dom";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import InputPropsTable from "./api.jsx";
import defaultFooter from "./examples/default.js";
import children from "./examples/children.js";

function App() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Footer" status="ready"></ComponentHeader>
      <DxcParagraph>
        The footer is part of the application layout, so it can only be used
        inside of it. Please check the{" "}
        <Link to={`/components/applicationLayout`} component={DxcLink}>
          DxcApplicationLayout
        </Link>{" "}
        documentation.
      </DxcParagraph>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <InputPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Default Footer" example={defaultFooter}></Example>
        <Example
          title="Footer with custom content"
          example={children}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}

export default App;
