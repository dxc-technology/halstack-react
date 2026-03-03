import { DxcButton, DxcContainer, DxcFlex } from "@dxc-technology/halstack-react";
import { Step } from "../ThemeGeneratorConfigPage";

const MIN_STEP: Step = 0;
const MAX_STEP: Step = 2;

interface BottomButtonsProps {
  currentStep: Step;
  onChangeStep: (step: Step) => void;
  onExport: () => void;
}

const BottomButtons = ({ currentStep, onChangeStep, onExport }: BottomButtonsProps) => {
  const goToStep = (step: number) => {
    onChangeStep(step as Step);
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
          disabled={currentStep === MIN_STEP}
          size={{ height: "medium" }}
        />
        {currentStep === MAX_STEP ? (
          <DxcButton label="Export theme" onClick={onExport} size={{ height: "medium" }} />
        ) : (
          <DxcButton label="Next" onClick={() => goToStep(currentStep + 1)} size={{ height: "medium" }} />
        )}
      </DxcFlex>
    </DxcContainer>
  );
};

export default BottomButtons;
