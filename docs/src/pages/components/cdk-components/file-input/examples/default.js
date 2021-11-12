import { DxcFileInput } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const file1 = new File(["file1"], "file1.png", { type: "image/png" });
  const file2 = new File(["file2"], "file2.txt", {
    type: "text/plain",
  });

  const filesExamples = [
    {
      file: file1,
    },
    {
      error: "Error message",
      file: file2,
    },
  ];

  const [finalFiles, setFinalFiles] = useState(filesExamples);

  const callbackFile = (files) => {
    const updatedFiles = files.map((file, index) => {
      if (index === 2) return { ...file, error: "Error message" };
      else return { ...file };
    });
    setFinalFiles(updatedFiles);
  };

  return (
    <DxcFileInput
      label="File Input"
      helperText="Please select files"
      margin="medium"
      callbackFile={callbackFile}
      value={finalFiles}
    />
  );
}`;

const scope = {
  DxcFileInput,
  useState,
};

export default { code, scope };
