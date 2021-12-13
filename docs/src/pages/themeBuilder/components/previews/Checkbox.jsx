import React, { useState } from "react";
import styled from "styled-components";
import { DxcCheckbox, DxcHeading } from "@dxc-technology/halstack-react";
import Mode from "../Mode";

const Checkbox = () => {
  const [checked, changeChecked] = useState(false);
  const onChange = (newValue) => {
    changeChecked(newValue);
  };
  return (
    <CheckboxContainer>
      <DxcHeading
        text="Light Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xxsmall" }}
      />
      <Mode text="Default">
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          margin={{ top: "xsmall", left: "xsmall" }}
        />
      </Mode>
      <Mode text="Label position">
        <DxcCheckbox
          label="Label before"
          margin={{ top: "xsmall", left: "xsmall", right: "xsmall" }}
        />
        <DxcCheckbox
          labelPosition="after"
          label="Label after"
          margin={{ top: "xsmall" }}
        />
      </Mode>
      <Mode text="Disabled">
        <DxcCheckbox
          label="Disabled"
          disabled
          margin={{ top: "xsmall", left: "xsmall", right: "xsmall" }}
        />
        <DxcCheckbox
          label="Disabled Checked"
          checked
          disabled
          margin={{ top: "xsmall" }}
        />
      </Mode>
      {/* <DxcHeading
        text="Dark Mode"
        level={5}
        margin={{ top: "small", bottom: "xsmall" }}
      />
      <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Default">
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            margin={{ top: "xsmall", left: "xsmall" }}
          />
        </Mode>
        <Mode mode="dark" text="Label position">
          <DxcCheckbox
            label="Label before"
            margin={{ top: "xsmall", left: "xsmall", right: "xsmall" }}
          />
          <DxcCheckbox
            labelPosition="after"
            label="Label after"
            margin={{ top: "xsmall" }}
          />
        </Mode>
        <Mode mode="dark" text="Disabled">
          <DxcCheckbox
            label="Disabled"
            disabled
            margin={{ top: "xsmall", left: "xsmall", right: "xsmall" }}
          />
          <DxcCheckbox
            label="Disabled Checked"
            checked
            disabled
            margin={{ top: "xsmall" }}
          />
        </Mode>
      </BackgroundColorProvider> */}
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div``;

export default Checkbox;
