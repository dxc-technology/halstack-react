import React, { useState } from "react";
import styled from "styled-components";
import {
  DxcCheckbox,
  DxcHeading,
  BackgroundColorProvider,
} from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const Checkbox = () => {
  const [checked, changeChecked] = useState(false);
  const onChange = (newValue) => {
    changeChecked(newValue);
  };
  return (
    <CheckboxContainer>
      <Mode text="Default">
        <DxcCheckbox checked={checked} label="Checkbox" onChange={onChange} />
      </Mode>
      <Mode text="Label position">
        <DxcCheckbox label="Label before" margin="small"/>
        <DxcCheckbox labelPosition="after" label="Label after" margin="small"/>
      </Mode>
      <Mode text="Disabled">
        <DxcCheckbox label="Disabled" disabled />
        <DxcCheckbox label="Disabled Checked" checked disabled />
      </Mode>
      <DxcHeading
        text="Dark Mode"
        level={5}
        margin={{ top: "small", bottom: "xsmall" }}
      />
      <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Default">
          <DxcCheckbox checked={checked} label="Checkbox" onChange={onChange} />
        </Mode>
        <Mode mode="dark" text="Label position">
          <DxcCheckbox label="Label before" />
          <DxcCheckbox labelPosition="after" label="Label after" />
        </Mode>
        <Mode mode="dark" text="Disabled">
          <DxcCheckbox label="Disabled" disabled />
          <DxcCheckbox label="Disabled Checked" checked disabled />
        </Mode>
      </BackgroundColorProvider>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div``;

export default Checkbox;
