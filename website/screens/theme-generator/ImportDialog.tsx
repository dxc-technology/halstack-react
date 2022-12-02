//@ts-nocheck
import React, { useState } from "react";
import {
  DxcButton,
  DxcDialog,
  DxcTextarea,
  DxcHeading,
  DxcAlert,
  DxcFlex,
  DxcInset,
} from "@dxc-technology/halstack-react";
import { deepMerge } from "./utils";

const validateInputTheme = (json, customThemeSchema) => {
  let inputTheme = [];
  let errMessage = "";
  const isArrayIncluded = (array1, array2) =>
    Object.keys(array1).every((element) =>
      Object.keys(array2).includes(element)
    );

  try {
    inputTheme = JSON.parse(json);
    const inputComponentNames = Object.keys(inputTheme);
    const schemaComponentNames = Object.keys(customThemeSchema);

    inputComponentNames.forEach((componentName) => {
      const errorMessage =
        (!schemaComponentNames.includes(componentName) &&
          "Invalid component name.") ||
        (!isArrayIncluded(
          inputTheme[componentName],
          customThemeSchema[componentName]
        ) &&
          `Invalid theme input name in the ${componentName} component.`);

      if (errorMessage) throw new Error(errorMessage);
    });
  } catch (e) {
    errMessage = e.name === "SyntaxError" ? "Invalid JSON input." : e.message;
  }
  return { inputTheme, errMessage };
};

const ImportDialog = ({
  customThemeSchema,
  setCustomTheme,
  setDialogVisible,
}) => {
  const [value, setValue] = useState("");
  const [validationErrorMessage, setValidationErrorMessage] = useState("");

  const onChange = ({ value }) => {
    setValue(value);
    if (validationErrorMessage !== "") setValidationErrorMessage("");
  };
  const closeDialog = () => {
    setDialogVisible(false);
    setValue("");
    setValidationErrorMessage("");
  };
  const validate = () => {
    const { inputTheme, errMessage } = validateInputTheme(
      value,
      customThemeSchema
    );

    if (errMessage === "") {
      setCustomTheme((prevTheme) => deepMerge({}, prevTheme, inputTheme));
      closeDialog();
    } else setValidationErrorMessage(errMessage);
  };

  return (
    <DxcDialog isCloseVisible={false} onBackgroundClick={closeDialog}>
      <DxcInset space="1rem">
        <DxcFlex direction="column" gap="1.5rem">
          <DxcHeading text="Import theme" level={2} weight="normal" />
          <DxcTextarea
            placeholder="Paste your theme here..."
            value={value}
            onChange={onChange}
            rows={24}
            error={validationErrorMessage !== ""}
            size="fillParent"
            verticalGrow="none"
          />
          {validationErrorMessage !== "" && (
            <DxcAlert
              type="error"
              mode="inline"
              inlineText={validationErrorMessage}
              size="fillParent"
            />
          )}
          <DxcFlex alignItems="center" justifyContent="right" gap="0.5rem">
            <DxcButton mode="text" label="Cancel" onClick={closeDialog} />
            <DxcButton
              mode="primary"
              label="Import"
              onClick={validate}
              disabled={validationErrorMessage !== "" || value === ""}
            />
          </DxcFlex>
        </DxcFlex>
      </DxcInset>
    </DxcDialog>
  );
};

export default ImportDialog;
