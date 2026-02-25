import { DxcLink, DxcContainer, DxcFlex, DxcHeading, DxcParagraph } from "@dxc-technology/halstack-react";
import Link from "next/link";

const ThemeGeneratorPage = () => {
  return (
    <DxcContainer
      width="100%"
      padding="var(--spacing-padding-xxl)"
      boxSizing="border-box"
      background={{
        image: "url(/theme-generator-landing-bg.jpg)",
        position: "0px 500px",
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
        <Link href="" passHref legacyBehavior>
          <DxcLink icon="arrow_forward" iconPosition="after">
            Start your theme
          </DxcLink>
        </Link>
      </DxcFlex>
    </DxcContainer>
  );
};
export default ThemeGeneratorPage;
