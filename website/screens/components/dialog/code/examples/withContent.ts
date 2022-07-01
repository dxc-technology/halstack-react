import {
  DxcDialog,
  DxcButton,
  DxcTextInput,
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
          <DxcInset top="1.5rem" bottom="1.5rem">
            <DxcRow gutter="large">
              <DxcTextInput label="Name" />
              <DxcTextInput label="Last name" />
            </DxcRow>
          </DxcInset>
          <DxcInset bottom="4rem">
              <DxcTextInput label="Address" size="fillParent" />
          </DxcInset>
          <DxcRow justify="center">
            <DxcButton label="Add client" onClick={handleClick} />
            <DxcButton label="Cancel" onClick={handleClick} mode="text" />
          </DxcRow>
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
  DxcRow,
};

export default { code, scope };
