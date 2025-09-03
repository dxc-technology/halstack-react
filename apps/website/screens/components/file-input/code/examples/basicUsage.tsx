import { DxcFileInput, DxcInset, DxcButton, DxcFlex } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [files, setFiles] = useState([]);

  const handleSubmit = () => {
    console.log(files.map((file) => file.file.name));
  };

  const callbackFile = (files) => {
    setFiles(files);
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcFileInput
          label="Select your files"
          value={files}
          callbackFile={callbackFile}
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
};

export default { code, scope };
