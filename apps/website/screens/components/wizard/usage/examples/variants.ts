import { DxcWizard, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="2rem">
        <DxcWizard
          steps={[
            {
              label: "Step label",
            },
            {
              label: "Step label",
            },
          ]}
        ></DxcWizard>
        <DxcWizard
          mode="vertical"
          steps={[
            {
              label: "Step label",
            },
            {
              label: "Step label",
            },
          ]}
        ></DxcWizard>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcWizard,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
