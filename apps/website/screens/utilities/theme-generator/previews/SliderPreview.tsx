import React from "react";
import { DxcSlider } from "@dxc-technology/halstack-react";

const SliderPreview = () => {
  return <DxcSlider label="Volume" minValue={0} maxValue={100} defaultValue={50} />;
};

export default SliderPreview;
