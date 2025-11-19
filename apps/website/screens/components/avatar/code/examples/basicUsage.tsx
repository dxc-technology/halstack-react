import { DxcAvatar, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcAvatar
        label="Michael Ramirez"
        color="success"
        primaryText="Michael Ramirez"
        secondaryText="m.ramirez@insurance.com"
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcAvatar,
  DxcInset,
};

export default { code, scope };
