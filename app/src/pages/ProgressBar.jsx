import React from "react";
import styled from "styled-components";
import {
  DxcProgressBar,
  ThemeProvider,
  BackgroundColorProvider,
} from "@dxc-technology/halstack-react";

const colors = {
  progressBar: {
    accentColor: "#006bf6",
    baseColor: "#fabada",
  },
};

function App() {
  return (
    <div>
      <div className="test-case" id="light-theme">
        <h4>Light theme</h4>
        <DxcProgressBar
          label="Loading..."
          overlay={false}
          showValue
          value={50}
        />
      </div>

      <div className="test-case" id="without-label">
        <h4>Without label</h4>
        <DxcProgressBar overlay={false} showValue value={50} />
      </div>

      <div className="test-case" id="with-helperText">
        <h4>With helper text</h4>
        <DxcProgressBar
          label="Loading..."
          helperText="Helper text"
          overlay={false}
          showValue
          value={50}
        />
      </div>

      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <h5>xxsmall margin</h5>
          <DxcProgressBar
            label="Loading..."
            overlay={false}
            showValue
            value={20}
            margin="xxsmall"
          />
        </div>
        <div className="test-case" id="xsmall-margin">
          <h5>xsmall margin</h5>
          <DxcProgressBar
            label="Loading..."
            overlay={false}
            showValue
            value={35}
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="small-margin">
          <h5>Small margin</h5>
          <DxcProgressBar
            label="Loading..."
            overlay={false}
            showValue
            value={45}
            margin="small"
          />
        </div>
        <div className="test-case" id="medium-margin">
          <h5>Medium margin</h5>
          <DxcProgressBar
            label="Loading..."
            overlay={false}
            showValue
            value={60}
            margin="medium"
          />
        </div>
        <div className="test-case" id="large-margin">
          <h5>Large margin</h5>
          <DxcProgressBar
            label="Loading..."
            overlay={false}
            showValue
            value={75}
            margin="large"
          />
        </div>
        <div className="test-case" id="xlarge-margin">
          <h5>xlarge margin</h5>
          <DxcProgressBar
            label="Loading..."
            overlay={false}
            showValue
            value={85}
            margin="xlarge"
          />
        </div>
        <div className="test-case" id="xxlarge-margin">
          <h5>xxlarge margin</h5>
          <DxcProgressBar
            label="Loading..."
            overlay={false}
            showValue
            value={100}
            margin="xxlarge"
          />
        </div>
      </div>
      <div className="test-case" id="custom-colors">
        <h4>Custom Progress Bar</h4>
        <ThemeProvider theme={colors}>
          <DxcProgressBar
            label="Loading..."
            overlay={false}
            showValue
            value={50}
          />
        </ThemeProvider>
      </div>
      <h4>Dark mode</h4>
      <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Undeterminate default">
          <DxcProgressBar
            label="Loading"
            overlay={false}
            margin={{ top: "xsmall", bottom: "xxsmall" }}
          />
        </Mode>
        <Mode mode="dark" text="Determinate default">
          <DxcProgressBar
            label="Loading"
            overlay={false}
            showValue
            value={45}
            margin={{ top: "xsmall", bottom: "xxsmall" }}
          />
        </Mode>
      </BackgroundColorProvider>
    </div>
  );
}

const Mode = ({ mode, children }) => {
  return (
    <ModeContainer mode={mode}>
      <PreviewsContainer>{children}</PreviewsContainer>
    </ModeContainer>
  );
};

const ModeContainer = styled.div`
  background-color: ${(props) =>
    props.mode === "dark" ? "#000000" : "transparent"};
  display: flex;
  flex-flow: row wrap;
`;

const PreviewsContainer = styled.div`
  flex: 100%;
`;
export default App;
