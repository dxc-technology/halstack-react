import { HalstackProvider, DxcTextInput, DxcInset, DxcAccordion } from "@dxc-technology/halstack-react";

const code = `() => {
  const customTheme = {
    "accordion": {
      "accentColor": "#fabada",
      "titleFontColor": "#333333",
      "subLabelFontColor": "#666666",
      "assistiveTextFontColor": "#999999"
  },
    textInput: {
      fontColor: "#f80808",
    },
  };
  
  return (
    <HalstackProvider theme={customTheme}>
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
