import {
  HalstackProvider,
  DxcTextInput,
  DxcInset,
  DxcAccordion,
} from "@dxc-technology/halstack-react";

const code = `() => {
  const customTheme = {
    accordion: {
      backgroundColor: "#000000",
      hoverBackgroundColor: "#111111",
      arrowColor: "#ffffff",
      titleLabelFontColor: "#ffffff",
    },
  };
  return (
    <HalstackProvider advancedTheme={customTheme}>
      <DxcInset space="1rem">
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
