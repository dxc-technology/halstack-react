import { DxcAccordion, DxcInset, DxcBadge, DxcStatusLight } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcAccordion independent={false} defaultIndexActive={[0, 2]}>
        <DxcAccordion.AccordionItem
          label="Find a person"
          badge={{ position: "before", element: <DxcBadge label="GET" color="green" /> }}
          statusLight={<DxcStatusLight label="Active" mode="success" />}
        >
          <DxcInset space="1.5rem">
            Person information
          </DxcInset>
        </DxcAccordion.AccordionItem>
        <DxcAccordion.AccordionItem
          label="Create a person"
          assistiveText="Provide all required info"
          badge={{ position: "before", element: <DxcBadge label="POST" color="blue" /> }}
          defaultIsExpanded
        >
          <DxcInset space="1.5rem">
            Person creation information
          </DxcInset>
        </DxcAccordion.AccordionItem>
        <DxcAccordion.AccordionItem
          label="Find interactions"
          badge={{ position: "before", element: <DxcBadge label="OPTIONS" color="yellow" /> }}
          statusLight={<DxcStatusLight label="Active" mode="warning" />}
          defaultIsExpanded
        >
          <DxcInset space="1.5rem">
            Interactions information
          </DxcInset>
        </DxcAccordion.AccordionItem>
        <DxcAccordion.AccordionItem
          label="Delete a person"
          assistiveText="Deletion will be permanent"
          icon="delete"
          badge={{ position: "before", element: <DxcBadge label="DELETE" /> }}
        >
          <DxcInset space="1.5rem">
            Deletion information
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </DxcInset>
  );
}`;

const scope = {
  DxcAccordion,
  DxcInset,
  DxcBadge,
  DxcStatusLight,
  useState,
};

export default { code, scope };
