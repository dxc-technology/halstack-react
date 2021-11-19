import React from "react";
import styled from "styled-components";
import {
  DxcNewDate,
  DxcHeading,
  BackgroundColorProvider,
} from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const NewDate = () => {
  return (
    <NewDateContainer>
      <DxcHeading
        text="Light Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xxsmall" }}
      />
      <Mode text="Default">
        <DxcNewDate
          label="Format"
          helperText="Example of helper text"
          format="MM/dd/yyyy"
          placeholder
          margin={{ top: "xsmall" }}
          clearable
        />
      </Mode>
      <DxcHeading
        text="Dark Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xsmall" }}
      />
      <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Default">
          <DxcNewDate
            label="Format"
            helperText="Example of helper text"
            format="MM/dd/yyyy"
            placeholder
            margin={{ top: "xsmall" }}
            clearable
          />
        </Mode>
      </BackgroundColorProvider>
    </NewDateContainer>
  );
};

const NewDateContainer = styled.div``;

export default NewDate;
