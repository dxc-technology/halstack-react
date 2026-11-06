import { DxcButtonLink, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcButtonLink label="Link" href="#" />
    </DxcInset>
  );
}`;

const scope = {
  DxcButtonLink,
  DxcInset,
};

export default { code, scope };
