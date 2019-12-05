import { DxcButton } from "@diaas/dxc-react-cdk";

const code = `() => {
    const onClick = () => {};
  
    return (
      <div>
        <DxcButton
          mode="basic"
          theme="light"
          label="Basic Button"
          onClick={onClick}
        />
        <DxcButton
          mode="raised"
          theme="light"
          label="Raised Button"
          onClick={onClick}
        />
        <DxcButton
          mode="flat"
          theme="light"
          label="Flat Button"
          onClick={onClick}
        />
        <DxcButton
          mode="outlined"
          theme="light"
          label="Outlined Button"
          onClick={onClick}
        />
      </div>
    );
  }`;
  
const scope = {
  DxcButton
};

export default { code, scope };
