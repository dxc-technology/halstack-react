import { DxcButton, DxcContainer, DxcFlex } from "@dxc-technology/halstack-react";

interface BottomButtonsProps {
  currentStep: 0 | 1 | 2;
  onChangeStep: (step: 0 | 1 | 2) => void;
}

export const BottomButtons = ({ currentStep, onChangeStep }: BottomButtonsProps) => {
  const handlePrevious = () => {
    if (currentStep === 1) {
      onChangeStep(0);
    } else if (currentStep === 2) {
      onChangeStep(1);
    }
  };

  const handleNext = () => {
    if (currentStep === 0) {
      onChangeStep(1);
    } else if (currentStep === 1) {
      onChangeStep(2);
    }
  };

  return (
    <DxcContainer
      width="100%"
      padding="var(--spacing-padding-s)"
      background={{ color: "var(--color-bg-neutral-lightest)" }}
      boxSizing="border-box"
    >
      <DxcFlex justifyContent="flex-end" alignItems="center" gap="var(--spacing-gap-m)">
        <DxcButton
          label="Back"
          icon="arrow_back"
          mode="secondary"
          onClick={handlePrevious}
          disabled={currentStep === 0}
        />
        {currentStep === 2 ? (
          <DxcButton label="Export" icon="download" onClick={handleNext} />
        ) : (
          <DxcButton label="Next" icon="arrow_forward" onClick={handleNext} />
        )}
      </DxcFlex>
    </DxcContainer>
  );
};
