import { DxcDialog, DxcButton, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const handleClick = () => {
    setDialogVisible(!isDialogVisible);
  };
  
  return (
    <DxcInset space="2rem">
      <DxcButton label="Enter your data" onClick={handleClick} />
      {isDialogVisible && (
        <DxcDialog onBackgroundClick={handleClick} isCloseVisible={false}>
          <DxcInset space="1.5rem">
            Please enter your personal information.
          </DxcInset>
        </DxcDialog>
      )}
    </DxcInset>
  );
}`;

const scope = {
  useState,
  DxcButton,
  DxcDialog,
  DxcInset,
};

export default { code, scope };
