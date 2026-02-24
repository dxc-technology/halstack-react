import { useState } from "react";
import { DxcContainer, DxcFlex, DxcWizard } from "@dxc-technology/halstack-react";
import { PageHeading } from "./components/PageHeading";
import { BottomButtons } from "./components/BottomButtons";
// import { FileData } from "../../../../packages/lib/src/file-input/types";

const steps = [
  { label: "Configure theme", description: "Branding details" },
  { label: "Preview", description: "Components and templates" },
  { label: "Export theme", description: "Review and export" },
];

const ThemeGeneratorPage = () => {
  const [currentStep, setCurrentStep] = useState<0 | 1 | 2>(0);
  // Descomentar cuándo se implementen las funcionalidades de cada paso
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

  const handleChangeStep = (step: 0 | 1 | 2) => {
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
            steps={steps}
            currentStep={currentStep}
            onStepClick={(i) => {
              if (i === 0) handleChangeStep(0);
              else if (i === 1) handleChangeStep(1);
              else if (i === 2) handleChangeStep(2);
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
            <PageHeading
              title={
                currentStep === 0
                  ? "Add your theme specifics"
                  : currentStep === 1
                    ? "Preview how your theme applies"
                    : "Review and export your theme"
              }
              subtitle={
                currentStep === 0
                  ? "Review your uploaded theme or define your brand colors and logos to preview them in real life. "
                  : currentStep === 1
                    ? "Choose components or examples from Halstack catalogue to see how your theme behaves."
                    : "Check your colors and branding assets before exporting your Halstack theme."
              }
            />
            {currentStep === 0 ? <></> : currentStep === 1 ? <></> : <></>}
          </DxcFlex>
        </DxcContainer>

        <BottomButtons currentStep={currentStep} onChangeStep={handleChangeStep} />
      </DxcFlex>
    </DxcContainer>
  );
};

export default ThemeGeneratorPage;
