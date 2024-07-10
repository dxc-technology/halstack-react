import { HalstackProvider, DxcTextInput, DxcInset, DxcAccordion } from "@dxc-technology/halstack-react";

const code = `() => {
  const advancedTheme = {
    accordion: {
      backgroundColor: "#4a90e2",
      hoverBackgroundColor: "#b8e986",
      arrowColor: "#ffffff",
      disabledArrowColor: "#999999",
      assistiveTextFontSize: "1.5rem",
      assistiveTextFontWeight: "400",
      assistiveTextLetterSpacing: "-0.0125em",
      assistiveTextFontColor: "#f6fa06",
    },
  };
  
  return (
    <HalstackProvider advancedTheme={advancedTheme}>
      <DxcInset space="2rem">
        <DxcAccordion isExpanded label="Accordion" assistiveText="Assistive text">
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
