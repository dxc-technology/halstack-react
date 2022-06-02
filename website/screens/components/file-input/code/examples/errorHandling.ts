import { DxcFileInput, DxcInset, DxcRow } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [files, setFiles] = useState([]);

  const callbackFile = (files) => {
    const updatedFiles = files.map((file) => {
      if (file.error)
        return { ...file, error: "Please select a file with valid size." };
      return { ...file };
    });
    setFiles(updatedFiles);
  };
  return (
    <DxcInset space="large">
      <DxcFileInput
        label="File"
        value={files}
        callbackFile={callbackFile}
        minSize={100000}
        maxSize={200000}
      />
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
