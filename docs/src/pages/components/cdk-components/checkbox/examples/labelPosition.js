import { DxcCheckbox } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [checked, changeChecked] = useState(true);
  const [checked1, changeChecked1] = useState(false);
  const onChange = newValue => {
    changeChecked(newValue);
  };
  const onChange1 = newValue => {
    changeChecked1(newValue);
  };

  return (
    <div>
      <DxcCheckbox
        checked={checked}
        label="Label before"
        onChange={onChange}
        margin="medium"
      />

      <DxcCheckbox
        checked={checked1}
        labelPosition="after"
        label="Label after"
        onChange={onChange1}
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
