import React from "react";
import { DxcSlider, ThemeContext } from "@dxc-technology/halstack-react";

const colors = {
  slider: {
    color: "red",
  },
};

function App() {
  const onChange = (newValue) => {
    console.log("onChange " + newValue);
  };
  const onDragEnd = (newValue) => {
    console.log("onDragEnd " + newValue);
  };
  const onChangeInput = (newValue) => {
    console.log("onChangeInput " + newValue);
  };

  return (
    <div>
      <div className="test-case" id="light-theme">
        <h4>Light theme</h4>
        <DxcSlider
          minValue={0}
          maxValue={100}
          showLimitsValues={true}
          showInput={false}
          name="input"
          step={1}
          margin="medium"
        />
      </div>
      <div className="test-case" id="discrete-slider">
        <h4>Discrete Slider</h4>
        <DxcSlider
          minValue={0}
          maxValue={50}
          showLimitsValues={true}
          name="input"
          step={5}
          marks={true}
          onChange={onChange}
          margin="medium"
        />
      </div>
      <div className="test-case" id="continuous-slider">
        <h4>Continuous Slider</h4>
        <DxcSlider
          minValue={0}
          maxValue={100}
          showLimitsValues={true}
          name="input"
          step={1}
          onChange={onChange}
          margin="medium"
        />
      </div>
      <div className="test-case" id="no-limits-slider">
        <h4>Slider without limit values</h4>
        <DxcSlider
          minValue={0}
          maxValue={100}
          name="input"
          step={1}
          onChange={onChange}
          margin="medium"
        />
      </div>
      <div className="test-case" id="input-slider">
        <h4>Slider with input</h4>
        <DxcSlider
          minValue={0}
          maxValue={50}
          showLimitsValues={true}
          showInput={true}
          name="input"
          step={5}
          value={25}
          marks={true}
          onChange={onChange}
          onDragEnd={onDragEnd}
          onChangeInput={onChangeInput}
          margin="medium"
        />
      </div>
      <div className="test-case" id="disabled-slider">
        <h4>Disabled slider</h4>
        <DxcSlider
          minValue={0}
          maxValue={100}
          showLimitsValues={true}
          name="input"
          onChange={onChange}
          disabled={true}
          margin="medium"
        />
      </div>
      <div>
        <h4>Sizes</h4>
        <div className="test-case" id="medium-size-slider">
          <h5>Medium size</h5>
          <DxcSlider
            minValue={0}
            maxValue={100}
            showLimitsValues={true}
            showInput={false}
            name="input"
            step={1}
            size="medium"
          />
        </div>
        <div className="test-case" id="large-size-slider">
          <h5>Large size</h5>
          <DxcSlider
            minValue={0}
            maxValue={100}
            showLimitsValues={true}
            showInput={false}
            name="input"
            step={1}
            size="large"
          />
        </div>
        <div className="test-case" id="fillParent-size-slider">
          <h5>FillParent size</h5>
          <DxcSlider
            minValue={0}
            maxValue={100}
            showLimitsValues={true}
            showInput={false}
            name="input"
            step={1}
            size="fillParent"
          />
        </div>
      </div>
      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <h5>xxsmall margin</h5>
          <DxcSlider
            minValue={0}
            maxValue={100}
            showLimitsValues={true}
            showInput={false}
            name="input"
            step={1}
            margin="xxsmall"
          />
        </div>
        <div className="test-case" id="xsmall-margin">
          <h5>xsmall margin</h5>
          <DxcSlider
            minValue={0}
            maxValue={100}
            showLimitsValues={true}
            showInput={false}
            name="input"
            step={1}
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="small-margin">
          <h5>small margin</h5>
          <DxcSlider
            minValue={0}
            maxValue={100}
            showLimitsValues={true}
            showInput={false}
            name="input"
            step={1}
            margin="small"
          />
        </div>
        <div className="test-case" id="medium-margin">
          <h5>Medium margin</h5>
          <DxcSlider
            minValue={0}
            maxValue={100}
            showLimitsValues={true}
            showInput={false}
            name="input"
            step={1}
            margin="medium"
          />
        </div>
        <div className="test-case" id="large-margin">
          <h5>Large margin</h5>
          <DxcSlider
            minValue={0}
            maxValue={100}
            showLimitsValues={true}
            showInput={false}
            name="input"
            step={1}
            margin="large"
          />
        </div>
        <div className="test-case" id="xlarge-margin">
          <h5>xlarge margin</h5>
          <DxcSlider
            minValue={0}
            maxValue={100}
            showLimitsValues={true}
            showInput={false}
            name="input"
            step={1}
            margin="xlarge"
          />
        </div>
        <div className="test-case" id="xxlarge-margin">
          <h5>xxlarge margin</h5>
          <DxcSlider
            minValue={0}
            maxValue={100}
            showLimitsValues={true}
            showInput={false}
            name="input"
            step={1}
            margin="xxlarge"
          />
        </div>
      </div>
      <div className="test-case" id="custom-colors">
        <h4>Custom Slider</h4>
        <ThemeContext.Provider value={colors}>
          <DxcSlider
            minValue={0}
            maxValue={100}
            showLimitsValues={true}
            showInput={false}
            name="input"
            step={1}
            margin="medium"
          />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
