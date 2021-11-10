import { DxcFileInput } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const filesExamples = [
    {
      file: {
        lastModified: 1625153395476,
        lastModifiedDate:
          "Thu Jul 01 2021 17:29:55 GMT+0200 (Central European Summer Time)",
        name: "create-2.png",
        size: 76251,
        type: "image/png",
        webkitRelativePath: "",
      },
    },
    {
      error: "Error message",
      file: {
        lastModified: 1625153334576,
        lastModifiedDate:
          "Thu Jul 01 2021 17:29:55 GMT+0200 (Central European Summer Time)",
        name: "file.pdf",
        size: 76251,
        type: ".pdf",
        webkitRelativePath: "",
      },
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
