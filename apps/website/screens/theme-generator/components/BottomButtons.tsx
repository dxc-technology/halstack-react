import { DxcButton, DxcContainer, DxcFlex } from "@dxc-technology/halstack-react";
import { Step } from "../types";

const MIN_STEP: Step = 0;
const MAX_STEP: Step = 2;

const BottomButtons = ({
  currentStep,
  onChangeStep,
  onExport,
}: {
  currentStep: Step;
  onChangeStep: (step: Step) => void;
  onExport: () => void;
}) => (
  <DxcContainer
    width="100%"
    padding="var(--spacing-padding-s) var(--spacing-padding-xl)"
    background={{ color: "var(--color-bg-neutral-lightest)" }}
    boxSizing="border-box"
  >
    <DxcFlex justifyContent="flex-end" alignItems="center" gap="var(--spacing-gap-m)">
      <DxcButton
        label="Back"
        icon="arrow_back"
        mode="tertiary"
        onClick={() => onChangeStep((currentStep - 1) as Step)}
        disabled={currentStep === MIN_STEP}
        size={{ height: "medium" }}
      />
      {currentStep === MAX_STEP ? (
        <DxcButton label="Export theme" onClick={onExport} size={{ height: "medium" }} />
      ) : (
        <DxcButton label="Next" onClick={() => onChangeStep((currentStep + 1) as Step)} size={{ height: "medium" }} />
      )}
    </DxcFlex>
  </DxcContainer>
);

export default BottomButtons;
