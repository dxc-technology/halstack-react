import { DxcButton, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <DxcInset space="large">
      <DxcButton label="Button" onClick={onClick} />
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcInset,
};

export default { code, scope };
