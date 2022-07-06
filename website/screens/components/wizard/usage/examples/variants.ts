import { DxcWizard, DxcInset, DxcStack } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcStack gutter="2rem">
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
