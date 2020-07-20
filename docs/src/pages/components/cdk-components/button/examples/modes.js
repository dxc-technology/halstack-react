import { DxcButton } from "@diaas/dxc-react-cdk";

const code = `() => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <div>
      <DxcButton
        mode="basic"
        label="Basic Button"
        onClick={onClick}
        margin="medium"
      />
      <DxcButton
        mode="raised"
        label="Raised Button"
        onClick={onClick}
        margin="medium"
      />
      <DxcButton
        mode="flat"
        label="Flat Button"
        onClick={onClick}
        margin="medium"
      />
      <DxcButton
        mode="outlined"
        label="Outlined Button"
        onClick={onClick}
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcButton
};

export default { code, scope };
