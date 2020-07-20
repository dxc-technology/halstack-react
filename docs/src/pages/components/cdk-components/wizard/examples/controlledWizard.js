import { DxcWizard } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
    const [myCurrentStep, setMyCurrentStep] = useState(1);
    const onStepClick = i => {
        setMyCurrentStep(i);
    };

    return (
        <DxcWizard
          currentStep={myCurrentStep}
          onStepClick={onStepClick}
          steps={[
              {
                  label: "First step"
              },
              {
                  label: "Second step"
              },
              {
                  label: "Third step"
              },
              {
                  label: "Forth step",
                  valid: false
              }
          ]}
        ></DxcWizard>
    );
}`;

const scope = {
    DxcWizard,
    useState
  };
  
  export default { code, scope };