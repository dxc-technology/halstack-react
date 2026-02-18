import { DxcContainer, DxcWizard } from "@dxc-technology/halstack-react";

const steps = [
  { label: "Configure theme", description: "Branding details" },
  { label: "Preview", description: "Components and templates" },
  { label: "Export theme", description: "Review and export" },
];

interface ThemeGeneratorWizardProps {
  currentStep: 0 | 1 | 2;
  onChangeStep: (step: 0 | 1 | 2) => void;
}

export const ThemeGeneratorWizard = ({ currentStep, onChangeStep }: ThemeGeneratorWizardProps) => {
  return (
    <DxcContainer width="1112px" height="52px">
      <DxcWizard
        steps={steps}
        currentStep={currentStep}
        onStepClick={(i) => {
          if (i === 0) onChangeStep(0);
          else if (i === 1) onChangeStep(1);
          else if (i === 2) onChangeStep(2);
        }}
      />
    </DxcContainer>
  );
};
