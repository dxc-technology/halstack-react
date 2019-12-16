import React from "react";
import { DxcSlider } from "@diaas/dxc-react-cdk";

function App() {
  const onChange = () => {};
  const onDragEnd = () => {};
  const onChangeInput = () => {};

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
            onChange={onChange}
            onDragEnd={onDragEnd}
            onChangeInput={onChangeInput}
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
            step={10}
            marks={true}
            onChange={onChange}
            onDragEnd={onDragEnd}
            onChangeInput={onChangeInput}
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
          />
        </div>
      </div>
    </div>
  );
}

export default App;
