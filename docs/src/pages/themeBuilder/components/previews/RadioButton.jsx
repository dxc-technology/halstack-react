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
      <DxcHeading
        text="Light Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xxsmall" }}
      />
      <Mode text="Default">
        <DxcRadio checked={true} label="Option1" margin={{ top: "xsmall", right: "small", left: "xsmall" }} />
        <DxcRadio checked={false} label="Option2" margin={{ top: "xsmall", right: "small" }} />
        <DxcRadio checked={false} label="Option3" margin={{ top: "xsmall" }} />
      </Mode>
      <Mode text="Disabled">
        <DxcRadio checked={true} label="Option1" margin={{ top: "xsmall", right: "small", left: "xsmall" }} disabled />
        <DxcRadio checked={false} label="Option2" margin={{ top: "xsmall", right: "small" }} disabled />
        <DxcRadio checked={false} label="Option3" margin={{ top: "xsmall" }} disabled />
      </Mode>

      <DxcHeading
        text="Dark Mode"
        level={5}
        margin={{ top: "small", bottom: "xsmall" }}
      />
      <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Default">
          <DxcRadio checked={true} label="Option1" margin={{ top: "xsmall", right: "small", left: "xsmall" }} />
          <DxcRadio checked={false} label="Option2" margin={{ top: "xsmall", right: "small" }} />
          <DxcRadio checked={false} label="Option3" margin={{ top: "xsmall" }} />
        </Mode>
        <Mode mode="dark" text="Disabled">
          <DxcRadio checked={true} label="Option1" margin={{ top: "xsmall", right: "small", left: "xsmall" }} disabled />
          <DxcRadio checked={false} label="Option2" margin={{ top: "xsmall", right: "small" }} disabled />
          <DxcRadio checked={false} label="Option3" margin={{ top: "xsmall" }} disabled />
        </Mode>
      </BackgroundColorProvider>
    </RadioButtonContainer>
  );
};

const RadioButtonContainer = styled.div``;

export default RadioButton;
