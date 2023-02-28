import {
  DxcFileInput,
  DxcInset,
  DxcButton,
  DxcFlex,
} from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [files, setFiles] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(files.map((file) => file.file.name));
  };

  const callbackFile = (files) => {
    setFiles(files);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DxcInset space="2rem">
        <DxcFlex direction="column" gap="2rem">
          <DxcFileInput
            label="Select your files"
            value={files}
            callbackFile={callbackFile}
          />
          <input type="submit" value="Submit" />
        </DxcFlex>
      </DxcInset>
    </form>
  );
}`;

const scope = {
  DxcFileInput,
  DxcButton,
  DxcInset,
  DxcFlex,
  useState,
};

export default { code, scope };
