import React from "react";
import styled from "styled-components";
import { DxcDate } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const Date = () => {
  return (
    <DateContainer>
      <Mode text="Default">
        <DxcDate
          label="Date of birth"
          format="dd-MM-yyyy"
          assistiveText="assistive text"
          margin="medium"
        />
      </Mode>
    </DateContainer>
  );
};

const DateContainer = styled.div``;

export default Date;
