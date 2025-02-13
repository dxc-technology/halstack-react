import { DxcAccordion, DxcInset, DxcBadge, DxcStatusLight } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {

  return (
    <DxcInset space="2rem">
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="Find a person"
          disabled
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
          disabled
          badge={{ position: "before", element: <DxcBadge label="POST" color="blue" /> }}
          defaultIsExpanded
        >
          <DxcInset space="1.5rem">
            Person creation information
          </DxcInset>
        </DxcAccordion.AccordionItem>
        <DxcAccordion.AccordionItem
          label="Find interactions"
          disabled
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
          disabled
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
