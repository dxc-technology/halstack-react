import { DxcAccordion, DxcInset, DxcParagraph } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="How to edit your profile?">
          <DxcInset space="var(--spacing-padding-l)">
            <DxcParagraph>To edit your profile you need to go to Settings and click on Profile.</DxcParagraph>
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </DxcInset>
  );
}`;

const scope = {
  DxcAccordion,
  DxcParagraph,
  DxcInset,
};

export default { code, scope };
