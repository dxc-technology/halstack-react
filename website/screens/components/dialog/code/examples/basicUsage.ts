import {
  DxcDialog,
  DxcButton,
  DxcInset,
  DxcRow,
} from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const handleClick = () => {
    setDialogVisible(!isDialogVisible);
  };

  return (
    <DxcInset space="2rem">
      <DxcButton label="Enter your data" onClick={handleClick}></DxcButton>
      {isDialogVisible && (
        <DxcDialog onCloseClick={handleClick}>
          Please enter your personal information.
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
  DxcRow,
};

export default { code, scope };
