import { HalstackProvider, DxcTextInput, DxcInset, DxcAccordion } from "@dxc-technology/halstack-react";

const code = `() => {
  const customTheme = {
   "accordion": {
      "accentColor": "#8e1e1e",
      "titleFontColor": "#8e1e1e",
      "subLabelFontColor": "#cd848d",
      "assistiveTextFontColor": "#cd848d"
    },
    textInput: {
      fontColor: "#8e1e1e",
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
