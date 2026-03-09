import { DxcAccordion, DxcInset, DxcParagraph } from "@dxc-technology/halstack-react";

const AccordionPreview = () => {
  return (
    <DxcAccordion defaultIndexActive={[0]}>
      <DxcAccordion.AccordionItem
        label="Account information"
        icon="filled_settings"
        assistiveText="Toggle account information section"
        subLabel="User details"
      >
        <DxcInset space="var(--spacing-padding-xl)">
          <DxcParagraph>
            This section contains information related to the user's account such as username, email, and preferences.
          </DxcParagraph>
        </DxcInset>
      </DxcAccordion.AccordionItem>
    </DxcAccordion>
  );
};

export default AccordionPreview;
