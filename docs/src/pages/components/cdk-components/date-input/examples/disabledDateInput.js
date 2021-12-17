import { DxcDateInput } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcDateInput
      label="Disabled"
      disabled
      margin="medium"
    />
  );
}`;

const scope = {
  DxcDateInput,
};

export default { code, scope };
