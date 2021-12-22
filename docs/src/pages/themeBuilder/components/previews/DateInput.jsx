import React from "react";
import styled from "styled-components";
import { DxcDateInput, DxcHeading } from "@dxc-technology/halstack-react";
import Mode from "../Mode";

const DateInput = () => {
  return (
    <DateInputContainer>
      <DxcHeading
        text="Light Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xxsmall" }}
      />
      <Mode text="Default">
        <DxcDateInput
          label="Format"
          helperText="Example of helper text"
          format="MM/dd/yyyy"
          placeholder
          margin={{ top: "xsmall" }}
          clearable
        />
      </Mode>
      {/* <DxcHeading
        text="Dark Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xsmall" }}
      />
      <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Default">
          <DxcDateInput
            label="Format"
            helperText="Example of helper text"
            format="MM/dd/yyyy"
            placeholder
            margin={{ top: "xsmall" }}
            clearable
          />
        </Mode>
      </BackgroundColorProvider> */}
    </DateInputContainer>
  );
};

const DateInputContainer = styled.div``;

export default DateInput;
