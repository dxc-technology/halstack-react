import { DxcCheckbox } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [checked, changeChecked] = useState(true);
  const onChange = newValue => {
    changeChecked(newValue);
  };

  return (
    <div style={{ background: "#000000" }}>
      <DxcCheckbox
        checked={checked}
        theme="dark"
        label="Checkbox"
        onChange={onChange}
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcCheckbox,
  useState
};

export default { code, scope };
