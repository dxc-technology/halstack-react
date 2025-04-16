import { DxcTextInput, DxcFileInput, HalstackProvider, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [items, changeItems] = useState(10);
  const [files, setFiles] = useState([]);

  const itemsPerPageClick = (value) => {
    changeItems(value);
  };
  const callbackFile = (files) => {
    const updatedFiles = files.map((file) => {
      return { ...file };
    });
    setFiles(updatedFiles);
  };

  const labels = {
    formFields: {
      optionalLabel: "(Optionnel)",
    },
    fileInput: {
      fileSizeLessThanErrorMessage:
        "La taille du fichier doit être inférieure à la taille maximale.",
    },
  };

  return (
    <HalstackProvider labels={labels}>
      <DxcInset space="var(--spacing-gap-xl)">
        <DxcFlex gap="var(--spacing-gap-xl)">
          <DxcTextInput
            label="Input text"
            defaultValue="Example text"
            clearable
            optional
          />
          <DxcFileInput
            label="Select your files"
            value={files}
            callbackFile={callbackFile}
            minSize={0}
            maxSize={0}
          />
          </DxcFlex>
        </DxcInset>
    </HalstackProvider>
  );
}`;

const scope = {
  DxcTextInput,
  DxcFileInput,
  HalstackProvider,
  DxcInset,
  DxcFlex,
  useState,
};

export default { code, scope };
