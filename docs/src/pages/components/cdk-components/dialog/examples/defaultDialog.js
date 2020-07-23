import { DxcButton, DxcDialog } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const handleClick = () => {
    setDialogVisible(!isDialogVisible);
  };

  return (
    <div>
      <DxcButton label="Open Dialog" onClick={handleClick}></DxcButton>
      {isDialogVisible && (
        <DxcDialog overlay={false} isCloseVisible={true} onCloseClick={handleClick}>
          Close Icon
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
