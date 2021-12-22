import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import CardPropsTable from "./api.jsx";
import defaultCard from "./examples/defaultCard";
import linkCard from "./examples/linkCard";
import actionCard from "./examples/actionCard";

function Card() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Card" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <CardPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Default Card" example={defaultCard}></Example>
        <Example title="Card with Link" example={linkCard}></Example>
        <Example title="Card with Action" example={actionCard}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Card;
