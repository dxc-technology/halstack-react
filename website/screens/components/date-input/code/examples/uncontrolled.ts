import { DxcDateInput, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcDateInput
        size="fillParent"
        label="Uncontrolled"
        helperText="Helper text"
        defaultValue="10-08-1998"
        clearable
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcDateInput,
  DxcInset,
};

export default { code, scope };
