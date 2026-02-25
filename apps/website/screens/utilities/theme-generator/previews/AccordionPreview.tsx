import { DxcAccordion, DxcInset, DxcParagraph } from "@dxc-technology/halstack-react";

const AccordionPreview = () => {
  return (
    <DxcAccordion>
      <DxcAccordion.AccordionItem label="Label" icon="filled_info" assistiveText="Assistive text" subLabel="Sublabel">
        <DxcInset space="var(--spacing-padding-l)">
          <DxcParagraph>Content</DxcParagraph>
        </DxcInset>
      </DxcAccordion.AccordionItem>
    </DxcAccordion>
  );
};

export default AccordionPreview;
