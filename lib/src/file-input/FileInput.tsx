//@ts-nocheck
import React, { useState, useEffect, useCallback } from "react";
import styled, { ThemeProvider } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import DxcButton from "../button/Button";
import FileInputPropsType from "./types";
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

const getFilePreview = (file) => {
  if (file.type.includes("video")) return videoIcon;
  else if (file.type.includes("audio")) return audioIcon;
  else if (file.type.includes("image"))
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        resolve(e.target.result);
      };
    });
  else return fileIcon;
};

const DxcFileInput = ({
  name = "",
  mode = "file",
  label = "",
  buttonLabel,
  dropAreaLabel,
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
  tabIndex = 0,
}: FileInputPropsType): JSX.Element => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [fileInputId] = useState(`file-input-${uuidv4()}`);

  const colorsTheme = useTheme();
  const translatedLabels = useTranslatedLabels();

  const checkFileSize = (file) => {
    if (file.size < minSize) return translatedLabels.fileInput.fileSizeGreaterThanErrorMessage;
    else if (file.size > maxSize) return translatedLabels.fileInput.fileSizeLessThanErrorMessage;
  };

  const getFilesToAdd = async (selectedFiles) => {
    const filesToAdd = await Promise.all(selectedFiles.map((selectedFile) => getFilePreview(selectedFile))).then(
      (previews) =>
        selectedFiles.map((file, index) => {
          const fileInfo = { file, error: checkFileSize(file), preview: previews[index] };
          return fileInfo;
        })
    );
    return filesToAdd;
  };

  const addFile = async (selectedFiles) => {
    if (multiple) {
      const filesToAdd = await getFilesToAdd(selectedFiles);
      const finalFiles = [...files, ...filesToAdd];
      callbackFile?.(finalFiles);
    } else {
      const fileToAdd =
        selectedFiles.length === 1 ? await getFilesToAdd(selectedFiles) : await getFilesToAdd([selectedFiles[0]]);
      callbackFile?.(fileToAdd);
    }
  };

  const selectFiles = (e) => {
    const selectedFiles = e.target.files;
    const filesArray = Object.keys(selectedFiles).map((key) => selectedFiles[key]);
    addFile(filesArray);
  };

  const onDelete = useCallback(
    (fileName) => {
      const filesCopy = [...files];
      const fileToRemove = filesCopy.find((file) => {
        return file.file.name === fileName;
      });
      const fileIndex = filesCopy.indexOf(fileToRemove);
      filesCopy.splice(fileIndex, 1);
      callbackFile?.(filesCopy);
    },
    [files, callbackFile]
  );

  const handleClick = () => {
    document.getElementById(fileInputId).click();
  };
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragIn = (e) => {
    if (e.dataTransfer.items?.length > 0) setIsDragging(true);
  };
  const handleDragOut = (e) => {
    // only if dragged items leave container (outside, not to childs)
    if (!e.currentTarget.contains(e.relatedTarget)) setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const filesObject = e.dataTransfer.files;
    if (filesObject?.length > 0) {
      const filesArray = Object.keys(filesObject).map((key) => filesObject[key]);
      addFile(filesArray);
    }
  };

  useEffect(() => {
    const getFiles = async () => {
      if (value) {
        const valueFiles = await Promise.all(
          value.map(async (file) => {
            if (file.preview) {
              return file;
            } else {
              const preview = await getFilePreview(file.file);
              return { ...file, preview };
            }
          })
        );
        setFiles(valueFiles);
      }
    };
    getFiles();
  }, [value]);

  return (
    <ThemeProvider theme={colorsTheme.fileInput}>
      <FileInputContainer margin={margin} name={name}>
        <Label htmlFor={fileInputId} disabled={disabled}>
          {label}
        </Label>
        <HelperText disabled={disabled}>{helperText}</HelperText>
        {mode === "file" ? (
          <FileContainer multiple={multiple} files={files}>
            <ValueInput
              id={fileInputId}
              type="file"
              accept={accept}
              multiple={multiple}
              onChange={selectFiles}
              name={name}
              disabled={disabled}
              readOnly
              aria-hidden="true"
            />
            <DxcButton
              mode="secondary"
              label={
                buttonLabel ??
                (multiple
                  ? translatedLabels.fileInput.multipleButtonLabelDefault
                  : translatedLabels.fileInput.singleButtonLabelDefault)
              }
              onClick={handleClick}
              disabled={disabled}
              size="fitContent"
              tabIndex={tabIndex}
            />
            <FileItemListContainer mode={mode} multiple={multiple} files={files}>
              {files.map((file) => (
                <FileItem
                  fileName={file.file.name}
                  error={file.error}
                  singleFileMode={mode === "file" && !multiple}
                  showError={multiple || files.length > 1}
                  showPreview={mode === "file" && !multiple ? false : showPreview}
                  preview={file.preview}
                  type={file.file.type}
                  onDelete={onDelete}
                  tabIndex={tabIndex}
                />
              ))}
            </FileItemListContainer>
          </FileContainer>
        ) : (
          <Container>
            <ValueInput
              id={fileInputId}
              type="file"
              accept={accept}
              multiple={multiple}
              onChange={selectFiles}
              name={name}
              disabled={disabled}
              readOnly
              aria-hidden="true"
            />
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
                  label={buttonLabel ?? translatedLabels.fileInput.dropAreaButtonLabelDefault}
                  onClick={handleClick}
                  disabled={disabled}
                  size="fitContent"
                />
              </ButtonContainer>
              {mode === "dropzone" ? (
                <DropzoneLabel disabled={disabled}>
                  {dropAreaLabel ??
                    (multiple
                      ? translatedLabels.fileInput.multipleDropAreaLabelDefault
                      : translatedLabels.fileInput.singleDropAreaLabelDefault)}
                </DropzoneLabel>
              ) : (
                <FiledropLabel disabled={disabled}>
                  {dropAreaLabel ??
                    (multiple
                      ? translatedLabels.fileInput.multipleDropAreaLabelDefault
                      : translatedLabels.fileInput.singleDropAreaLabelDefault)}
                </FiledropLabel>
              )}
            </DragDropArea>
            <FileItemListContainer mode={mode} multiple={multiple} files={files}>
              {files.map((file) => (
                <FileItem
                  fileName={file.file.name}
                  error={file.error}
                  singleFileMode={mode === "file" && !multiple}
                  showError={multiple || files.length > 1}
                  showPreview={showPreview}
                  preview={file.preview}
                  type={file.file.type}
                  onDelete={onDelete}
                  tabIndex={tabIndex}
                />
              ))}
            </FileItemListContainer>
          </Container>
        )}
        {files.length === 1 &&
          files.map((file) => file.error && mode === "file" && !multiple && <ErrorMessage>{file.error}</ErrorMessage>)}
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

const FileContainer = styled.div`
  display: flex;
  ${(props) =>
    props.multiple || props.files.length > 1
      ? "flex-direction: column; row-gap: 0.25rem;"
      : "flex-direction: row; column-gap: 0.25rem;"}
  margin-top: 0.25rem;
`;

const ValueInput = styled.input`
  display: none;
`;

const FileItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
  margin-top: 0.25rem;
`;

const DragDropArea = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) => (props.mode === "filedrop" ? "row" : "column")};
  ${(props) => props.mode === "dropzone" && "justify-content: center; padding: 1rem;"};
  align-items: center;
  height: ${(props) => (props.mode === "filedrop" ? "48px" : "160px")};
  width: 320px;
  overflow: hidden;
  box-shadow: 0 0 0 2px transparent;
  border-radius: ${(props) => props.theme.dropBorderRadius};
  border-width: ${(props) => props.theme.dropBorderThickness};
  border-style: ${(props) => props.theme.dropBorderStyle};
  border-color: ${(props) => (props.disabled ? props.theme.disabledDropBorderColor : props.theme.dropBorderColor)};

  ${(props) =>
    props.isDragging &&
    `
      background-color: ${props.theme.dragoverDropBackgroundColor};
      border-color: transparent;
      box-shadow: 0 0 0 2px ${props.theme.focusDropBorderColor};
    `}

  cursor: ${(props) => props.disabled && "not-allowed"};
`;

const ButtonContainer = styled.div`
  ${(props) => props.mode === "filedrop" && "padding: 2px 12px 2px 3px"};
`;

const DropzoneLabel = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  text-align: center;
  margin-top: 0.5rem;
  color: ${(props) => (props.disabled ? props.theme.disabledDropLabelFontColor : props.theme.dropLabelFontColor)};
  font-family: ${(props) => props.theme.dropLabelFontFamily};
  font-size: ${(props) => props.theme.dropLabelFontSize};
  font-weight: ${(props) => props.theme.dropLabelFontWeight};
`;

const FiledropLabel = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${(props) => (props.disabled ? props.theme.disabledDropLabelFontColor : props.theme.dropLabelFontColor)};
  font-family: ${(props) => props.theme.dropLabelFontFamily};
  font-size: ${(props) => props.theme.dropLabelFontSize};
  font-weight: ${(props) => props.theme.dropLabelFontWeight};
  margin-right: 1rem;
`;

const ErrorMessage = styled.div`
  color: ${(props) => props.theme.errorMessageFontColor};
  font-family: ${(props) => props.theme.errorMessageFontFamily};
  font-size: ${(props) => props.theme.errorMessageFontSize};
  font-weight: ${(props) => props.theme.errorMessageFontWeight};
  line-height: ${(props) => props.theme.errorMessageLineHeight};
  margin-top: 0.25rem;
`;

export default DxcFileInput;
