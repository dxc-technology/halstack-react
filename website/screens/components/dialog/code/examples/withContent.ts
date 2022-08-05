import {
  DxcDialog,
  DxcButton,
  DxcTextInput,
  DxcInset,
  DxcFlex,
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
          <DxcInset top="1.5rem" bottom="1.5rem">
            <DxcFlex gap="2rem">
              <DxcTextInput label="Name" />
              <DxcTextInput label="Last name" />
            </DxcFlex>
          </DxcInset>
          <DxcInset bottom="4rem">
              <DxcTextInput label="Address" size="fillParent" />
          </DxcInset>
          <DxcFlex justifyContent="center">
            <DxcButton label="Add client" onClick={handleClick} />
            <DxcButton label="Cancel" onClick={handleClick} mode="text" />
          </DxcFlex>
        </DxcDialog>
      )}
    </DxcInset>
  );
}`;

const scope = {
  useState,
  DxcButton,
  DxcDialog,
  DxcTextInput,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
