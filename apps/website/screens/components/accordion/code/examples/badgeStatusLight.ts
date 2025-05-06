import { DxcInset, DxcAccordion, DxcBadge, DxcStatusLight } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="GET request"
          subLabel="Jan, 20 2025"
          badge={{ position: "before", element: <DxcBadge label="GET" color="green"/> }}
          statusLight={<DxcStatusLight label="Active" mode="success" />}
        >
          <DxcInset space="1.5rem">
            To edit your profile you need to go to Settings and click on Profile.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </DxcInset>
  );
}`;

const scope = {
  DxcInset,
  DxcAccordion,
  DxcBadge,
  DxcStatusLight,
};

export default { code, scope };
