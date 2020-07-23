import { DxcSlider } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(0);
  const onChange = newValue => {
    changeValue(newValue);
  };

  return (
    <div
      style={{ background: "#000000", width: "100%", display: "inline-block" }}
    >
      <DxcSlider
        minValue={0}
        maxValue={100}
        showLimitsValues={true}
        value={value}
        name="input"
        theme="dark"
        step={1}
        onChange={onChange}
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcSlider,
  useState
};

export default { code, scope };
