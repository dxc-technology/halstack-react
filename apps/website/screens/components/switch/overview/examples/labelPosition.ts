import { DxcSwitch, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex justifyContent="center" gap="var(--spacing-gap-xxl)">
        <DxcSwitch defaultChecked label="Show all" />
        <DxcSwitch label="Off" labelPosition="after" />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcSwitch,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
