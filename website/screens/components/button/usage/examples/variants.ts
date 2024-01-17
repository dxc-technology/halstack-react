import { DxcButton, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="2rem" justifyContent="center">
        <DxcButton mode="primary" label="Primary" />
        <DxcButton mode="secondary" label="Secondary" />
        <DxcButton mode="text" label="Text" />
        <DxcButton mode="error" label="Error" />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcFlex,
  DxcInset,
};

export default { code, scope };
