import { DxcWizard, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
    return (
      <DxcInset space="medium">
        <DxcWizard
          steps={[
            {
              label: "Personal info"
            },
            {
              label: "Policy"
            },
            {
              label: "Payment"
            },
            {
              label: "Confirm details",
              valid: false
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
