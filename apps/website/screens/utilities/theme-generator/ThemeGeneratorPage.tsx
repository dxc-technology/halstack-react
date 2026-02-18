import { useState } from "react";
import { DxcContainer } from "@dxc-technology/halstack-react";
import { PageHeading } from "./components/PageHeading";
import { ThemeGeneratorWizard } from "./components/ThemeGeneratorWizard";
import { BottomButtons } from "./components/BottomButtons";

const ThemeGeneratorPage = () => {
  const [currentStep, setCurrentStep] = useState<0 | 1 | 2>(0);

  const handleChangeStep = (step: 0 | 1 | 2) => {
    setCurrentStep(step);
  };

  return (
    <>
      <ThemeGeneratorWizard currentStep={currentStep} onChangeStep={handleChangeStep} />

      <DxcContainer>
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
        {currentStep === 0 && <DxcContainer width="1112px"></DxcContainer>}
      </DxcContainer>

      <BottomButtons currentStep={currentStep} onChangeStep={handleChangeStep} />
    </>
  );
};

export default ThemeGeneratorPage;
