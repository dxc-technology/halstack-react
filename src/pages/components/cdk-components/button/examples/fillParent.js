import { DxcButton } from "@diaas/dxc-react-cdk";

const code = `() => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <DxcButton
      mode="basic"
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
