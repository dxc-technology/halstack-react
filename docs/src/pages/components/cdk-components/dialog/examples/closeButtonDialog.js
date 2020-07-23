import { DxcButton, DxcDialog } from "@dxc-technology/halstack-react";
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
        <DxcDialog padding="medium">
            <DxcButton label="Close Dialog" onClick={onClick}></DxcButton>
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