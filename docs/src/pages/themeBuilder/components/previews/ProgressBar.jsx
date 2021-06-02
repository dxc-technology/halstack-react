import React from "react";
import styled from "styled-components";
import { DxcProgressBar } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const ProgressBar = () => {
  return (
    <ProgressBarContainer>
      <Mode text="Undeterminate default">
        <DxcProgressBar
          label="Loading"
          overlay={false}
          margin={{ top: "xsmall", bottom: "xxsmall" }}
        />
      </Mode>
      <Mode text="Determinate default">
        <DxcProgressBar
          label="Loading"
          overlay={false}
          showValue
          value={45}
          margin={{ top: "xsmall", bottom: "xxsmall" }}
        />
      </Mode>
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div``;

export default ProgressBar;
