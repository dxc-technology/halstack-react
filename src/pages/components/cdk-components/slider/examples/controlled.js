import { DxcSlider } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(0);

  return (
    <DxcSlider
      minValue={0}
      maxValue={100}
      showLimitsValues={true}
      name="input"
      step={1}
    />
  );
}`;

const scope = {
  DxcSlider,
  useState
};

export default { code, scope };
