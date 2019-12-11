import { DxcCheckbox } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [checked, changeChecked] = useState(true);
  const onChange = newValue => {
    changeChecked(newValue);
  };

  return (
    <div>
      <DxcCheckbox
        checked={checked}
        required={true}
        label="Checkbox"
        onChange={onChange}
      />
    </div>
  );
}`;

const scope = {
  DxcCheckbox,
  useState
};

export default { code, scope };
