import React, { useState } from "react";
import styled from "styled-components";
import { DxcCheckbox } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const Checkbox = () => {
  const [checked, changeChecked] = useState(false);
  const onChange = (newValue) => {
    changeChecked(newValue);
  };
  return (
    <CheckboxContainer>
      <Mode text="Default">
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
        />
      </Mode>
      <Mode text="Label position">
        <DxcCheckbox label="Label before"/>
        <DxcCheckbox
          labelPosition="after"
          label="Label after"
        />
      </Mode>
      <Mode text="Disabled">
      <DxcCheckbox
          label="Disabled"
          disabled
        />
        <DxcCheckbox
          label="Disabled Checked"
          checked
          disabled
        />
      </Mode>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div``;

export default Checkbox;
