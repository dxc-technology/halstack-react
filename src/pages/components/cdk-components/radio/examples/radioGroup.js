import { DxcRadio } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [checked, changeCheckedOption1] = useState(true);
  const [checked2, changeCheckedOption2] = useState(false);
  const [checked3, changeCheckedOption3] = useState(false);

  const onSelect = (selectFunction) => {
    changeCheckedOption1(false);
    changeCheckedOption2(false);
    changeCheckedOption3(false);
    selectFunction(true)
  }

    return (
      <div>
    <DxcRadio   
      checked={checked}
      label="Option1"
      onChange={() => {onSelect(changeCheckedOption1)}}
    />
    <DxcRadio   
      checked={checked2}
      label="Option2"
      onChange={() => {onSelect(changeCheckedOption2)}}
    />
    <DxcRadio   
      checked={checked3}
      label="Option3"
      onChange={() => {onSelect(changeCheckedOption3)}}
    />
      </div>
    );
  }`;

const scope = {
  DxcRadio,
  useState
};

export default { code, scope };
