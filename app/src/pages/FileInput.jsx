import React, { useState } from "react";
import { DxcFileInput } from "@dxc-technology/halstack-react";

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

function App() {
  const [preloadedFiles, setPreloadedFiles] = useState(filesExamples);
  const [files, setFiles] = useState([]);

  const callbackFile = (files) => {
    const updatedFiles = files.map((file) => {
      let customError;
      if (file.error) {
        customError = "Custom error";
      }
      return { ...file, error: customError };
    });
    setFiles(updatedFiles);
    preloadedFiles.length > 0
      ? setPreloadedFiles(updatedFiles)
      : setFiles(updatedFiles);
  };

  return (
    <>
      <DxcFileInput
        label="Multiple controlled file"
        helperText="Please select files"
        margin="medium"
        callbackFile={callbackFile}
        value={files}
        multiple
      />
      <DxcFileInput
        label="Single controlled file"
        helperText="Please select files"
        margin="medium"
        callbackFile={callbackFile}
        value={files}
        multiple={false}
      />
      <DxcFileInput
        label="Multiple controlled file"
        helperText="Please select files"
        margin="medium"
        callbackFile={callbackFile}
        value={preloadedFiles}
      />
      <DxcFileInput
        label="Single controlled file"
        helperText="Please select files"
        margin="medium"
        callbackFile={callbackFile}
        value={preloadedFiles}
        multiple={false}
      />
      <DxcFileInput
        label="Multiple uncontrolled files"
        helperText="Please select files"
        margin="medium"
      />
      <DxcFileInput
        label="Single uncontrolled files"
        helperText="Please select files"
        multiple={false}
        margin="medium"
      />
      <DxcFileInput
        label="Min size and max size"
        helperText="Please select files"
        multiple={false}
        margin="medium"
        minSize={99999}
        maxSize={99900000}
      />
      <DxcFileInput
        label="Only .pdf allowed"
        helperText="Please select files"
        margin="medium"
        accept=".pdf"
      />
      <DxcFileInput
        label="Disabled file"
        helperText="Please select files"
        disabled
        margin="medium"
      />
      <DxcFileInput
        label="Multiple controlled filedrop"
        helperText="Please select files"
        mode="filedrop"
        callbackFile={callbackFile}
        value={files}
        margin="medium"
      />
      <DxcFileInput
        label="Single controlled filedrop"
        helperText="Please select files"
        mode="filedrop"
        callbackFile={callbackFile}
        value={files}
        multiple={false}
        margin="medium"
      />
      <DxcFileInput
        label="Multiple controlled filedrop"
        helperText="Please select files"
        mode="filedrop"
        callbackFile={callbackFile}
        value={preloadedFiles}
        margin="medium"
      />
      <DxcFileInput
        label="Single controlled filedrop"
        helperText="Please select files"
        mode="filedrop"
        callbackFile={callbackFile}
        value={preloadedFiles}
        multiple={false}
        margin="medium"
      />
      <DxcFileInput
        label="Multiple uncontrolled filedrop"
        helperText="Please select files"
        mode="filedrop"
        margin="medium"
      />
      <DxcFileInput
        label="Single uncontrolled filedrop"
        helperText="Please select files"
        mode="filedrop"
        multiple={false}
        margin="medium"
      />
      <DxcFileInput
        label="Disabled filedrop"
        helperText="Please select files"
        mode="filedrop"
        disabled
        margin="medium"
      />
      <DxcFileInput
        label="Multiple controlled dropzone"
        helperText="Please select files"
        mode="dropzone"
        callbackFile={callbackFile}
        value={files}
        margin="medium"
      />
      <DxcFileInput
        label="Single controlled dropzone"
        helperText="Please select files"
        mode="dropzone"
        callbackFile={callbackFile}
        value={files}
        multiple={false}
        margin="medium"
      />
      <DxcFileInput
        label="Multiple controlled dropzone"
        helperText="Please select files"
        mode="dropzone"
        callbackFile={callbackFile}
        value={preloadedFiles}
        margin="medium"
      />
      <DxcFileInput
        label="Single controlled dropzone"
        helperText="Please select files"
        mode="dropzone"
        callbackFile={callbackFile}
        value={preloadedFiles}
        multiple={false}
        margin="medium"
      />
      <DxcFileInput
        label="Multiple uncontrolled dropzone"
        helperText="Please select files"
        mode="dropzone"
        margin="medium"
      />
      <DxcFileInput
        label="Single uncontrolled dropzone"
        helperText="Please select files"
        mode="dropzone"
        multiple={false}
        margin="medium"
      />
      <DxcFileInput
        label="Disabled dropzone"
        helperText="Please select files"
        mode="dropzone"
        disabled
        margin="medium"
      />
    </>
  );
}

export default App;
