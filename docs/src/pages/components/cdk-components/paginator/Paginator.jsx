import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";

import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import PaginatorPropsTable from "./api.jsx";
import PaginatorTokensTable from "./Tokens.jsx";
import paginator from "./examples/paginator";
import paginatorItemsPerPage from "./examples/paginatorItemsPerPage";
import paginatorGoToPage from "./examples/paginatorGoToPage";

function Paginator() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Paginator"
        status="ready"
      ></ComponentHeader>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
                <PaginatorPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Theming" margin={{ bottom: "small" }} />
                <PaginatorTokensTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
                <Example title="Paginator" example={paginator}></Example>
                <Example title="Paginator with items per page" example={paginatorItemsPerPage}></Example>
                <Example title="Paginator with Go to Page" example={paginatorGoToPage}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Paginator;
