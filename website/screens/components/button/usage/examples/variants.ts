import { DxcButton, DxcInset, DxcRow } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcRow gutter="large" justify="center">
        <DxcButton mode="primary" label="Primary" />
        <DxcButton mode="secondary" label="Secondary" />
        <DxcButton mode="text" label="Text" />
      </DxcRow>
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcRow,
  DxcInset,
};

export default { code, scope };
