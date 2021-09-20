import { DxcNewDate } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcNewDate
      helperText="Helper Text"
      margin="medium"
    />
  );
}`;

const scope = {
  DxcNewDate,
};

export default { code, scope };
