import { HalstackProvider, DxcTextInput, DxcInset, DxcAccordion } from "@dxc-technology/halstack-react";

const code = `() => {
  const advancedTheme = {
    accordion: {
      backgroundColor: "#e8dee3",
      hoverBackgroundColor: "#e4c7d6",
      arrowColor: "#ffffff",
      disabledArrowColor: "#999999",
      assistiveTextFontSize: "1rem",
      assistiveTextFontColor: "#40182d",
    },
  };
  
  return (
    <HalstackProvider advancedTheme={advancedTheme}>
      <DxcInset space="2rem">
        <DxcAccordion>
          <DxcAccordion.AccordionItem isExpanded label="Assure Claims" subLabel="Jan, 09 2025" assistiveText="Ref - 123456">
            <DxcInset space="2rem">
              <DxcTextInput label="Enter your surname" defaultValue="Harris" />
            </DxcInset>
          </DxcAccordion.AccordionItem>
        </DxcAccordion>
      </DxcInset>
    </HalstackProvider>
  );
}`;

const scope = {
  HalstackProvider,
  DxcTextInput,
  DxcInset,
  DxcAccordion,
};

export default { code, scope };
