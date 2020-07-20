import { DxcRadio } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [checked, changeChecked] = useState(true);
  const onClick = newValue => {
    changeChecked(newValue);
  };

  return (
    <div>
      <DxcRadio
        checked={checked}
        label="Label Before"
        onClick={onClick}
        margin="medium"
      />
      <DxcRadio
        checked={checked}
        label="Label After"
        labelPosition="after"
        onClick={onClick}
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcRadio,
  useState
};

export default { code, scope };
