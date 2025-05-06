import { DxcWizard, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcWizard
        mode="vertical"
        steps={[
          { label: "Current proposal" },
          { label: "Family history" },
          { label: "Application questionnaire" },
          { label: "Documents" },
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
