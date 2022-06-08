import { DxcRadio, DxcInset, DxcStack } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [checked, changeCheckedOption1] = useState(true);
  const [checked2, changeCheckedOption2] = useState(false);
  const [checked3, changeCheckedOption3] = useState(false);
  const onSelect = (selectFunction) => {
    changeCheckedOption1(false);
    changeCheckedOption2(false);
    changeCheckedOption3(false);
    selectFunction(true);
  };

  return (
    <DxcInset space="large">
      <DxcStack>
        <DxcRadio
          checked={checked}
          label="Option1"
          onClick={() => {
            onSelect(changeCheckedOption1);
          }}
        />
        <DxcRadio
          checked={checked2}
          label="Option2"
          onClick={() => {
            onSelect(changeCheckedOption2);
          }}
        />
        <DxcRadio
          checked={checked3}
          label="Option3"
          onClick={() => {
            onSelect(changeCheckedOption3);
          }}
        />
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcRadio,
  DxcInset,
  useState,
  DxcStack,
};

export default { code, scope };
