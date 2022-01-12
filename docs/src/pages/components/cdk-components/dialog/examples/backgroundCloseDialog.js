import {
  DxcButton,
  DxcDialog,
  DxcHeading,
  DxcInput,
} from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const handleClick = () => {
    setDialogVisible(!isDialogVisible);
  };

  const Content = () => (
    <> 
      <DxcHeading level={4} text="Account information" />
      <DxcHeading level={5} text="Client" margin={{top: "xsmall"}} />
      <div style={{ display: "flex", flexDirection: "column", padding: "35px" }}>
        <DxcInput
          label="Name"
          margin={{ bottom: "medium" }}
          size="large"
        />
        <DxcInput
          label="Last name"
          margin={{ bottom: "medium" }}
          size="large"
        />
        <DxcInput
          label="Address"
          margin={{ bottom: "medium" }}
          size="large"
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <DxcButton label="Cancel" onClick={handleClick} mode="text" margin={{ right: "xxsmall" }}></DxcButton>
        <DxcButton label="Add client" onClick={handleClick}></DxcButton>
      </div>
    </>
  );

  return (
    <div>
      <DxcButton label="See account information" onClick={handleClick}></DxcButton>
      {isDialogVisible && (
        <DxcDialog onBackgroundClick={handleClick} isCloseVisible={false}>
          <Content />
        </DxcDialog>
      )}
    </div>
  );
}`;

const scope = {
  useState,
  DxcButton,
  DxcDialog,
  DxcHeading,
  DxcInput,
};

export default { code, scope };
