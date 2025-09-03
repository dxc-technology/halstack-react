import { DxcWizard, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcWizard
        steps={[
          {
            label: "Select policy type",
            valid: true,
          },
          {
            label: "Property details",
            valid: false,
          },
          {
            label: "Review & submit",
            valid: false,
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
