import { DxcWizard, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcWizard
        steps={[
          { label: "Personal information" },
          { 
            label: "Coverage selection",
            disabled: true,
          },
          { 
            label: "Review & submit",
            disabled: true,
          },
        ]}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcWizard,
  DxcInset,
};

export default { code, scope };
