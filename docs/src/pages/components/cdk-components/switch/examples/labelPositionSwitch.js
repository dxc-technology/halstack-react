import { DxcSwitch } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <div style={{ display: "flex" }}>
      <DxcSwitch
        label="Label before"
        margin="medium"
      />
      <DxcSwitch
        label="Label after"
        labelPosition="after"
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcSwitch,
};

export default { code, scope };
