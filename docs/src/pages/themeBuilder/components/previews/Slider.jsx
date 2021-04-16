import React from "react";
import styled from "styled-components";
import { DxcSlider } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const Slider = () => {
  
  return (
    <SliderContainer>
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
    </SliderContainer>
  );
};

const SliderContainer = styled.div``;

export default Slider;
