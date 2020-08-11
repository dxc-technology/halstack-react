import { DxcButton } from "@dxc-technology/halstack-react";

const code = `() => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <DxcButton
      mode="primary"
      label="Primary Button"
      onClick={onClick}
      margin="medium"
      size="large"
    />
  );
}`;

const scope = {
  DxcButton
};

export default { code, scope };
