import { DxcProgressBar, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
    return (
      <DxcInset space="2rem">
        <DxcProgressBar label="Loading" />
      </DxcInset>
    );
  }`;

const scope = {
  DxcProgressBar,
  DxcInset,
};

export default { code, scope };
