import { DxcNewDate } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcNewDate
      label="Fill parent"
      size="fillParent"
      margin="medium"
    />
  );
}`;

const scope = {
  DxcNewDate,
};

export default { code, scope };
