import { DxcWizard, DxcInset, DxcStack } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcStack gutter="large">
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
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcWizard,
  DxcInset,
  DxcStack,
};

export default { code, scope };
