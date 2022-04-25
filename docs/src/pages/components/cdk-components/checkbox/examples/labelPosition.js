import { DxcCheckbox } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <div style={{ display: "flex" }}>
      <DxcCheckbox
        label="Label before"
        margin="medium"
      />
      <DxcCheckbox
        label="Label after"
        labelPosition="after"
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcCheckbox,
};

export default { code, scope };
