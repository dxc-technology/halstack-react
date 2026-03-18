import { DxcWizard } from "@dxc-technology/halstack-react";

const WizardPreview = () => {
  const stepsWithIcons = [
    {
      label: "Account setup",
      description: "Create your account credentials",
      valid: true,
      icon: "person",
    },
    {
      label: "Address information",
      description: "Provide your home address details",
      valid: true,
      icon: "home",
    },
    {
      label: "Employment details",
      description: "Add your current job information",
      icon: "work",
    },
    {
      label: "Review and submit",
      description: "Confirm all information before submission",
      disabled: true,
      icon: "thumb_up",
    },
  ];
  return <DxcWizard steps={stepsWithIcons} currentStep={1} />;
};

export default WizardPreview;
