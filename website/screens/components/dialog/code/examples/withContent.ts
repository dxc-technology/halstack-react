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
      <DxcRow justify="center">
        <DxcButton label="Open Dialog" onClick={handleClick}></DxcButton>
        {isDialogVisible && (
          <DxcDialog onCloseClick={handleClick}>
            <DxcRow>
              <DxcTextInput
                label="Name"
                margin={{ bottom: "medium", right: "small" }}
              />
              <DxcTextInput label="Last name" margin={{ bottom: "medium" }} />
            </DxcRow>
            <DxcRow>
              <DxcTextInput
                label="Address"
                margin={{ bottom: "medium" }}
                size="fillParent"
              />
            </DxcRow>
            <DxcRow justify="center">
              <DxcButton label="Add client" onClick={handleClick} />
              <DxcButton label="Cancel" onClick={handleClick} mode="text" />
            </DxcRow>
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
  DxcTextInput,
  DxcInset,
  DxcRow,
};

export default { code, scope };
