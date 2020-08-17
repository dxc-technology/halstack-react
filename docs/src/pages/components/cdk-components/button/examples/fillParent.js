import { DxcButton } from "@dxc-technology/halstack-react";

const code = `() => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <DxcButton
      mode="primary"
      label="Fill Parent Button"
      onClick={onClick}
      margin="medium"
      size="fillParent"
    />
  );
}`;

const scope = {
  DxcButton
};

export default { code, scope };
