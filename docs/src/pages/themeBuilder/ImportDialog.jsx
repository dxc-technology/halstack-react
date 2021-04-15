import React, { useState } from "react";
import {
  DxcButton,
  DxcDialog,
  DxcTextarea,
  DxcHeading,
  DxcAlert,
} from "@dxc-technology/halstack-react";
import styled from "styled-components";
import defaultTheme from "./DefaultTheme.json";

const validateInputJSON = (json) => {
  let inputJSON;
  let errMessage = "";
  const compareArray = (array1, array2) =>
    !Object.keys(array1).every((element) =>
      Object.keys(array2).includes(element)
    );

  try {
    inputJSON = JSON.parse(json);
    const inputComponentNames = Object.keys(inputJSON);
    const defaultComponentNames = Object.keys(defaultTheme);

    inputComponentNames.forEach((componentName) => {
      const errorMessage =
        (!defaultComponentNames.includes(componentName) &&
          "Invalid component name.") ||
        (compareArray(inputJSON[componentName], defaultTheme[componentName]) &&
          `Invalid theme input name in component ${componentName}.`);

      if (errorMessage) throw new Error(errorMessage);
    });
  } catch (e) {
    errMessage = e.name === "SyntaxError" ? "Invalid JSON input." : e.message;
  }
  return { inputJSON, errMessage };
};

const ImportDialog = ({ setCustomTheme }) => {
  const [value, setValue] = useState("");
  const [validationErrorMessage, setValidationErrorMessage] = useState("");
  const [isDialogVisible, setDialogVisible] = useState(false);

  const onChange = (newValue) => {
    setValue(newValue);
    if (validationErrorMessage !== "") setValidationErrorMessage("");
  };
  const handleDialog = () => {
    setDialogVisible(!isDialogVisible);
  };
  const validate = () => {
    const { inputJSON, errMessage } = validateInputJSON(value);

    if (errMessage === "") {
      setCustomTheme((prevTheme) => ({ ...prevTheme, ...inputJSON }));
      handleDialog();
    } else setValidationErrorMessage(errMessage);
  };

  return (
    <>
      <DxcButton
        mode="primary"
        label="Import"
        onClick={handleDialog}
        margin={{ right: "xxsmall" }}
      />
      {isDialogVisible && (
        <DxcDialog
          isCloseVisible={false}
          padding="xsmall"
          onBackgroundClick={handleDialog}
        >
          <DialogContainer>
            <DxcHeading
              text={"Import theme"}
              level={3}
              margin={{ bottom: "small" }}
              weight="normal"
            />
            <DxcTextarea
              label="Paste here your theme"
              value={value}
              onChange={onChange}
              size="fillParent"
              numRows={14}
              margin={{ bottom: "small" }}
            />
            {validationErrorMessage !== "" && (
              <DxcAlert
                type="error"
                mode="inline"
                inlineText={validationErrorMessage}
                size="fillParent"
                margin={{ bottom: "small" }}
              />
            )}
            <ButtonContainer>
              <DxcButton
                mode="primary"
                label="Import"
                onClick={validate}
                margin={{ right: "xsmall" }}
                disabled={validationErrorMessage !== ""}
              />
              <DxcButton mode="text" label="Cancel" onClick={handleDialog} />
            </ButtonContainer>
          </DialogContainer>
        </DxcDialog>
      )}
    </>
  );
};

const DialogContainer = styled.div`
  margin: 3%;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ImportDialog;
