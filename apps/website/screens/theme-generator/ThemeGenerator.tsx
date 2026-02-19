import { DxcButton, DxcContainer, DxcFlex, DxcHeading, DxcParagraph } from "@dxc-technology/halstack-react";

const ThemeGeneratorPage = () => {
  return (
    <>
      <DxcContainer
        width="100%"
        padding="var(--spacing-padding-xxl)"
        boxSizing="border-box"
        background={{
          image: "url(/theme-generator-landing-bg.jpg)",
          position: "0px 500px",
          color: "lightgrey 50%",
        }}
        minHeight="328px"
        height="fit-content"
        borderRadius="0% 0% 640px 0%"
      >
        <DxcFlex direction="column" fullHeight justifyContent="center" gap="var(--spacing-gap-m)">
          <DxcHeading text="Welcome to Halstack Theme Generators" />
          <DxcContainer maxWidth="60%">
            <DxcParagraph>
              Create and explore your brand within Halstack. Configure your core colors, upload your logo variants, and
              see in real time how your theme works across components, layouts, and real product scenarios.
            </DxcParagraph>
          </DxcContainer>
          {/* to be correctly placed */}
          <DxcButton label="Start configuration" />
        </DxcFlex>
      </DxcContainer>
    </>
  );
};
export default ThemeGeneratorPage;
