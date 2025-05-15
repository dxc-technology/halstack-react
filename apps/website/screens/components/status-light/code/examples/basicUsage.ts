import { DxcStatusLight, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
    return (
      <DxcInset space="var(--spacing-padding-xl)">
        <DxcStatusLight label="Accepted" mode="success" size="large" />
      </DxcInset>
    );
  }`;

const scope = {
  DxcInset,
  DxcStatusLight,
};

export default { code, scope };
