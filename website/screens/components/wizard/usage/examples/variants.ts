import { DxcWizard, DxcInset, DxcRow } from "@dxc-technology/halstack-react";

const code = `() => {
    return (
      <DxcInset space="small">
        <DxcRow justify="spaceEvenly">
          <DxcWizard
            steps={[
              {
                label: "Step label"
              },
              {
                label: "Step label"
              }
          ]}
          ></DxcWizard>
          <DxcWizard
            mode="vertical"
            steps={[
              {
                label: "Step label"
              },
              {
                label: "Step label"
              }
          ]}
          ></DxcWizard>
        </DxcRow>
      </DxcInset>
    );
  }`;

const scope = {
  DxcWizard,
  DxcInset,
  DxcRow,
};

export default { code, scope };
