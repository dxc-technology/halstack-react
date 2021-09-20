import { DxcNewDate } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcNewDate
      label="Disabled"
      disabled
      margin="medium"
    />
  );
}`;

const scope = {
  DxcNewDate,
};

export default { code, scope };
