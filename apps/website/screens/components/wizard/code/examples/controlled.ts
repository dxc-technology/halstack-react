import { DxcWizard, DxcInset } from "@repo/ui";
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
            valid: true,
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
