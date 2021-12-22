import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import PaginatorPropsTable from "./api.jsx";
import paginator from "./examples/paginator";
import paginatorItemsPerPage from "./examples/paginatorItemsPerPage";
import paginatorGoToPage from "./examples/paginatorGoToPage";

function Paginator() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Paginator" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <PaginatorPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Paginator" example={paginator}></Example>
        <Example
          title="Paginator with items per page"
          example={paginatorItemsPerPage}
        ></Example>
        <Example
          title="Paginator with Go to Page"
          example={paginatorGoToPage}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Paginator;
