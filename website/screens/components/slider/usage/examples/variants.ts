import { DxcSlider, DxcInset, DxcStack } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [discreteValue, changeDiscreteValue] = useState(40);
  const onChangeDiscrete = (newValue) => {
    changeDiscreteValue(newValue);
  };
  const [continuousValue, changeContinuousValue] = useState(45);
  const onChangeContinuous = (newValue) => {
    changeContinuousValue(newValue);
  };

  return (
    <DxcInset space="large">
      <DxcStack gutter="xxlarge">
        <DxcSlider
          label="Discrete"
          minValue={0}
          maxValue={100}
          showLimitsValues={true}
          value={discreteValue}
          step={10}
          marks={true}
          onChange={onChangeDiscrete}
        />
        <DxcSlider
          label="Continuous"
          minValue={0}
          maxValue={100}
          showLimitsValues={true}
          value={continuousValue}
          onChange={onChangeContinuous}
        />
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcSlider,
  DxcInset,
  DxcStack,
  useState,
};

export default { code, scope };
