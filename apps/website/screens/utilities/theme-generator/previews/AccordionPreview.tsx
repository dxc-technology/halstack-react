import { DxcAccordion, DxcInset, DxcParagraph } from "@dxc-technology/halstack-react";

const AccordionPreview = () => {
  return (
    <DxcAccordion>
      <DxcAccordion.AccordionItem
        label="How to edit your profile?"
        icon="filled_info"
        assistiveText="Ref — 123645"
        subLabel="Jan, 23 2025"
      >
        <DxcInset space="var(--spacing-padding-l)">
          <DxcParagraph>To edit your profile you need to go to Settings and click on Profile.</DxcParagraph>
        </DxcInset>
      </DxcAccordion.AccordionItem>
    </DxcAccordion>
  );
};

export default AccordionPreview;
