import {
  DxcTextInput,
  DxcPaginator,
  DxcFileInput,
  HalstackProvider,
  DxcInset,
} from "@dxc-technology/halstack-react";
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
      paginator: {
        itemsPerPageText: " Éléments",
        pageOfText: (a, b) => \`Page: \${a} de \${b}\`,
      },
      fileInput: {
        fileSizeLessThanErrorMessage: "La taille du fichier doit être inférieure à la taille maximale."
      }
    };
  
    return (
      <HalstackProvider labels={labels}>
        <DxcInset space="2rem">
          <DxcTextInput
            label="Input text"
            defaultValue="Example text"
            clearable
            optional
          />
        </DxcInset>
        <DxcInset space="2rem">
          <DxcPaginator
            itemsPerPageOptions={[10, 15]}
            totalItems={27}
            itemsPerPage={items}
            itemsPerPageFunction={itemsPerPageClick}
          ></DxcPaginator>
        </DxcInset>
        <DxcInset space="2rem">
      <DxcFileInput
        label="Select your files"
        value={files}
        callbackFile={callbackFile}
        minSize={0}
        maxSize={0}
      />
    </DxcInset>
      </HalstackProvider>
    );
  }`;

const scope = {
  DxcTextInput,
  DxcFileInput,
  DxcPaginator,
  HalstackProvider,
  DxcInset,
  useState,
};

export default { code, scope };
