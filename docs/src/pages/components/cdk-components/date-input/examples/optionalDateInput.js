import { DxcDateInput } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcDateInput
      label="Optional"
      optional
      margin="medium"
    />
  );
}`;

const scope = {
  DxcDateInput,
};

export default { code, scope };
