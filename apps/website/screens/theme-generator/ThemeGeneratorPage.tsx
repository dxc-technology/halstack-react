import {
  DxcLink,
  DxcContainer,
  DxcFlex,
  DxcHeading,
  DxcTypography,
  DxcParagraph,
  DxcInset,
  DxcGrid,
} from "@dxc-technology/halstack-react";
import Link from "next/link";
import LandingCard from "./components/LandingCard";
import LandingSteps from "./components/LandingSteps";

const steps = [
  {
    title: "Define your brand",
    description: "Choose your core and semantic colors to set the foundation of your theme.",
  },
  {
    title: "Let the system do the rest",
    description: "The generator creates a complete set of tokens based on your colors.",
  },
  {
    title: "See it in real components",
    description: "Preview your theme applied to real Halstack components and layouts.",
  },
  {
    title: "Export and use it",
    description: "Review your theme and export it as a ready-to-use JSON file.",
  },
];

const ThemeGeneratorPage = () => {
  return (
    <>
      <DxcContainer
        width="100%"
        boxSizing="border-box"
        background={{
          image: "url(/theme-generator-landing-bg.png)",
          position: "0px 50%",
          size: "cover",
        }}
        borderRadius="0% 0% 640px 0%"
        height="305px"
      >
        <DxcFlex direction="column" fullHeight alignItems="center" justifyContent="center">
          <DxcContainer width="80%">
            <DxcFlex direction="column" fullHeight justifyContent="center" gap="var(--spacing-gap-ml)">
              <DxcFlex direction="column" justifyContent="center" gap="var(--spacing-gap-m)">
                <DxcHeading text="Welcome to Halstack Theme Generator" />
                <DxcContainer maxWidth="60%">
                  <DxcTypography fontSize="var(--typography-body-xl)">
                    Create and explore your brand within Halstack. Configure your core colors, upload your logo
                    variants, and see in real time how your theme works across components, layouts, and real product
                    scenarios.
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
        </DxcFlex>
      </DxcContainer>
      <DxcInset top="72px" bottom="48px">
        <DxcFlex justifyContent="center" alignItems="center">
          <DxcGrid gap="var(--spacing-gap-xl)">
            <DxcContainer width="60%">
              <DxcFlex direction="column" justifyContent="center" gap="var(--spacing-gap-m)">
                <DxcHeading text="Everything you need to theme at scale" level={3} />
                <DxcParagraph>
                  Theme Generators <strong>removes the complexity</strong> of brand customization so your team can move
                  faster, stay consistent, and ship with confidence.
                </DxcParagraph>
              </DxcFlex>
            </DxcContainer>
            <DxcFlex gap="var(--spacing-gap-l)" wrap="wrap">
              <LandingCard
                icon="filled_palette"
                title="From brand colors to design tokens"
                description="Define your core and semantic colors and let the generator create a structured set of design tokens."
              />
              <LandingCard
                icon="preview"
                title="Preview your theme in real components"
                description="Apply your generated tokens to real Halstack components and layouts to validate your color choices in context."
              />
              <LandingCard
                icon="accessibility"
                title="Accessible and ready to implement"
                description="The generator adjusts color combinations to aim for strong contrast and readability. Export a ready-to-use theme file and integrate it into your development workflow."
              />
            </DxcFlex>
          </DxcGrid>
        </DxcFlex>
      </DxcInset>
      <DxcInset vertical="var(--spacing-padding-xxl)">
        <DxcFlex direction="column" justifyContent="center" alignItems="center" gap="var(--spacing-gap-m)">
          <DxcHeading text="How it works" level={3} />
          <DxcParagraph>From brand colors to a production-ready Halstack theme in just a few clear steps.</DxcParagraph>
        </DxcFlex>
      </DxcInset>
      <LandingSteps steps={steps} />
      <DxcContainer
        width="100%"
        boxSizing="border-box"
        background={{
          image: "url(/theme-generator-landing-bg.png)",
          position: "0px 50%",
          size: "cover",
        }}
        borderRadius="0% 0% 640px 0%"
        height="305px"
        margin={{ top: "42px" }}
      >
        <DxcFlex direction="column" fullHeight alignItems="center" justifyContent="center" gap="var(--spacing-gap-ml)">
          <DxcFlex direction="column" alignItems="center" justifyContent="center" gap="var(--spacing-gap-m)">
            <DxcHeading text="Your brand, fully expressed in Halstack" />
            <DxcContainer width="70%">
              <DxcFlex>
                <DxcTypography fontSize="var(--typography-body-xl)" textAlign="center">
                  Turn your brand into a living part of your products. Keep every interface aligned, consistent, and
                  easier to evolve as your needs grow.
                </DxcTypography>
              </DxcFlex>
            </DxcContainer>
          </DxcFlex>
          <DxcFlex gap="var(--spacing-gap-l)">
            <Link href="" passHref legacyBehavior>
              <DxcLink icon="arrow_forward" iconPosition="after">
                Open Theme Generator
              </DxcLink>
            </Link>
            <Link href="" passHref legacyBehavior>
              <DxcLink>View documentation</DxcLink>
            </Link>
          </DxcFlex>
        </DxcFlex>
      </DxcContainer>
    </>
  );
};
export default ThemeGeneratorPage;
