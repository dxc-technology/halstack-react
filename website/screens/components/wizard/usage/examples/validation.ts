import { DxcWizard, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="2rem">
        <DxcWizard
          steps={[
            {
              label: "Step label",
              valid: true,
            },
            {
              label: "Step label",
              valid: true,
            },
          ]}
        ></DxcWizard>
        <DxcWizard
          steps={[
            {
              label: "Step label",
              valid: false,
            },
            {
              label: "Step label",
              valid: false,
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
