import React from "react";
import styled from "styled-components";
import { DxcSpinner } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <Mode text="Undeterminate default">
        <DxcSpinner label="Loading..." margin="small"/>
      </Mode>
      <Mode text="Determinate default">
        <DxcSpinner label="Loading..." showValue value={50} />
      </Mode>
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div``;

export default Spinner;
