import { DxcWizard, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
    const [myCurrentStep, setMyCurrentStep] = useState(2);
    const onStepClick = i => {
        setMyCurrentStep(i);
    };

    const userIcon = (
      <svg width="32px" height="32px" viewBox="0 0 32 32" fill="currentColor">
        <path d="M22.56,16.53a9.95,9.95,0,0,1-13.12,0A15,15,0,0,0,1,30a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1A15,15,0,0,0,22.56,16.53Z"/>
        <circle cx="16" cy="9" r="8"/>
      </svg>
    );

    return (
      <DxcInset space="large">
        <DxcWizard
          currentStep={myCurrentStep}
          onStepClick={onStepClick}
          steps={[
            {
              label: "Personal info",
              icon: userIcon,
              valid: true
            },
            {
              label: "Policy",
              valid: true
            },
            {
              label: "Payment"
            },
            {
              label: "Confirm details"
            }
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
