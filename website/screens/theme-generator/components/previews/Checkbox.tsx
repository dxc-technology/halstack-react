import React, { useState } from "react";
import { DxcCheckbox } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import ExamplesContainer from "./ExamplesContainer";

const Checkbox = () => {
  const [checked, changeChecked] = useState(false);
  const onChange = (newValue: boolean) => {
    changeChecked(newValue);
  };

  return (
    <ExamplesContainer>
      <Mode text="Default">
        <DxcCheckbox checked={checked} label="Checkbox" onChange={onChange} />
      </Mode>
      <Mode text="Label position">
        <DxcCheckbox label="Label before" />
        <DxcCheckbox labelPosition="after" label="Label after" />
      </Mode>
      <Mode text="Disabled">
        <DxcCheckbox label="Disabled" disabled />
        <DxcCheckbox label="Disabled Checked" checked disabled />
      </Mode>
    </ExamplesContainer>
  );
};

export default Checkbox;
