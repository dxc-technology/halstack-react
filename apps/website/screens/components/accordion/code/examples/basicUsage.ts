import { DxcAccordion, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="How to edit your profile?">
          <DxcInset space="1.5rem">
            To edit your profile you need to go to Settings and click on Profile.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </DxcInset>
  );
}`;

const scope = {
  DxcAccordion,
  DxcInset,
};

export default { code, scope };
