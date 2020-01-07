import { DxcButton, DxcDialog } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const onClick = () => {
    setDialogVisible(!isDialogVisible);
  };

  return (
    <div>
      <DxcButton label="Open Dialog" onClick={onClick}></DxcButton>
      {isDialogVisible && (
        <DxcDialog padding="medium" onBackgroundClick={onClick}>
          Click on Background
        </DxcDialog>
      )}
    </div>
  );
}`;

const scope = {
  useState,
  DxcButton,
  DxcDialog
};

export default { code, scope };
