import { DxcTypography, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcTypography>This is some default typography.</DxcTypography>
    </DxcInset>
  );
}`;

const scope = { DxcTypography, DxcInset };

export default { code, scope };
