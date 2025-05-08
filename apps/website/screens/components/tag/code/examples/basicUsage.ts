import { DxcTag, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
    return (
      <DxcInset space="var(--spacing-padding-xl)">
        <DxcTag label="Deprecated" />
      </DxcInset>
    );
  }`;

const scope = {
  DxcTag,
  DxcInset,
};

export default { code, scope };
