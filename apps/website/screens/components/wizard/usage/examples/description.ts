import { DxcWizard, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcWizard
        defaultCurrentStep={1}
        steps={[
          {
            label: "Step label",
            description: "Description for the step",
          },
          {
            label: "Step label",
            description: "Description for the step",
          },
          {
            label: "Step label",
            description: "Description for the step",
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
