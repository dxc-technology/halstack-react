import { DxcLink, DxcContainer, DxcFlex, DxcHeading, DxcTypography } from "@dxc-technology/halstack-react";
import Link from "next/link";

const ThemeGeneratorPage = () => {
  return (
    <DxcContainer
      width="100%"
      padding="56px"
      boxSizing="border-box"
      background={{
        image: "url(/theme-generator-landing-bg.png)",
        position: "0px 50%",
        size: "cover",
      }}
      height="fit-content"
      borderRadius="0% 0% 640px 0%"
    >
      <DxcFlex direction="column" justifyContent="center" gap="var(--spacing-gap-ml)">
        <DxcFlex direction="column" justifyContent="center" gap="var(--spacing-gap-m)">
          <DxcHeading text="Welcome to Halstack Theme Generators" />
          <DxcContainer maxWidth="62%">
            <DxcTypography fontSize="var(--typography-body-xl)">
              Create and explore your brand within Halstack. Configure your core colors, upload your logo variants, and
              see in real time how your theme works across components, layouts, and real product scenarios.
            </DxcTypography>
          </DxcContainer>
        </DxcFlex>
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
