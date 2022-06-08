import { DxcSwitch, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const onChange = (newValue) => {
    console.log(newValue);
  };

  return (
    <DxcInset space="large">
      <DxcSwitch label="Uncontrolled" onChange={onChange} />
    </DxcInset>
  );
}`;

const scope = {
  DxcSwitch,
  DxcInset,
};

export default { code, scope };
