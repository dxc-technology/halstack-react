import React from "react";
import { DxcSpinner, HalstackProvider } from "@dxc-technology/halstack-react";

const colors = {
  spinner: {
    accentColor: "black",
    baseColor: "#FABADA",
  },
};

function App() {
  return (
    <div>
      <div className="test-case" id="light-theme">
        <h4>Light theme</h4>
        <DxcSpinner showValue value={66} />
      </div>

      <div className="test-case" id="label-spinner">
        <h4>With label </h4>
        <DxcSpinner label="loading" showValue value={50} />
      </div>

      <div>
        <h4>Modes</h4>
        <div className="test-case" id="large-mode">
          <h5>Large</h5>
          <DxcSpinner mode="large" showValue value={66} />
        </div>

        <div className="test-case" id="small-mode">
          <h5>Small</h5>
          <DxcSpinner mode="small" showValue value={66} />
        </div>
      </div>

      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <h5>xxsmall margin</h5>
          <DxcSpinner margin="xxsmall" showValue value={66} />
        </div>
        <div className="test-case" id="xsmall-margin">
          <h5>xsmall margin</h5>
          <DxcSpinner margin="xsmall" showValue value={66} />
        </div>
        <div className="test-case" id="small-margin">
          <h5>Small margin</h5>
          <DxcSpinner margin="small" showValue value={66} />
        </div>
        <div className="test-case" id="medium-margin">
          <h5>Medium margin</h5>
          <DxcSpinner margin="medium" showValue value={66} />
        </div>
        <div className="test-case" id="large-margin">
          <h5>Large margin</h5>
          <DxcSpinner margin="large" showValue value={66} />
        </div>
        <div className="test-case" id="xlarge-margin">
          <h5>xlarge margin</h5>
          <DxcSpinner margin="xlarge" showValue value={66} />
        </div>
        <div className="test-case" id="xxlarge-margin">
          <h5>xxlarge margin</h5>
          <DxcSpinner margin="xxlarge" showValue value={66} />
        </div>
      </div>
      <div className="test-case" id="custom-colors">
        <h4>Custom Spinner</h4>
        <HalstackProvider theme={colors}>
          <DxcSpinner showValue value={66} />
        </HalstackProvider>
      </div>
    </div>
  );
}

export default App;
