import { DxcFileInput, DxcInset, DxcRow } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [files, setFiles] = useState([]);

  const callbackFile = (files) => {
    setFiles(files);
  };

  return (
    <DxcInset space="large">
      <DxcFileInput label="File" value={files} callbackFile={callbackFile} />
    </DxcInset>
  );
}`;

const scope = {
  DxcFileInput,
  DxcInset,
  DxcRow,
  useState,
};

export default { code, scope };
