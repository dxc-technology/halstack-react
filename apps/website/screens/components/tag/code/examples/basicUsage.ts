import { DxcTag, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
    return (
      <DxcInset space="2rem">
        <DxcTag label="Deprecated" />
      </DxcInset>
    );
  }`;

const scope = {
  DxcTag,
  DxcInset,
};

export default { code, scope };
