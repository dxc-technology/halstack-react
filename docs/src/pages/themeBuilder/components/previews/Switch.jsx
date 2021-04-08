import React, {useState} from "react";
import styled from "styled-components";
import { DxcSwitch } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const Switch = () => {
  const [checked, changeChecked] = useState(true);
  const onChange = (newValue) => {
    changeChecked(newValue);
  };

  return (
    <SwitchContainer>
      <Mode text="Default">
        <DxcSwitch
          checked={checked}
          label="Switch"
          onChange={onChange}
          margin="medium"
        />
      </Mode>
      <Mode text="Disabled">
        <DxcSwitch
          checked={true}
          label="Switch"
          margin="medium"
          disabled
        />
      </Mode>
    </SwitchContainer>
  );
};

const SwitchContainer = styled.div``;

export default Switch;
