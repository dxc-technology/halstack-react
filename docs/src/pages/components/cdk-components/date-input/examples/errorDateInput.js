import { DxcDateInput } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcDateInput
      label="Invalid"
      error="Error message."
      margin="medium"
    />
  );
}`;

const scope = {
  DxcDateInput,
};

export default { code, scope };
