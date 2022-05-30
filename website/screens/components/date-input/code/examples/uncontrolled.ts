import { DxcDateInput, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcDateInput
        label="Uncontrolled"
        helperText="The 'defaultValue' prop only works with uncontrolled date inputs"
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
