import { DxcSpinner, DxcInset, DxcRow } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcRow gutter="large" justify="center">
        <DxcSpinner label="Loading..." showValue value={50} />
        <DxcSpinner label="Loading..." />
      </DxcRow>
    </DxcInset>
  );
}`;

const scope = {
  DxcSpinner,
  DxcInset,
  DxcRow,
};

export default { code, scope };
