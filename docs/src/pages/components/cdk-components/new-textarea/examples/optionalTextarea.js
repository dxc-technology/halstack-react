import { DxcNewTextarea } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcNewTextarea
      label="Optional"
      optional
      margin="medium"
    />
  );
}`;

const scope = {
  DxcNewTextarea,
};

export default { code, scope };
