import { useState } from "react";
import { DxcContainer, DxcFlex, DxcWizard } from "@dxc-technology/halstack-react";
import StepHeading from "./components/StepHeading";
import BottomButtons from "./components/BottomButtons";
import ThemeGeneratorPreviewPage from "./ThemeGeneratorPreviewPage";
// import { FileData } from "../../../../packages/lib/src/file-input/types";

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
  // Uncomment when implementing the Branding details screen
  /** const [colors, setColors] = useState({
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
  */

  const handleChangeStep = (step: Step) => {
    setCurrentStep(step);
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
            {currentStep === 0 ? <></> : currentStep === 1 ? <ThemeGeneratorPreviewPage /> : <></>}
          </DxcFlex>
        </DxcContainer>

        <BottomButtons currentStep={currentStep} onChangeStep={handleChangeStep} />
      </DxcFlex>
    </DxcContainer>
  );
};

export default ThemeGeneratorConfigPage;
