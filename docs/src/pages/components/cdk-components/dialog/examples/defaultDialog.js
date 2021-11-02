import {
  DxcButton,
  DxcDialog,
  DxcHeading,
} from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const handleClick = () => {
    setDialogVisible(!isDialogVisible);
  };

  const ErrorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="red">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
  );
  
  const Content = () => (
    <>
      <div style={{ display: "flex", flexDirection: "row", alignContent: "center" }}>
        <span style={{ display: "flex", flexWrap: "wrap", alignContent: "center", marginRight: "10px" }}>
          <ErrorIcon />
        </span>  
        <DxcHeading level={5} text="Delete document" />
      </div>
      <p>
        Are you sure you want to delete the 3 selected documents?
      </p>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <DxcButton label="Cancel" onClick={handleClick} mode="text" margin={{ right: "xxsmall" }}></DxcButton>
        <DxcButton label="Delete" onClick={handleClick}></DxcButton>
      </div>
    </>
  );

  return (
    <div>
      <DxcButton label="Delete" onClick={handleClick}></DxcButton>
      {isDialogVisible && (
        <DxcDialog onCloseClick={handleClick}>
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
};

export default { code, scope };
