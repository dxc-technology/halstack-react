import { DxcRadio } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [checked, changeCheckedOption1] = useState(true);
  const [checked2, changeCheckedOption2] = useState(false);
  const [checked3, changeCheckedOption3] = useState(false);
  const onSelect = selectFunction => {
    changeCheckedOption1(false);
    changeCheckedOption2(false);
    changeCheckedOption3(false);
    selectFunction(true);
  };

  return (
    <div>
      <DxcRadio
        checked={checked}
        label="Option1"
        onClick={() => {
          onSelect(changeCheckedOption1);
        }}
        margin="medium"
      />
      <DxcRadio
        checked={checked2}
        label="Option2"
        onClick={() => {
          onSelect(changeCheckedOption2);
        }}
        margin="medium"
      />
      <DxcRadio
        checked={checked3}
        label="Option3"
        onClick={() => {
          onSelect(changeCheckedOption3);
        }}
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
