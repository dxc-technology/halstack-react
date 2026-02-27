import { DxcButton, DxcContainer, DxcFlex } from "@dxc-technology/halstack-react";
import { Step } from "../ThemeGeneratorConfigPage";

const MIN_STEP: Step = 0;
const MAX_STEP: Step = 2;

interface BottomButtonsProps {
  currentStep: Step;
  onChangeStep: (step: Step) => void;
}

const BottomButtons = ({ currentStep, onChangeStep }: BottomButtonsProps) => {
  const goToStep = (step: number) => {
    if (step >= MIN_STEP && step <= MAX_STEP) {
      onChangeStep(step as Step);
    }
  };

  return (
    <DxcContainer
      width="100%"
      padding="var(--spacing-padding-s) var(--spacing-padding-l)"
      background={{ color: "var(--color-bg-neutral-lightest)" }}
      boxSizing="border-box"
    >
      <DxcFlex justifyContent="flex-end" alignItems="center" gap="var(--spacing-gap-m)">
        <DxcButton
          label="Back"
          icon="arrow_back"
          mode="tertiary"
          onClick={() => goToStep(currentStep - 1)}
          disabled={currentStep === 0}
          size={{ height: "medium", width: "fitContent" }}
        />
        {currentStep === 2 ? (
          <DxcButton
            label="Export theme"
            icon="download"
            onClick={() => console.log("download theme")}
            size={{ height: "medium", width: "fitContent" }}
          />
        ) : (
          <DxcButton
            label="Next"
            onClick={() => goToStep(currentStep + 1)}
            size={{ height: "medium", width: "fitContent" }}
          />
        )}
      </DxcFlex>
    </DxcContainer>
  );
};

export default BottomButtons;
