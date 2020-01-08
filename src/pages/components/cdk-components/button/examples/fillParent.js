import { DxcButton } from "@diaas/dxc-react-cdk";

const code = `() => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <div style={{ width: "250px" }}>
      <DxcButton
        mode="basic"
        label="Filled Parent Button"
        onClick={onClick}
        margin="medium"
        size="fillParent"
      />
    </div>
  );
}`;

const scope = {
  DxcButton
};

export default { code, scope };
