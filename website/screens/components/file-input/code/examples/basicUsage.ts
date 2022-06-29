import { DxcFileInput, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [files, setFiles] = useState([]);
  const callbackFile = (files) => {
    setFiles(files);
  };

  return (
    <DxcInset space="2rem">
      <DxcFileInput label="Select your files" value={files} callbackFile={callbackFile} />
    </DxcInset>
  );
}`;

const scope = {
  DxcFileInput,
  DxcInset,
  useState,
};

export default { code, scope };
