import React, { useState } from "react";
import styled from "styled-components";
import { DxcRadio } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const RadioButton = () => {
  return (
    <RadioButtonContainer>
      <Mode text="Default">
        <DxcRadio
          checked={true}
          label="Option1"
        />
        <DxcRadio
          checked={false}
          label="Option2"
        />
        <DxcRadio
          checked={false}
          label="Option3"
        />
      </Mode>
      <Mode text="Disabled">
        <DxcRadio
          checked={false}
          label="Option1" 
          disabled         
        />
        <DxcRadio
          checked={true}
          label="Option2"
          disabled
        />
        <DxcRadio
          checked={false}
          label="Option3"
          disabled
        />
      </Mode>
    </RadioButtonContainer>
  );
};

const RadioButtonContainer = styled.div``;

export default RadioButton;
