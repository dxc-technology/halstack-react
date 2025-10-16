import { DxcAvatar, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcAvatar
        color="success"
        title="User Name"
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcAvatar,
  DxcInset,
};

export default { code, scope };
