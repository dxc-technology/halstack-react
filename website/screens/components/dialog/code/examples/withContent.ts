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
    <DxcInset space="large">
      <DxcButton label="Enter your data" onClick={handleClick}></DxcButton>
      {isDialogVisible && (
        <DxcDialog onCloseClick={handleClick}>
          <DxcInset top="medium" bottom="medium">
            <DxcRow gutter="large">
              <DxcTextInput label="Name" />
              <DxcTextInput label="Last name" />
            </DxcRow>
          </DxcInset>
          <DxcInset bottom="xxlarge">
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
