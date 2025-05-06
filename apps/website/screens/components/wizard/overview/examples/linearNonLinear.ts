import { DxcWizard, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcWizard
        steps={[
          { label: "Personal information" },
          { label: "Coverage selection" },
          { label: "Beneficiaries" },
          { label: "Review & submit" },
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
