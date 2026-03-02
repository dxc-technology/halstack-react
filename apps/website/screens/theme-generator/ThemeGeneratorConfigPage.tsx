import { useEffect, useState } from "react";
import { DxcContainer, DxcFlex, DxcWizard } from "@dxc-technology/halstack-react";
import StepHeading from "./components/StepHeading";
import BottomButtons from "./components/BottomButtons";
import { FileData } from "../../../../packages/lib/src/file-input/types";
import { generateTokens, updateCSSVariables } from "./ThemeGeneratorUtils";
import { type CssColor } from "@adobe/leonardo-contrast-colors";
import { BrandingDetails } from "./steps/BrandingDetails";

export type Step = 0 | 1 | 2;

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
  const [colors, setColors] = useState<{
    primary: CssColor;
    secondary: CssColor;
    tertiary: CssColor;
    neutral: CssColor;
    info: CssColor;
    success: CssColor;
    error: CssColor;
    warning: CssColor;
  }>({
    primary: "#5f249f",
    secondary: "#00b4d8",
    tertiary: "#ffa500",
    neutral: "#666666",
    info: "#0095FF",
    success: "#2FD05D",
    error: "#FE0123",
    warning: "#F38F20",
  });
  const [logos, setLogos] = useState({
    mainLogo: [] as FileData[],
    footerLogo: [] as FileData[],
    footerReducedLogo: [] as FileData[],
    favicon: [] as FileData[],
  });
  const [tokens, setTokens] = useState<Record<string, string>>({});

  // Generate tokens when step change
  useEffect(() => {
    const generateTokensFromColors = () => {
      try {
        const mappedColors = {
          primary: colors.primary,
          secondary: colors.secondary,
          tertiary: colors.tertiary,
          neutral: colors.neutral,
          semantic01: colors.info,
          semantic02: colors.success,
          semantic03: colors.warning,
          semantic04: colors.error,
        };

        const themeData = { baseColors: mappedColors };
        const originalThemeData = { baseColors: mappedColors };
        const generatedTokens = generateTokens(themeData, originalThemeData);

        setTokens(generatedTokens);

        // Apply generated tokens to CSS
        Object.entries(generatedTokens).forEach(([key, value]) => {
          document.documentElement.style.setProperty(key, value, "important");
        });
      } catch (error) {
        console.error("Error generating tokens:", error);
      }
    };

    generateTokensFromColors();
  }, [currentStep]);

  // Update CSS variables when colors change
  useEffect(() => {
    Object.entries(colors).forEach(([colorName, colorValue]) => {
      updateCSSVariables(colorName, colorValue);
    });
  }, [colors]);

  const handleChangeStep = (step: 0 | 1 | 2) => {
    setCurrentStep(step);
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tokens, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "halstack-theme-tokens.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
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
          <DxcFlex direction="column" alignItems="center" gap="var(--spacing-gap-xl)">
            <StepHeading title={steps[currentStep].title} subtitle={steps[currentStep].subtitle} />
            {currentStep === 0 ? (
              <BrandingDetails colors={colors} onColorsChange={setColors} logos={logos} onLogosChange={setLogos} />
            ) : currentStep === 1 ? (
              <></>
            ) : (
              <></>
            )}
          </DxcFlex>
        </DxcContainer>

        <BottomButtons currentStep={currentStep} onChangeStep={handleChangeStep} onExport={handleExport} />
      </DxcFlex>
    </DxcContainer>
  );
};

export default ThemeGeneratorConfigPage;
