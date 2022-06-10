import { DxcProgressBar, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
    return (
      <DxcInset space="large">
        <DxcProgressBar label="Loading" />
      </DxcInset>
    );
  }`;

const scope = {
  DxcProgressBar,
  DxcInset,
};

export default { code, scope };
