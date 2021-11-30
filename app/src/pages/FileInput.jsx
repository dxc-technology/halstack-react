import React, { useState } from "react";
import { DxcFileInput } from "@dxc-technology/halstack-react";

const file1 = new File(["file1"], "file1.pdf", { type: "text/plain" });
const file2 = new File(["file2"], "file2.png", {
  type: "image/png",
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
    const updatedFiles = files.map((file, index) => {
      if (index === 1) {
        return { ...file, error: "Error message" };
      }
      return { ...file };
    });
    setFiles(updatedFiles);
    setPreloadedFiles(updatedFiles);
  };

  return (
    <>
      <DxcFileInput
        label="Multiple file"
        helperText="Please select files"
        margin="medium"
        value={files}
        callbackFile={callbackFile}
      />
      <DxcFileInput
        label="Single file"
        helperText="Please select files"
        margin="medium"
        value={files}
        callbackFile={callbackFile}
        multiple={false}
      />
      <DxcFileInput
        label="Multiple file with files in value"
        helperText="Please select files"
        margin="medium"
        callbackFile={callbackFile}
        value={preloadedFiles}
      />
      <DxcFileInput
        label="Single file with files in value"
        helperText="Please select files"
        margin="medium"
        callbackFile={callbackFile}
        value={preloadedFiles}
        multiple={false}
      />
      <DxcFileInput
        label="With preview"
        helperText="Please select files"
        callbackFile={callbackFile}
        value={files}
        showPreview
        margin="medium"
      />
      <DxcFileInput
        label="Disabled file"
        helperText="Please select files"
        disabled
        margin="medium"
        value={files}
        callbackFile={callbackFile}
      />
      <DxcFileInput
        label="Multiple filedrop"
        helperText="Please select files"
        mode="filedrop"
        callbackFile={callbackFile}
        value={files}
        multiple={false}
        margin="medium"
      />
      <DxcFileInput
        label="Single filedrop"
        helperText="Please select files"
        mode="filedrop"
        callbackFile={callbackFile}
        value={files}
        multiple={false}
        margin="medium"
      />
      <DxcFileInput
        label="Multiple filedrop with files in value"
        helperText="Please select files"
        mode="filedrop"
        callbackFile={callbackFile}
        value={preloadedFiles}
        margin="medium"
      />
      <DxcFileInput
        label="Single filedrop with files in value"
        helperText="Please select files"
        mode="filedrop"
        callbackFile={callbackFile}
        value={preloadedFiles}
        multiple={false}
        margin="medium"
      />
      <DxcFileInput
        label="Disabled filedrop"
        helperText="Please select files"
        mode="filedrop"
        disabled
        margin="medium"
        value={files}
        callbackFile={callbackFile}
      />
      <DxcFileInput
        label="Multiple dropzone"
        helperText="Please select files"
        mode="dropzone"
        callbackFile={callbackFile}
        value={files}
        margin="medium"
      />
      <DxcFileInput
        label="Single dropzone"
        helperText="Please select files"
        mode="dropzone"
        callbackFile={callbackFile}
        value={files}
        multiple={false}
        margin="medium"
      />
      <DxcFileInput
        label="Multiple dropzone with files in value"
        helperText="Please select files"
        mode="dropzone"
        callbackFile={callbackFile}
        value={preloadedFiles}
        margin="medium"
      />
      <DxcFileInput
        label="Single dropzone with files in value"
        helperText="Please select files"
        mode="dropzone"
        callbackFile={callbackFile}
        value={preloadedFiles}
        multiple={false}
        margin="medium"
      />
      <DxcFileInput
        label="Disabled dropzone"
        helperText="Please select files"
        mode="dropzone"
        disabled
        margin="medium"
        value={files}
        callbackFile={callbackFile}
      />
      <DxcFileInput
        label="File Input"
        helperText="Please select files"
        value={files}
        callbackFile={callbackFile}
        minSize={100000}
        maxSize={200000}
        margin="medium"
      />
      <DxcFileInput
        label="Only .pdf allowed"
        helperText="Please select files"
        margin="medium"
        accept=".pdf"
        value={files}
        callbackFile={callbackFile}
      />
    </>
  );
}

export default App;
