import { DxcDateInput } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcDateInput
      label="Fill parent"
      size="fillParent"
      margin="medium"
    />
  );
}`;

const scope = {
  DxcDateInput,
};

export default { code, scope };
