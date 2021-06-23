import React from "react";
import styled from "styled-components";
import { DxcProgressBar } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const ProgressBar = () => {
  return (
    <ProgressBarContainer>
      <Mode text="Undeterminate default">
        <Container>
          <DxcProgressBar
            label="Loading"
            overlay={false}
            margin={{ top: "xsmall", bottom: "xxsmall" }}
          />
        </Container>
      </Mode>
      <Mode text="Determinate default">
        <Container>
          <DxcProgressBar
            label="Loading"
            overlay={false}
            showValue
            value={45}
            margin={{ top: "xsmall", bottom: "xxsmall" }}
          />
        </Container>
      </Mode>
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div``;

const Container = styled.div`
  width: 100%;
`;

export default ProgressBar;
