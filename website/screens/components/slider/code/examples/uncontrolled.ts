import {
  DxcSlider,
  DxcInset,
  DxcFlex,
  DxcButton,
} from "@dxc-technology/halstack-react";
import { useRef } from "react";

const code = `() => {
  const sliderRef = useRef();

  const handleSubmit = () => {
    const slider = sliderRef.current.getElementsByTagName("input")[0];
    console.log(slider.value);
  };

  const onChange = (newValue) => {
    console.log(newValue);
  };

  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="2rem">
        <DxcSlider
          label="Select a value"
          defaultValue={40}
          onChange={onChange}
          ref={sliderRef}
        />
        <DxcButton label="Submit" type="submit" onClick={handleSubmit} />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcSlider,
  DxcInset,
  useRef,
  DxcFlex,
  DxcButton,
};

export default { code, scope };
