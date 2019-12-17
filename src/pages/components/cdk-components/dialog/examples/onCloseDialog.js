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
        label="Dialog Button"
        onClick={onClick}
      />
      <DxcDialog isVisible={visible} onClose={onClick}>
        <p>Click outside</p>
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
