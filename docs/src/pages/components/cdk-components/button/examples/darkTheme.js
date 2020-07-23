import { DxcButton } from "@dxc-technology/halstack-react";

const code = `() => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <div style={{ background: "#000000" }}>
      <DxcButton
        mode="basic"
        theme="dark"
        label="Basic Button"
        onClick={onClick}
        margin="medium"
      />
      <DxcButton
        mode="raised"
        theme="dark"
        label="Raised Button"
        onClick={onClick}
        margin="medium"
      />
      <DxcButton
        mode="flat"
        theme="dark"
        label="Flat Button"
        onClick={onClick}
        margin="medium"
      />
      <DxcButton
        mode="outlined"
        theme="dark"
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
