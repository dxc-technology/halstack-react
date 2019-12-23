import { DxcButton, DxcDialog } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <DxcButton
        mode="basic"
        theme="light"
        label="Open Dialog"
        onClick={onClick}
      />
      <DxcDialog isVisible={visible}>
        <div style={{display:'flex', justifyContent: "center"}}>
          <DxcButton
            mode="basic"
            theme="light"
            label="Close Button"
            onClick={onClick}
          />
        </div>
      </DxcDialog>
    </div>
  );
}`;

const scope = {
  useState,
  DxcButton,
  DxcDialog
};

export default { code, scope };
