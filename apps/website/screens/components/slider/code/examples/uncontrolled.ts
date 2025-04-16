import { DxcSlider, DxcInset, DxcFlex, DxcButton } from "@dxc-technology/halstack-react";
import { useRef } from "react";

const code = `() => {
  const sliderRef = useRef();

  const handleSubmit = () => {
    const slider = sliderRef.current.getElementsByTagName("input")[0];
    console.log(slider.value);
  };

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcSlider
          label="Select a value"
          defaultValue={40}
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
