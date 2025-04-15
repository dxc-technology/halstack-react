import { DxcAccordion, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="How to edit your profile?">
          <DxcInset space="var(--spacing-padding-l)">
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
