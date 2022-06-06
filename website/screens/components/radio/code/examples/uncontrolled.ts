import { DxcRadio, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const onClick = (newValue) => {
    console.log(newValue);
  };

  return (
    <DxcInset space="large">
      <DxcRadio label="Uncontrolled" onClick={onClick} />
    </DxcInset>
  );
}`;

const scope = {
  DxcRadio,
  DxcInset,
};

export default { code, scope };
