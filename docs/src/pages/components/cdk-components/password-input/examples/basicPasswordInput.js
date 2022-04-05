import { DxcPasswordInput } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <div style={{ display: "flex" }}>
      <DxcPasswordInput
        label="Invalid"
        clearable
        margin="medium"
      />
      <DxcPasswordInput
        label="Invalid"
        error="Error message."
        clearable
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcPasswordInput,
};

export default { code, scope };
