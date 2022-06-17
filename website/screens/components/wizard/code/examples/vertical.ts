import { DxcWizard, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
    return (
      <DxcInset space="large">
        <DxcWizard
          mode="vertical"
          steps={[
            {
              label: "Personal info",
              description: "Enter your personal info",
              valid: true
            },
            {
              label: "Policy",
              description: "Choose a policy", 
              valid: false
            },
            {
              label: "Payment",
              description: "Indicate payment details"
            },
            {
              label: "Confirm details",
              disabled: true
            }
         ]}
        ></DxcWizard>
      </DxcInset>
    );
  }`;

const scope = {
  DxcWizard,
  DxcInset,
};

export default { code, scope };
