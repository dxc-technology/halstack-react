import React from "react";
import styled from "styled-components";
import {
  DxcDate,
  BackgroundColorProvider,
  DxcHeading,
} from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const Date = () => {
  return (
    <DateContainer>
      <DxcHeading
        text="Light Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xxsmall" }}
      />
      <Mode text="Default">
        <DxcDate
          label="Date of birth"
          format="dd-MM-yyyy"
          assistiveText="assistive text"
          margin="medium"
        />
      </Mode>
      <DxcHeading
        text="Dark Mode"
        level={5}
        margin={{ top: "small", bottom: "xsmall" }}
      />
      <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Default">
          <DxcDate
            label="Date of birth"
            format="dd-MM-yyyy"
            assistiveText="assistive text"
            margin="medium"
          />
        </Mode>
      </BackgroundColorProvider>
    </DateContainer>
  );
};

const DateContainer = styled.div``;

export default Date;
