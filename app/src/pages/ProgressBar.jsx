import React from "react";
import { DxcProgressBar, ThemeContext } from "@dxc-technology/halstack-react";

const colors = {
  progressBar: {
    trackLine: "red",
    totalLine: "#FABADA",
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

      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <h5>xxsmall margin</h5>
          <DxcProgressBar
            label="Loading..."
            theme="light"
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
            theme="light"
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
            theme="light"
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
            theme="light"
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
            theme="light"
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
            theme="light"
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
            theme="light"
            overlay={false}
            showValue
            value={100}
            margin="xxlarge"
          />
        </div>
      </div>
      <div className="test-case" id="custom-colors">
        <h4>Custom Progress Bar</h4>
        <ThemeContext.Provider value={colors}>
          <DxcProgressBar
            label="Loading..."
            overlay={false}
            showValue
            value={50}
          />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
