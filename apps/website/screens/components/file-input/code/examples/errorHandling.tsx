import { DxcFileInput, DxcInset } from "@dxc-technology/halstack-react";
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
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFileInput
        label="Select your files"
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
  useState,
};

export default { code, scope };
