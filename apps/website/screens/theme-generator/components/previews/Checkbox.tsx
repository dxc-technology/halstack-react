import React, { useState } from "react";
import { DxcCheckbox } from "@repo/ui";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const Checkbox = () => {
  const [checked, changeChecked] = useState(false);
  const onChange = (newValue: boolean) => {
    changeChecked(newValue);
  };

  return (
    <PreviewContainer>
      <Mode text="Default">
        <DxcCheckbox checked={checked} label="Label text" onChange={onChange} />
      </Mode>
      <Mode text="Label position">
        <DxcCheckbox label="Label before" />
        <DxcCheckbox labelPosition="after" label="Label after" />
      </Mode>
      <Mode text="Disabled">
        <DxcCheckbox label="Label text" disabled />
        <DxcCheckbox label="Label text" checked disabled />
      </Mode>
      <Mode text="Read-only">
        <DxcCheckbox label="Label text" readOnly />
        <DxcCheckbox label="Label text" checked readOnly />
      </Mode>
    </PreviewContainer>
  );
};

export default Checkbox;
