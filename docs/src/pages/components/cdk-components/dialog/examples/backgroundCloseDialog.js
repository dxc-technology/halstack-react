import {
  DxcButton,
  DxcDialog,
  DxcHeading,
  DxcInput
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
      <p>
        <DxcInput
          label="Name"
        />
      </p>
      <p>
        <DxcInput
          label="Surname"
        />
      </p>
      <p>
        <DxcInput
          label="Address"
        />
      </p>
      <p style={{ textAlign: "right" }}>
        <DxcButton label="Cancel" onClick={handleClick} mode="text" margin={{ top: "medium", right: "xxsmall" }}></DxcButton>
        <DxcButton label="Add client" onClick={handleClick}></DxcButton>
      </p>
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
