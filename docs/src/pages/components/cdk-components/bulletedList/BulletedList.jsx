import React from "react";
import {
  DxcHeading,
  DxcTypography,
  DxcStack,
} from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import BulletedListPropsTable from "./api.jsx";
import BulletedListItemPropsTable from "./bulletedListItemApi";
import basicUsage from "./examples/basicUsage";

function BulletedList() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Bulleted List"
        status="experimental"
      ></ComponentHeader>
      <Section>
        <DxcStack gutter="medium">
          <DxcHeading level={3} text="Props" />
          <BulletedListPropsTable />
        </DxcStack>
      </Section>
      <Section>
        <DxcStack gutter="medium">
          <DxcHeading level={3} text="Children" />
          <DxcTypography as="p">
            This component includes the following compound component:
          </DxcTypography>
          <DxcHeading text="DxcBulletedList.Item" level={4} weight="bold" />
          <DxcHeading text="Props" level={5} weight="bold" />
          <BulletedListItemPropsTable />
        </DxcStack>
      </Section>
      <Section>
        <DxcStack gutter="medium">
          <DxcHeading level={3} text="Examples" />
          <Example title="Basic usage" example={basicUsage}></Example>
        </DxcStack>
      </Section>
    </ComponentDoc>
  );
}

export default BulletedList;
