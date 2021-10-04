import { DxcNewDate } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcNewDate
      label="Invalid"
      error="Error message"
      margin="medium"
    />
  );
}`;

const scope = {
  DxcNewDate,
};

export default { code, scope };
