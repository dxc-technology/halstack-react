import React, { useState } from "react";
import styled from "styled-components";
import { DxcSlider, DxcHeading } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import { BackgroundColorProvider } from "@dxc-technology/halstack-react/dist/BackgroundColorContext";

const Slider = () => {
  const [value, changeValue] = useState(0);
  const onChange = (newValue) => {
    changeValue(newValue);
  };
  const onChangeInput = (newValue) => {
    changeValue(newValue);
  };

  return (
    <SliderContainer>
      <DxcHeading
        text="Light Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xxsmall" }}
      />
      <Mode text="Default">
        <DxcSlider
          minValue={0}
          maxValue={100}
          showLimitsValues={true}
          name="input"
          step={1}
          margin="medium"
        />
      </Mode>
      <Mode text="Disabled">
        <DxcSlider
          minValue={0}
          maxValue={100}
          showLimitsValues={true}
          disabled
          marks={true}
          name="input"
          step={10}
          margin="medium"
        />
      </Mode>
      <Mode text="With marks">
        <DxcSlider
          minValue={0}
          maxValue={100}
          showLimitsValues={true}
          name="input"
          step={5}
          marks={true}
          margin="medium"
        />
      </Mode>
      <Mode text="With input">
        <DxcSlider
          minValue={0}
          maxValue={50}
          showLimitsValues={true}
          value={value}
          showInput={true}
          name="input"
          step={5}
          marks={true}
          onChange={onChange}
          onChangeInput={onChangeInput}
          margin="medium"
        />
      </Mode>
      <DxcHeading
        text="Dark Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xxsmall" }}
      />
      <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Default">
          <DxcSlider
            minValue={0}
            maxValue={100}
            showLimitsValues={true}
            name="input"
            step={1}
            margin="medium"
          />
        </Mode>
        <Mode mode="dark" text="Disabled">
          <DxcSlider
            minValue={0}
            maxValue={100}
            showLimitsValues={true}
            disabled
            marks={true}
            name="input"
            step={10}
            margin="medium"
          />
        </Mode>
        <Mode mode="dark" text="With marks">
          <DxcSlider
            minValue={0}
            maxValue={100}
            showLimitsValues={true}
            name="input"
            step={5}
            marks={true}
            margin="medium"
          />
        </Mode>
        <Mode mode="dark" text="With input">
          <DxcSlider
            minValue={0}
            maxValue={50}
            showLimitsValues={true}
            value={value}
            showInput={true}
            name="input"
            step={5}
            marks={true}
            onChange={onChange}
            onChangeInput={onChangeInput}
            margin="medium"
          />
        </Mode>
      </BackgroundColorProvider>
    </SliderContainer>
  );
};

const SliderContainer = styled.div``;

export default Slider;
