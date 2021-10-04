import { DxcNewTextarea } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcNewTextarea
      label="Disabled"
      disabled
      margin="medium"
    />
  );
}`;

const scope = {
  DxcNewTextarea,
};

export default { code, scope };
