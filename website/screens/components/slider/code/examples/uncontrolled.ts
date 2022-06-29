import { DxcSlider, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const onChange = (newValue) => {
    console.log(newValue);
  };

  return (
    <DxcInset space="2rem">
      <DxcSlider label="Select a value" defaultValue={40} onChange={onChange} />
    </DxcInset>
  );
}`;

const scope = {
  DxcSlider,
  DxcInset,
};

export default { code, scope };
