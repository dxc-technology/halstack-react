import React, { useState } from "react";
import styled from "styled-components";
import { DxcSwitch, DxcHeading } from "@dxc-technology/halstack-react";

import Mode from "../Mode";
import { BackgroundColorProvider } from "@dxc-technology/halstack-react/dist/BackgroundColorContext";

const Switch = () => {
  const [checked, changeChecked] = useState(false);
  const [checkedDark, changeCheckedDark] = useState(false);
  const onChange = (newValue) => {
    changeChecked(newValue);
  };
  const onChangeDark = (newValue) => {
    changeCheckedDark(newValue);
  };

  return (
    <SwitchContainer>
      <DxcHeading
        text="Light Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xxsmall" }}
      />
      <Mode text="Default">
        <DxcSwitch
          checked={checked}
          label="Switch"
          onChange={onChange}
          margin={{ top: "xsmall", left: "xsmall" }}
        />
      </Mode>
      <Mode text="Disabled">
        <DxcSwitch
          checked={true}
          label="Label before"
          margin={{ top: "xsmall", left: "xsmall", right: "xsmall" }}
          disabled
        />
        <DxcSwitch
          checked={false}
          labelPosition="after"
          label="Label after"
          margin={{ top: "xsmall", left: "xsmall" }}
          disabled
        />
      </Mode>
      {/* <DxcHeading
        text="Dark Mode"
        level={5}
        margin={{ top:"xsmall", bottom: "xxsmall" }}
      />
      <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Default">
          <DxcSwitch
            checked={checkedDark}
            label="Switch"
            onChange={onChangeDark}
            margin={{ top: "xsmall", left: "xsmall" }}
          />
        </Mode>
        <Mode mode="dark" text="Disabled">
          <DxcSwitch
            checked={true}
            label="Label before"
            margin={{ top: "xsmall", left: "xsmall", right: "xsmall" }}
            disabled
          />
          <DxcSwitch
            checked={false}
            labelPosition="after"
            label="Label after"
            margin={{ top: "xsmall", left: "xsmall" }}
            disabled
          />
        </Mode>
      </BackgroundColorProvider> */}
    </SwitchContainer>
  );
};

const SwitchContainer = styled.div``;

export default Switch;
