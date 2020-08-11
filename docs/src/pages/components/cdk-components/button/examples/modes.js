import { DxcButton } from "@dxc-technology/halstack-react";

const code = `() => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <div>
      <DxcButton
        mode="primary"
        label="Primary Button"
        onClick={onClick}
        margin="medium"
      />
      <DxcButton
        mode="secondary"
        label="Secondary Button"
        onClick={onClick}
        margin="medium"
      />
      <DxcButton
        mode="text"
        label="Text Button"
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
