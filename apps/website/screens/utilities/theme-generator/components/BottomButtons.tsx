import { DxcButton } from "@dxc-technology/halstack-react";
import styled from "@emotion/styled";

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-gap-s);
`;

export const BottomButtons = ({
  currentStep,
  setCurrentStep,
}: {
  currentStep: 0 | 1 | 2;
  setCurrentStep: React.Dispatch<React.SetStateAction<0 | 1 | 2>>;
}) => {
  const handlePrevious = () => {
    setCurrentStep((prev) => (prev > 0 ? ((prev - 1) as 0 | 1 | 2) : prev));
  };

  const handleNext = () => {
    setCurrentStep((prev) => (prev < 2 ? ((prev + 1) as 0 | 1 | 2) : prev));
  };

  return (
    <ButtonsWrapper>
      <DxcButton label="Previous" icon="arrow_back" mode="secondary" onClick={handlePrevious} />
      {currentStep === 2 ? (
        <DxcButton label="Export" icon="download" onClick={handleNext} />
      ) : (
        <DxcButton label="Next" icon="arrow_forward" onClick={handleNext} />
      )}
    </ButtonsWrapper>
  );
};
