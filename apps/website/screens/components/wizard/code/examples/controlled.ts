import { DxcWizard, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [myCurrentStep, setMyCurrentStep] = useState(2);
  const onStepClick = (i) => {
    setMyCurrentStep(i);
  };

  return (
    <DxcInset space="2rem">
      <DxcWizard
        currentStep={myCurrentStep}
        onStepClick={onStepClick}
        steps={[
          {
            label: "Personal info",
            valid: true,
          },
          {
            label: "Policy",
            valid: false,
          },
          {
            label: "Payment",
          },
          {
            label: "Confirm details",
          },
        ]}
      ></DxcWizard>
    </DxcInset>
  );
}`;

const scope = {
  DxcWizard,
  DxcInset,
  useState,
};

export default { code, scope };
