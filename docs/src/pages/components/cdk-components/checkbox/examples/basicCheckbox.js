import { DxcCheckbox } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <div style={{ display: "flex" }}>
      <DxcCheckbox
        label="Default"
        margin="medium"
      />
      <DxcCheckbox
        label="Required"
        required
        margin="medium"
      />
      <DxcCheckbox
        label="Disabled"
        disabled
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcCheckbox,
};

export default { code, scope };
