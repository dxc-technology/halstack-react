import { DxcSpinner, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="2rem" justifyContent="center">
        <DxcSpinner label="Loading..." showValue value={50} />
        <DxcSpinner label="Loading..." />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcSpinner,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
