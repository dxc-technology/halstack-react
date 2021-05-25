import React from "react";
import styled from "styled-components";
import {
  DxcRadio,
  DxcHeading,
  BackgroundColorProvider,
} from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const RadioButton = () => {
  return (
    <RadioButtonContainer>
      <Mode text="Default">
        <DxcRadio checked={true} label="Option1" />
        <DxcRadio checked={false} label="Option2" />
        <DxcRadio checked={false} label="Option3" />
      </Mode>
      <Mode text="Disabled">
        <DxcRadio checked={false} label="Option1" disabled />
        <DxcRadio checked={true} label="Option2" disabled />
        <DxcRadio checked={false} label="Option3" disabled />
      </Mode>

      <DxcHeading
        text="Dark Mode"
        level={5}
        margin={{ top: "small", bottom: "xsmall" }}
      />
      <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Default">
          <DxcRadio checked={true} label="Option1" />
          <DxcRadio checked={false} label="Option2" />
          <DxcRadio checked={false} label="Option3" />
        </Mode>
        <Mode mode="dark" text="Disabled">
          <DxcRadio checked={false} label="Option1" disabled />
          <DxcRadio checked={true} label="Option2" disabled />
          <DxcRadio checked={false} label="Option3" disabled />
        </Mode>
      </BackgroundColorProvider>
    </RadioButtonContainer>
  );
};

const RadioButtonContainer = styled.div``;

export default RadioButton;
