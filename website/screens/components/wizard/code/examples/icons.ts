import { DxcWizard, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [myCurrentStep, setMyCurrentStep] = useState(2);
  const onStepClick = (i) => {
    setMyCurrentStep(i);
  };

  const userIcon = (
    <svg width="32px" height="32px" viewBox="0 0 32 32" fill="currentColor">
      <path d="M22.56,16.53a9.95,9.95,0,0,1-13.12,0A15,15,0,0,0,1,30a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1A15,15,0,0,0,22.56,16.53Z" />
      <circle cx="16" cy="9" r="8" />
    </svg>
  );

  const homeIcon = (
    <svg
      viewBox="0 0 24 24"
      enableBackground="new 0 0 24 24"
      fill="currentColor"
    >
      <g id="Bounding_Box">
        <rect fill="none" width="24" height="24" />
      </g>
      <g id="Master">
        <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
      </g>
    </svg>
  );

  return (
    <DxcInset space="2rem">
      <DxcWizard
        currentStep={myCurrentStep}
        onStepClick={onStepClick}
        steps={[
          {
            label: "Personal info",
            valid: true,
            icon: userIcon,
          },
          {
            label: "Address",
            valid: true,
            icon: homeIcon,
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
