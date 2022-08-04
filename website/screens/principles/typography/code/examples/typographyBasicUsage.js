import {
  DxcAlert,
  DxcInset,
  DxcTypography,
} from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcTypography>
        This is a very basic example of the use of the DxcTypography component.
      </DxcTypography>
    </DxcInset>
  );
}`;

const scope = {
  DxcAlert,
  DxcInset,
  DxcTypography,
};

export default { code, scope };
