import React, { useState } from "react";
import { DxcSwitch } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import ExamplesContainer from "./ExamplesContainer";

const Switch = () => {
  const [checked, changeChecked] = useState(false);
  const onChange = (newValue: boolean) => {
    changeChecked(newValue);
  };

  return (
    <ExamplesContainer>
      <Mode text="Default">
        <DxcSwitch checked={checked} label="Switch" onChange={onChange} />
      </Mode>
      <Mode text="Disabled">
        <DxcSwitch checked={true} label="Label before" disabled />
        <DxcSwitch
          checked={false}
          labelPosition="after"
          label="Label after"
          disabled
        />
      </Mode>
    </ExamplesContainer>
  );
};

export default Switch;
