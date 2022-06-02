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
    <DxcInset space="large">
      <DxcRow justify="center">
        <DxcButton label="Open Dialog" onClick={handleClick}></DxcButton>
        {isDialogVisible && (
          <DxcDialog onCloseClick={handleClick}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </DxcDialog>
        )}
      </DxcRow>
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
