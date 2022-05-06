import { DxcSwitch } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <div style={{ display: "flex" }}>
      <DxcSwitch
        label="Default"
        margin="medium"
      />
      <DxcSwitch
        label="Label"
        optional
        margin="medium"
      />
      <DxcSwitch
        label="Disabled"
        disabled
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcSwitch,
};

export default { code, scope };
