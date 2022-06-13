import { DxcTag, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
    return (
      <DxcInset space="large">
        <DxcTag label="Default" />
      </DxcInset>
    );
  }`;

const scope = {
  DxcTag,
  DxcInset,
};

export default { code, scope };
