import { DxcButton, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="1.5rem">
        <DxcButton size="small" icon="person" />
        <DxcButton label="Search" size="medium" icon="person" />
        <DxcButton label="Submit" size="large" icon="person" />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
