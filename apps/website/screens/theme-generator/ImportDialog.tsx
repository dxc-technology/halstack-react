import { useState } from "react";
import { DxcButton, DxcDialog, DxcTextarea, DxcHeading, DxcFlex } from "@dxc-technology/halstack-react";
import { deepMerge } from "./utils";
import ImportDialogProps, { IndexedThemeInput, IndexedTheme } from "./types";
import styled from "styled-components";

const isArrayIncluded = (object1: {}, object2: {}) =>
  Object.keys(object1).every((element) => Object.keys(object2).includes(element));

const validateInputTheme = (json: string, customThemeSchema: IndexedTheme) => {
  let inputTheme: IndexedThemeInput = {};
  let errMessage = "";

  try {
    inputTheme = JSON.parse(json);
    const inputComponentNames = Object.keys(inputTheme);
    const schemaComponentNames = Object.keys(customThemeSchema);

    inputComponentNames.forEach((componentName) => {
      const errorMessage =
        (!schemaComponentNames.includes(componentName) && "Invalid component name.") ||
        (!isArrayIncluded(inputTheme[componentName]!, customThemeSchema[componentName] ?? {}) &&
          `Invalid theme input name in the ${componentName} component.`);

      if (errorMessage) throw new Error(errorMessage);
    });
  } catch (e: any) {
    errMessage = e.name === "SyntaxError" ? "Invalid JSON input." : e.message;
  }
  return { inputTheme, errMessage };
};

const ImportDialog = ({ customThemeSchema, setCustomTheme, setDialogVisible }: ImportDialogProps): JSX.Element => {
  const [value, setValue] = useState("");
  const [validationErrorMessage, setValidationErrorMessage] = useState("");

  const onChange = ({ value }: { value: string }) => {
    setValue(value);
    if (validationErrorMessage !== "") setValidationErrorMessage("");
  };
  const closeDialog = () => {
    setDialogVisible(false);
    setValue("");
    setValidationErrorMessage("");
  };
  const validate = () => {
    const { inputTheme, errMessage } = validateInputTheme(value, customThemeSchema);

    if (errMessage === "") {
      setCustomTheme((prevTheme: IndexedTheme) => deepMerge({}, prevTheme, inputTheme));
      closeDialog();
    } else setValidationErrorMessage(errMessage);
  };

  return (
    <DxcDialog closable={false} onBackgroundClick={closeDialog}>
      <ImportDialogContainer>
        <DxcHeading text="Import theme" level={2} weight="regular" />
        <DxcTextarea
          placeholder="Paste your theme here..."
          value={value}
          onChange={onChange}
          error={validationErrorMessage}
          size="fillParent"
          verticalGrow="none"
        />
        <DxcFlex justifyContent="flex-end" gap="0.5rem">
          <DxcButton mode="tertiary" label="Cancel" onClick={closeDialog} />
          <DxcButton
            mode="primary"
            label="Import"
            onClick={validate}
            disabled={validationErrorMessage !== "" || value === ""}
          />
        </DxcFlex>
      </ImportDialogContainer>
    </DxcDialog>
  );
};

const ImportDialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  height: 80vh;

  div:nth-child(2) {
    height: 100%;
  }
  > div > textarea {
    flex-grow: 1;
  }
`;

export default ImportDialog;
