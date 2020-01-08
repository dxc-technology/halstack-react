import { DxcButton } from "@diaas/dxc-react-cdk";

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
