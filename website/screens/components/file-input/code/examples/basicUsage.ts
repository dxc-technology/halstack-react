import {
  DxcFileInput,
  DxcInset,
  DxcButton,
  DxcFlex,
} from "@dxc-technology/halstack-react";
import { useState, useRef } from "react";

const code = `() => {
  const fileRef = useRef();
  const [files, setFiles] = useState([]);

  const handleSubmit = () => {
    const fileInput = fileRef.current.getElementsByTagName("input")[0];
    console.log(fileInput.value);
  };

  const callbackFile = (files) => {
    setFiles(files);
  };

  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="2rem">
        <DxcFileInput
          label="Select your files"
          value={files}
          callbackFile={callbackFile}
          ref={fileRef}
        />
        <DxcButton label="Submit" type="submit" onClick={handleSubmit} />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcFileInput,
  DxcButton,
  DxcInset,
  DxcFlex,
  useState,
  useRef,
};

export default { code, scope };
