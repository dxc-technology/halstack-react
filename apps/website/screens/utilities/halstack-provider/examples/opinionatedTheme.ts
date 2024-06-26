import { HalstackProvider, DxcTextInput, DxcInset, DxcAccordion } from "@repo/ui";

const code = `() => {
  const customTheme = {
    accordion: {
      accentColor: "#1b75bb",
      fontColor: "#666666",
    },
    textInput: {
      fontColor: "#f80808",
    },
  };

  return (
    <HalstackProvider theme={customTheme}>
      <DxcInset space="2rem">
        <DxcAccordion isExpanded label="Accordion">
          <DxcInset space="2rem">
            <DxcTextInput label="Enter your surname" defaultValue="Harris" />
          </DxcInset>
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
