import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme.js";
import DxcButton from "../button/Button";
import FileItem from "./FileItem";

const audioIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z" />
  </svg>
);

const videoIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const fileIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
  </svg>
);

const DxcFileInput = ({
  name = "",
  mode = "file",
  label = "",
  helperText = "",
  accept,
  minSize,
  maxSize,
  showPreview = false,
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

  useEffect(() => {
    if (value) {
      setFiles(value);
    } else {
      setFiles([]);
    }
  }, [value]);

  const handleClick = () => {
    document.getElementById(fileInputId).click();
  };

  const checkFileSize = (file) => {
    if (file.size < minSize) {
      return "File size must be greater than min size.";
    }
    if (file.size > maxSize) {
      return "File size must be less than max size.";
    }
  };

  const getFilePreview = (file) => {
    if (file.type.includes("video")) {
      return videoIcon;
    }
    if (file.type.includes("audio")) {
      return audioIcon;
    }
    if (file.type.includes("image")) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          resolve(e.target.result);
        };
      });
    }
    return fileIcon;
  };

  const getFilesToAdd = async (selectedFiles) => {
    const filesToAdd = await Promise.all(selectedFiles.map((selectedFile) => getFilePreview(selectedFile))).then(
      (previews) => {
        return selectedFiles.map((selectedFile, index) => {
          const fileInfo = { file: selectedFile, error: checkFileSize(selectedFile), preview: previews[index] };
          return fileInfo;
        });
      }
    );
    return filesToAdd;
  };

  const addFile = async (selectedFiles) => {
    if (multiple) {
      const filesToAdd = await getFilesToAdd(selectedFiles);
      const finalFiles = [...files, ...filesToAdd];
      if (typeof callbackFile === "function") {
        callbackFile(finalFiles);
      }
    } else {
      const fileToAdd =
        selectedFiles.length === 1 ? await getFilesToAdd(selectedFiles) : await getFilesToAdd([selectedFiles[0]]);
      if (typeof callbackFile === "function") {
        callbackFile(fileToAdd);
      }
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
    if (typeof callbackFile === "function") {
      callbackFile(filesCopy);
    }
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
      <FileInputContainer margin={margin} name={name} tabIndex={tabIndex}>
        <Label htmlFor={fileInputId} disabled={disabled}>
          {label}
        </Label>
        <HelperText disabled={disabled}>{helperText}</HelperText>
        {mode === "file" ? (
          <FileContainer multiple={multiple} files={files}>
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
              {files.length === 1 &&
                files.map((file) => {
                  return file.error && mode === "file" && !multiple && <ErrorMessage>{file.error}</ErrorMessage>;
                })}
            </ButtonErrorContainer>
            {files.map((file) => {
              return (
                <>
                  <FileItemContainer mode={mode} multiple={multiple} files={files}>
                    <FileItem
                      mode={mode}
                      multiple={multiple}
                      name={file.file.name}
                      error={file.error}
                      showPreview={mode === "file" && !multiple ? false : showPreview}
                      numFiles={files.length}
                      preview={file.preview}
                      type={file.file.type}
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
                <DxcButton
                  mode="secondary"
                  label="Select"
                  onClick={handleClick}
                  disabled={disabled}
                  size="fitContent"
                />
                <input id={fileInputId} type="file" accept={accept} multiple={multiple} onChange={selectFiles} />
              </ButtonContainer>
              <DropLabel disabled={disabled}>or drop files</DropLabel>
            </DragDropArea>
            {files.map((file) => {
              return (
                <FileItemContainer mode={mode} multiple={multiple} files={files}>
                  <FileItem
                    mode={mode}
                    multiple={multiple}
                    name={file.file.name}
                    error={file.error}
                    showPreview={showPreview}
                    numFiles={files.length}
                    preview={file.preview}
                    type={file.file.type}
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
  width: fit-content;
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
  height: ${(props) => (props.mode === "filedrop" ? "calc(48px - 2px)" : "calc(160px - 2px)")};
  width: calc(320px - 2px);
  display: flex;
  flex-direction: ${(props) => (props.mode === "filedrop" ? "row" : "column")};
  align-items: center;
  border-radius: ${(props) => props.theme.dropBorderRadius};
  border-width: ${(props) => (!props.isDragging ? props.theme.dropBorderThickness : "2px")};
  border-style: ${(props) => (!props.isDragging ? props.theme.dropBorderStyle : "solid")};
  background-color: ${(props) => props.isDragging && props.theme.focusDropBackgroundColor};
  border-color: ${(props) =>
    props.disabled
      ? props.theme.disabledDropBorderColor
      : props.isDragging
      ? props.theme.focusDropBorderColor
      : props.theme.dropBorderColor};
  cursor: ${(props) => props.disabled && "not-allowed"};
`;

const FileContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.multiple || props.files.length > 1 ? "column" : "row")};
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
  padding: ${(props) => (props.mode === "filedrop" ? "2px 12px 2px 2px" : "47px 122px 8px 122px")};
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
  margin-top: ${(props) => (props.multiple || props.files.length > 1 || props.mode !== "file") && "4px"};
  margin-left: ${(props) => props.mode === "file" && props.files.length === 1 && !props.multiple && "4px"};
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
  callbackFile: PropTypes.func,
  value: PropTypes.array,
  tabIndex: PropTypes.number,
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
