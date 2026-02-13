import { useState } from "react";
import { DxcSlider, DxcFlex, DxcInset, DxcContainer, DxcHeading } from "@dxc-technology/halstack-react";

const SliderPreview = () => {
  const [value, changeValue] = useState(0);
  const onChange = (newValue: number) => {
    changeValue(newValue);
  };

  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Slider" />
      <DxcContainer width="60%">
        <DxcInset space="var(--spacing-padding-xl)">
          <DxcFlex gap="var(--spacing-padding-xl)" direction="column">
            <DxcSlider label="Volume" minValue={0} maxValue={100} defaultValue={50} />
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
            />
          </DxcFlex>
        </DxcInset>
      </DxcContainer>
    </DxcFlex>
  );
};

export default SliderPreview;
