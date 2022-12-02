import React, { useState } from "react";
import styled from "styled-components";
import { DxcFileInput } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const FileInput = () => {
  const [files, setFiles] = useState([]);

  const callbackFile = (files) => {
    const updatedFiles = files.map((file, index) => {
      if (index === 1) {
        return { ...file, error: "Error message" };
      }
      return { ...file };
    });
    setFiles(updatedFiles);
  };

  return (
    <FileInputContainer>
      <Mode text="Default">
        <DxcFileInput
          label="Multiple file"
          helperText="Please select files"
          margin="medium"
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
          margin="medium"
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
          margin="medium"
        />
      </Mode>
      <Mode text="Accept file formats">
        <DxcFileInput
          label="File Input"
          helperText="Please select files"
          value={files}
          callbackFile={callbackFile}
          accept=".pdf"
          margin="medium"
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
          margin="medium"
        />
      </Mode>
      <Mode text="Filedrop">
        <DxcFileInput
          label="File Input"
          helperText="Please select files"
          value={files}
          callbackFile={callbackFile}
          mode="filedrop"
          margin="medium"
        />
      </Mode>
      <Mode text="Dropzone">
        <DxcFileInput
          label="File Input"
          helperText="Please select files"
          value={files}
          callbackFile={callbackFile}
          mode="dropzone"
          margin="medium"
        />
      </Mode>
      <Mode text="Disabled">
        <DxcFileInput
          label="File Input"
          helperText="Please select files"
          margin="medium"
          disabled
        />
      </Mode>
    </FileInputContainer>
  );
};

const FileInputContainer = styled.div``;

export default FileInput;
