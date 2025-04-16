import { DxcButton, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcButton label="Submit" />
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcInset,
};

export default { code, scope };
