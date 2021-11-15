import { DxcFileInput } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [files, setFiles] = useState([]);

  const callbackFile = (files) => {
    const updatedFiles = files.map((file) => {
      if (file.error) return { ...file, error: "Please select a file with valid size." };
      return { ...file };
    });
    setFiles(updatedFiles);
  };

  return (
    <DxcFileInput
      label="File Input"
      helperText="Please select files"
      value={files}
      callbackFile={callbackFile}
      minSize={100000}
      maxSize={200000}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcFileInput,
  useState,
};

export default { code, scope };
