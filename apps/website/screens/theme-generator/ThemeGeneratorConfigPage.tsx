import React, { useMemo, useRef, useState } from "react";
import { DxcContainer, DxcFlex, DxcWizard } from "@dxc-technology/halstack-react";
import StepHeading from "./components/StepHeading";
import BottomButtons from "./components/BottomButtons";
import ThemeGeneratorPreviewPage from "./ThemeGeneratorPreviewPage";

import { BrandingDetails } from "./steps/BrandingDetails";
import { generateTokens, handleExport } from "./utils";
import { Colors, FileData, Step } from "./types";
import ReviewDetails from "./steps/ReviewDetails";

const steps = [
  {
    label: "Configure theme",
    description: "Branding details",
    title: "Add your theme specifics",
    subtitle: "Review your uploaded theme or define your brand colors and logos to preview them in real life. ",
  },
  {
    label: "Preview",
    description: "Components and templates",
    title: "Preview how your theme applies",
    subtitle: "Choose components or examples from Halstack catalogue to see how your theme behaves.",
  },
  {
    label: "Export theme",
    description: "Review and export",
    title: "Review and export your theme",
    subtitle: "Check your colors and branding assets before exporting your Halstack theme.",
  },
] as const;

const wizardSteps = steps.map(({ label, description }) => ({
  label,
  description,
}));

const ThemeGeneratorConfigPage = () => {
  const [currentStep, setCurrentStep] = useState<Step>(0);
  const [colors, setColors] = useState<Colors>({
    primary: "#5F249F",
    secondary: "#0067B3",
    tertiary: "#F7CF2B",
    neutral: "#999999",
    info: "#0067B3",
    success: "#59D97D",
    error: "#FE344F",
    warning: "#F59F3D",
  });
  const [logos, setLogos] = useState({
    mainLogo: [] as FileData[],
    footerLogo: [] as FileData[],
    footerReducedLogo: [] as FileData[],
    favicon: [] as FileData[],
  });
  const [tokens, setTokens] = useState<Record<string, string>>({});
  const lastGeneratedColorsRef = useRef<string>("");

  const themeJson = useMemo(() => {
    const themeObject = {
      tokens: tokens,
      logos: {
        mainLogo: "",
        footerLogo: "",
        footerReducedLogo: "",
        favicon: "",
      },
    };
    return JSON.stringify(themeObject, null, 2);
  }, [tokens]);

  const generateTokensFromColors = () => {
    try {
      const mappedColors = {
        primary: colors.primary,
        secondary: colors.secondary,
        tertiary: colors.tertiary,
        semantic01: colors.info,
        semantic02: colors.success,
        semantic03: colors.warning,
        semantic04: colors.error,
        neutral: colors.neutral,
      };

      const generatedTokens = generateTokens(mappedColors);

      setTokens(generatedTokens);
      lastGeneratedColorsRef.current = JSON.stringify(colors);
    } catch (error) {
      console.error("Error generating tokens:", error);
    }
  };

  const handleChangeStep = (step: 0 | 1 | 2) => {
    if (currentStep === 0 && JSON.stringify(colors) !== lastGeneratedColorsRef.current) {
      generateTokensFromColors();
    }
    setCurrentStep(step);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <BrandingDetails colors={colors} onColorsChange={setColors} logos={logos} onLogosChange={setLogos} />;
      case 1:
        return <ThemeGeneratorPreviewPage tokens={tokens} logos={logos} />;
      case 2:
        return <ReviewDetails tokens={tokens} logos={logos} themeJson={themeJson} />;
    }
  };

  return (
    <DxcContainer
      height="100%"
      boxSizing="border-box"
      padding={{ top: "var(--spacing-padding-xl)" }}
      background={{ color: "var(--color-bg-neutral-lighter)" }}
    >
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)" fullHeight>
        <DxcContainer width="80%" maxWidth="1112px" margin={{ left: "auto", right: "auto" }}>
          <DxcWizard
            steps={wizardSteps}
            currentStep={currentStep}
            onStepClick={(i) => {
              handleChangeStep(i as Step);
            }}
          />
        </DxcContainer>

        <DxcContainer
          maxWidth="1332px"
          width="90%"
          height="100%"
          boxSizing="border-box"
          margin={{ left: "auto", right: "auto" }}
        >
          <DxcFlex direction="column" alignItems="center" gap="var(--spacing-gap-xl)" fullHeight>
            <StepHeading title={steps[currentStep].title} subtitle={steps[currentStep].subtitle} />
            {renderStepContent()}
          </DxcFlex>
        </DxcContainer>

        <BottomButtons
          currentStep={currentStep}
          onChangeStep={handleChangeStep}
          onExport={() => handleExport(themeJson)}
        />
      </DxcFlex>
    </DxcContainer>
  );
};

export default ThemeGeneratorConfigPage;
