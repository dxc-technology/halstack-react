import React, { useState } from "react";
import { DxcFileInput } from "@repo/ui";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

type FileData = {
  file: File;
  error?: string;
  preview?: string;
};

const FileInput = () => {
  const [files, setFiles] = useState<FileData[]>([]);

  const callbackFile = (files: FileData[]) => {
    const updatedFiles = files.map((file: FileData, index: number) =>
      index === 1 ? { ...file, error: "Error message" } : { ...file }
    );
    setFiles(updatedFiles);
  };

  return (
    <PreviewContainer>
      <Mode text="Default">
        <DxcFileInput
          label="Multiple file"
          helperText="Please select files"
          value={files}
          callbackFile={callbackFile}
        />
      </Mode>
      <Mode text="Single">
        <DxcFileInput
          label="File Input"
          helperText="Please select files"
          value={files}
          callbackFile={callbackFile}
          multiple={false}
        />
      </Mode>
      <Mode text="With preview">
        <DxcFileInput
          label="File Input"
          helperText="Please select files"
          value={files}
          callbackFile={callbackFile}
          multiple
          showPreview
        />
      </Mode>
      <Mode text="Accept file formats">
        <DxcFileInput
          label="File Input"
          helperText="Please select files"
          value={files}
          callbackFile={callbackFile}
          accept=".pdf"
        />
      </Mode>
      <Mode text="Min file size, max file size">
        <DxcFileInput
          label="File Input"
          helperText="Please select files"
          value={files}
          callbackFile={callbackFile}
          minSize={100000}
          maxSize={200000}
        />
      </Mode>
      <Mode text="Filedrop">
        <DxcFileInput
          label="File Input"
          helperText="Please select files"
          value={files}
          callbackFile={callbackFile}
          mode="filedrop"
        />
      </Mode>
      <Mode text="Dropzone">
        <DxcFileInput
          label="File Input"
          helperText="Please select files"
          value={files}
          callbackFile={callbackFile}
          mode="dropzone"
        />
      </Mode>
      <Mode text="Disabled">
        <DxcFileInput
          label="File Input"
          helperText="Please select files"
          disabled
          value={files}
          callbackFile={callbackFile}
        />
      </Mode>
    </PreviewContainer>
  );
};

export default FileInput;
