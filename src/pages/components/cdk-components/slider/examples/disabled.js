import { DxcSlider } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const onChange = () => {};

  return (
    <DxcSlider
      minValue={0}
      maxValue={100}
      showLimitsValues={true}
      name="input"
      onChange={onChange}
      disabled={true}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcSlider,
  useState
};

export default { code, scope };
