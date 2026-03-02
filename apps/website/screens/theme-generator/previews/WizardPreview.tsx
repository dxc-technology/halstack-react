import { DxcWizard } from "@dxc-technology/halstack-react";

const WizardPreview = () => {
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
  return <DxcWizard steps={stepsWithIcons} currentStep={1} />;
};

export default WizardPreview;
