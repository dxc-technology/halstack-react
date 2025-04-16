import { DxcInset, DxcTypography } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcTypography>
        This is a very basic example of the use of the DxcTypography component.
      </DxcTypography>
    </DxcInset>
  );
}`;

const scope = {
  DxcInset,
  DxcTypography,
};

export default { code, scope };
