import { DxcWizard, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const userIcon = (
    <svg width="32px" height="32px" viewBox="0 0 32 32" fill="currentColor">
      <path d="M22.56,16.53a9.95,9.95,0,0,1-13.12,0A15,15,0,0,0,1,30a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1A15,15,0,0,0,22.56,16.53Z" />
      <circle cx="16" cy="9" r="8" />
    </svg>
  );

  return (
    <DxcInset space="2rem">
      <DxcWizard
        defaultCurrentStep={1}
        steps={[
          {
            label: "Step label",
            icon: userIcon,
          },
          {
            label: "Step label",
            icon: userIcon,
          },
          {
            label: "Step label",
            icon: userIcon,
            disabled: true,
          },
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
