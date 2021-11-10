import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme.js";
import DxcButton from "../button/Button";
import FileItem from "./FileItem";

const DxcFileInput = ({
  name = "",
  mode = "file",
  label = "",
  helperText = "",
  accept,
  minSize,
  maxSize,
  multiple = true,
  disabled = false,
  callbackFile,
  value,
  margin,
  tabIndex,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);

  const colorsTheme = useTheme();

  const fileInputId = `file-input-${uuidv4()}`;
  const labelFileInputId = `label-${fileInputId}`;

  useEffect(() => {
    if (value && !multiple) {
      if (value.length > 0) {
        setFiles([value[0]]);
      } else {
        setFiles(value);
      }
    } else if (value && multiple) {
      setFiles(value);
    }
    if (value?.length > 0 && disabled) {
      setFiles([]);
    }
  }, [value, multiple, disabled]);

  const handleClick = () => {
    document.getElementById(fileInputId).click();
  };

  const checkFileSize = (file) => {
    if (file.size < minSize) {
      return "File size must be greater than min size.";
    } else if (file.size > maxSize) {
      return "File size must be less than max size.";
    }
  };

  const getFilesToAdd = (selectedFiles) => {
    return selectedFiles.map((selectedFile) => {
      const fileInfo = { file: selectedFile, error: checkFileSize(selectedFile) };
      return fileInfo;
    });
  };

  const addFile = (selectedFiles) => {
    if ((!multiple && files.length === 0) || multiple) {
      const filesToAdd = getFilesToAdd(selectedFiles);
      const finalFiles = [...files, ...filesToAdd];
      setFiles(finalFiles);
      if (typeof callbackFile === "function") {
        callbackFile(finalFiles);
      }
    } else if (!multiple && files.length > 0) {
      const fileToAdd = selectedFiles.length === 1 ? getFilesToAdd(selectedFiles) : getFilesToAdd([selectedFiles[0]]);
      setFiles(fileToAdd);
    }
  };

  const selectFiles = (e) => {
    const selectedFiles = e.target.files;
    const filesArray = Object.keys(selectedFiles).map((key) => selectedFiles[key]);
    addFile(filesArray);
  };

  const onDelete = (fileName) => {
    const filesCopy = [...files];
    const fileToRemove = filesCopy.find((file) => {
      return file.file.name === fileName;
    });
    const fileIndex = filesCopy.indexOf(fileToRemove);
    filesCopy.splice(fileIndex, 1);
    setFiles(filesCopy);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  };

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const filesObject = e.dataTransfer.files;
    if (filesObject && filesObject.length > 0) {
      const filesArray = Object.keys(filesObject).map((key) => filesObject[key]);
      addFile(filesArray);
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.fileInput}>
      <FileInputContainer margin={margin} name={name}>
        <Label for={labelFileInputId} disabled={disabled}>
          {label}
        </Label>
        <HelperText disabled={disabled}>{helperText}</HelperText>
        {mode === "file" ? (
          <FileContainer multiple={multiple}>
            <ButtonErrorContainer>
              <DxcButton
                mode="secondary"
                label="Select files"
                onClick={handleClick}
                disabled={disabled}
                size="medium"
                tabIndex={tabIndex}
              />
              <input id={fileInputId} type="file" accept={accept} multiple={multiple} onChange={selectFiles} />
              {files.map((file) => {
                return file.error && mode === "file" && !multiple && <ErrorMessage>{file.error}</ErrorMessage>;
              })}
            </ButtonErrorContainer>
            {files.map((file) => {
              return (
                <>
                  <FileItemContainer mode={mode} multiple={multiple}>
                    <FileItem
                      mode={mode}
                      multiple={multiple}
                      name={file.file.name}
                      error={file.error}
                      onDelete={onDelete}
                    />
                  </FileItemContainer>
                </>
              );
            })}
          </FileContainer>
        ) : (
          <Container>
            <DragDropArea
              isDragging={isDragging}
              disabled={disabled}
              mode={mode}
              onDrop={handleDrop}
              onDragEnter={handleDragIn}
              onDragOver={handleDrag}
              onDragLeave={handleDragOut}
            >
              <ButtonContainer mode={mode}>
                <DxcButton mode="secondary" label="Select" onClick={handleClick} disabled={disabled} size="medium" />
                <input id={fileInputId} type="file" accept={accept} multiple={multiple} onChange={selectFiles} />
              </ButtonContainer>
              <DropLabel disabled={disabled}>or drop files</DropLabel>
            </DragDropArea>
            {files.map((file) => {
              return (
                <FileItemContainer mode={mode} multiple={multiple}>
                  <FileItem
                    mode={mode}
                    multiple={multiple}
                    name={file.file.name}
                    error={file.error}
                    onDelete={onDelete}
                  />
                </FileItemContainer>
              );
            })}
          </Container>
        )}
      </FileInputContainer>
    </ThemeProvider>
  );
};

const FileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
`;

const Label = styled.label`
  color: ${(props) => (props.disabled ? props.theme.disabledLabelFontColor : props.theme.labelFontColor)};
  font-family: ${(props) => props.theme.labelFontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-weight: ${(props) => props.theme.labelFontWeight};
  line-height: ${(props) => props.theme.labelLineHeight};
`;

const HelperText = styled.span`
  color: ${(props) => (props.disabled ? props.theme.disabledHelperTextFontcolor : props.theme.helperTextFontColor)};
  font-family: ${(props) => props.theme.helperTextFontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: ${(props) => props.theme.helperTextLineHeight};
`;

const DragDropArea = styled.div`
  height: ${(props) => (props.mode === "filedrop" ? "48px" : "160px")};
  width: calc(320px - 4px);
  display: flex;
  flex-direction: ${(props) => (props.mode === "filedrop" ? "row" : "column")};
  align-items: center;
  border-radius: ${(props) => props.theme.dropBorderRadius};
  background-color: ${(props) => props.isDragging && props.theme.focusDropBackgroundColor};
  border: ${(props) => props.theme.dropBorder}
    ${(props) =>
      props.disabled
        ? props.theme.disabledDropBorderColor
        : props.isDragging
        ? props.theme.focusDropBorderColor
        : props.theme.dropBorderColor};
  cursor: ${(props) => props.disabled && "not-allowed"};
`;

const FileContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.multiple ? "column" : "row")};
`;

const ButtonErrorContainer = styled.div`
  display: flex;
  flex-direction: column;

  input[type="file"] {
    visibility: hidden;
    position: absolute;
    width: 0px;
    height: 0px;
  }
`;

const ButtonContainer = styled.div`
  padding: ${(props) => (props.mode === "filedrop" ? "4px 12px 4px 4px" : "47px 122px 8px 122px")};
  input[type="file"] {
    visibility: hidden;
    position: absolute;
    width: 0px;
    height: 0px;
  }
`;

const DropLabel = styled.span`
  color: ${(props) => (props.disabled ? props.theme.disabledDropLabelFontColor : props.theme.dropLabelFontColor)};
  font-family: ${(props) => props.theme.dropLabelFontFamily};
  font-size: ${(props) => props.theme.dropLabelFontSize};
  font-weight: ${(props) => props.theme.dropLabelFontWeight};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FileItemContainer = styled.div`
  margin-top: ${(props) => (props.multiple || props.mode !== "file") && "4px"};
  margin-left: ${(props) => props.mode === "file" && !props.multiple && "4px"};
`;

const ErrorMessage = styled.div`
  color: ${(props) => props.theme.errorMessageFontColor};
  font-family: ${(props) => props.theme.errorMessageFontFamily};
  font-size: ${(props) => props.theme.errorMessageFontSize};
  font-weight: ${(props) => props.theme.errorMessageFontWeight};
  line-height: ${(props) => props.theme.errorMessageLineHeight};
`;

DxcFileInput.propTypes = {
  name: PropTypes.string,
  mode: PropTypes.oneOf(["file", "filedrop", "dropzone"]),
  label: PropTypes.string,
  helperText: PropTypes.string,
  accept: PropTypes.array,
  maxSize: PropTypes.number,
  minSize: PropTypes.number,
  multiple: PropTypes.bool,
  showPreview: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  callbackFile: PropTypes.func,
  value: PropTypes.array,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
};

export default DxcFileInput;
