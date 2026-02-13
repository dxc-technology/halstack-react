import { DxcWizard, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";

const WizardPreview = () => {
  const steps = [
    {
      label: "First step",
      description: "Not validated step",
      valid: false,
    },
    {
      label: "Second step",
      description: "Validated step",
      valid: true,
    },
    {
      label: "Third step",
      description: "Another step description",
    },
    {
      label: "Forth step",
      description: "Disable step",
      disabled: true,
    },
  ];
  const stepsWithIcons = [
    {
      label: "First step",
      description: "Not validated step",
      valid: false,
      icon: "person",
    },
    {
      label: "Second step",
      description: "Validated step",
      valid: true,
      icon: "home",
    },
    {
      label: "Third step",
      description: "Another step description",
      icon: "work",
    },
    {
      label: "Forth step",
      description: "Disable step",
      disabled: true,
      icon: "thumb_up",
    },
  ];
  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Wizard" />
      <DxcWizard steps={steps} currentStep={1} />
      <DxcWizard steps={stepsWithIcons} currentStep={1} />
    </DxcFlex>
  );
};

export default WizardPreview;
