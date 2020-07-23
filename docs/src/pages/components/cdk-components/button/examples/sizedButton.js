import { DxcButton } from "@dxc-technology/halstack-react";

const code = `() => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <DxcButton
      mode="basic"
      label="Basic Button"
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
