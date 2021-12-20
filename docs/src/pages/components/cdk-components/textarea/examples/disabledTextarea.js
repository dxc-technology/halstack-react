import { DxcTextarea } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcTextarea
      label="Disabled"
      disabled
      margin="medium"
    />
  );
}`;

const scope = {
  DxcTextarea,
};

export default { code, scope };
