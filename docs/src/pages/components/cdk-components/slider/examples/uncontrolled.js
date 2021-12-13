import { DxcSlider } from "@dxc-technology/halstack-react";

const code = `() => {
  const onChange = newValue => {
    console.log(newValue);
  };

  const labelFormat = (value) => {
    return \`\${value}°C\`;
  };

  return (
    <DxcSlider
      label="Select a value"
      helperText="Helper text"
      minValue={0}
      maxValue={100}
      showLimitsValues={true}
      name="input"
      step={1}
      onChange={onChange}
      labelFormatCallback={labelFormat}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcSlider,
};

export default { code, scope };
