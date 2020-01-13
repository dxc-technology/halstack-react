import React from "react";
import { DxcSlider } from "@diaas/dxc-react-cdk";

function App() {
  const onChange = newValue => {
    console.log("onChange " + newValue);
  };
  const onDragEnd = newValue => {
    console.log("onDragEnd " + newValue);
  };
  const onChangeInput = newValue => {
    console.log("onChangeInput " + newValue);
  };

  return (
    <div>
      <h3>Light</h3>
      <div>
        <p>Slider</p>
        <div>
          <DxcSlider
            minValue={0}
            maxValue={100}
            showLimitsValues={true}
            showInput={false}
            name="input"
            disabled={false}
            required={true}
            theme="light"
            step={1}
            marks={false}
            margin={{ left: "medium" }}
          />
        </div>
        <div>
          <p>Slider with marks</p>
          <DxcSlider
            minValue={0}
            maxValue={50}
            showLimitsValues={true}
            showInput={false}
            name="input"
            disabled={false}
            required={true}
            theme="light"
            step={1}
            marks={false}
            onChange={onChange}
            onDragEnd={onDragEnd}
            onChangeInput={onChangeInput}
            margin="medium"
          />
        </div>
        <div>
          <p>Slider without limit values</p>
          <DxcSlider
            minValue={0}
            maxValue={50}
            showLimitsValues={false}
            showInput={false}
            name="input"
            disabled={false}
            required={true}
            theme="light"
            step={10}
            marks={false}
            onChange={onChange}
            onDragEnd={onDragEnd}
            onChangeInput={onChangeInput}
            margin={{ left: "medium", right: "xxlarge" }}
          />
        </div>
        <div>
          <p>Slider with limits, input and marks</p>
          <DxcSlider
            minValue={0}
            maxValue={50}
            showLimitsValues={true}
            showInput={true}
            name="input"
            disabled={false}
            required={true}
            theme="light"
            step={5}
            marks={true}
            onChange={onChange}
            onDragEnd={onDragEnd}
            onChangeInput={onChangeInput}
            margin={{ left: "medium" }}
          />
        </div>
        <div>
          <p>Slider with limits, input, marks and disabled</p>
          <DxcSlider
            minValue={0}
            maxValue={50}
            showLimitsValues={true}
            showInput={true}
            name="input"
            disabled={true}
            required={true}
            theme="light"
            step={5}
            marks={true}
            onChange={onChange}
            onDragEnd={onDragEnd}
            onChangeInput={onChangeInput}
            margin="medium"
          />
        </div>
      </div>
      <h3>Dark</h3>
      <div style={{ background: "black" }}>
        <p style={{ color: "white" }}>Slider</p>
        <div>
          <DxcSlider
            minValue={0}
            maxValue={100}
            showLimitsValues={true}
            showInput={false}
            name="input"
            disabled={false}
            required={true}
            theme="dark"
            step={1}
            marks={false}
            onChange={onChange}
            onDragEnd={onDragEnd}
            onChangeInput={onChangeInput}
            margin="medium"
          />
        </div>
        <div>
          <p style={{ color: "white" }}>Slider with marks</p>
          <DxcSlider
            minValue={0}
            maxValue={50}
            showLimitsValues={true}
            showInput={false}
            name="input"
            disabled={false}
            required={true}
            theme="dark"
            step={10}
            marks={true}
            onChange={onChange}
            onDragEnd={onDragEnd}
            onChangeInput={onChangeInput}
            margin="medium"
          />
        </div>
        <div>
          <p style={{ color: "white" }}>Slider without limit values</p>
          <DxcSlider
            minValue={0}
            maxValue={50}
            showLimitsValues={false}
            showInput={false}
            name="input"
            disabled={false}
            required={true}
            theme="dark"
            step={10}
            marks={false}
            onChange={onChange}
            onDragEnd={onDragEnd}
            onChangeInput={onChangeInput}
            margin="medium"
          />
        </div>
        <div>
          <p style={{ color: "white" }}>Slider with limits, input and marks</p>
          <DxcSlider
            minValue={0}
            maxValue={50}
            showLimitsValues={true}
            showInput={true}
            name="input"
            disabled={false}
            required={true}
            theme="dark"
            step={5}
            marks={true}
            onChange={onChange}
            onDragEnd={onDragEnd}
            onChangeInput={onChangeInput}
            margin="medium"
          />
        </div>
        <div>
          <p style={{ color: "white" }}>
            Slider with limits, input, marks and disabled
          </p>
          <DxcSlider
            minValue={0}
            maxValue={50}
            showLimitsValues={true}
            showInput={true}
            name="input"
            disabled={true}
            required={true}
            theme="dark"
            step={5}
            marks={true}
            onChange={onChange}
            onDragEnd={onDragEnd}
            onChangeInput={onChangeInput}
            margin="medium"
          />
        </div>
      </div>
      <p>Slider</p>
      <div>
        <DxcSlider
          minValue={0}
          maxValue={100}
          showLimitsValues={true}
          showInput={false}
          name="input"
          disabled={false}
          required={true}
          theme="light"
          step={1}
          marks={false}
          margin={{ left: "medium" }}
          size="medium"
        />
      </div>
      <div>
        <p>Slider with marks</p>
        <DxcSlider
          minValue={0}
          maxValue={50}
          showLimitsValues={true}
          showInput={false}
          name="input"
          disabled={false}
          required={true}
          theme="light"
          step={1}
          marks={false}
          onChange={onChange}
          onDragEnd={onDragEnd}
          onChangeInput={onChangeInput}
          margin="medium"
          size="large"
        />
      </div>
      <div>
        <p>Slider with limits, input and marks</p>
        <DxcSlider
          minValue={0}
          maxValue={50}
          showLimitsValues={true}
          showInput={true}
          name="input"
          disabled={false}
          required={true}
          theme="light"
          step={5}
          marks={true}
          onChange={onChange}
          onDragEnd={onDragEnd}
          onChangeInput={onChangeInput}
          margin={{ left: "medium" }}
          size="large"
        />
      </div>
      <div>
        <p>Slider without limit values</p>
        <DxcSlider
          minValue={0}
          maxValue={50}
          showLimitsValues={false}
          showInput={false}
          name="input"
          disabled={false}
          required={true}
          theme="light"
          step={10}
          marks={false}
          onChange={onChange}
          onDragEnd={onDragEnd}
          onChangeInput={onChangeInput}
          margin={{ left: "medium", right: "xxlarge" }}
          size="fillParent"
        />
      </div>
    </div>
  );
}

export default App;
