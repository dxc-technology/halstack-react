import React, { useState, useEffect, useCallback, useId } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import DxcButton from "../button/Button";
import FileInputPropsType, { FileData, RefType } from "./types";
import FileItem from "./FileItem";

const getFilePreview = async (file: File): Promise<string> =>
  file.type.includes("video")
    ? "filled_movie"
    : file.type.includes("audio")
      ? "music_video"
      : file.type.includes("image")
        ? new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
              resolve(e.target.result as string);
            };
          })
        : "draft";

const isFileIncluded = (file: FileData, fileList: FileData[]) => {
  const fileListInfo = fileList.map((existingFile) => existingFile.file);
  return fileListInfo.some(
    ({ name, size, type, lastModified, webkitRelativePath }) =>
      name === file.file.name &&
      size === file.file.size &&
      type === file.file.type &&
      lastModified === file.file.lastModified &&
      webkitRelativePath === file.file.webkitRelativePath
  );
};

const DxcFileInput = React.forwardRef<RefType, FileInputPropsType>(
  (
    {
      // name = "",
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
      tabIndex = 0
    },
    ref
  ): JSX.Element => {
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState<FileData[]>([]);
    const fileInputId = `file-input-${useId()}`;
    const colorsTheme = useTheme();
    const translatedLabels = useTranslatedLabels();

    const checkFileSize = (file: File) =>
      file.size < minSize
        ? translatedLabels.fileInput.fileSizeGreaterThanErrorMessage
        : file.size > maxSize
          ? translatedLabels.fileInput.fileSizeLessThanErrorMessage
          : undefined;

    const getFilesToAdd = async (selectedFiles: File[]) => {
      const filesToAdd = await Promise.all(selectedFiles.map((selectedFile) => getFilePreview(selectedFile))).then(
        (previews: string[]) =>
          selectedFiles.map((file, index) => {
            const fileInfo = {
              file,
              error: checkFileSize(file),
              preview: previews[index]
            };
            return fileInfo;
          })
      );
      return filesToAdd.filter((file) => !isFileIncluded(file, files));
    };

    const addFile = async (selectedFiles: File[]) => {
      const filesToAdd = await getFilesToAdd(
        multiple ? selectedFiles : selectedFiles.length === 1 ? selectedFiles : [selectedFiles[0]]
      );
      const finalFiles = multiple ? [...files, ...filesToAdd] : filesToAdd;
      callbackFile?.(finalFiles);
    };

    const selectFiles = (e) => {
      const selectedFiles = e.target.files;
      const filesArray = Object.keys(selectedFiles).map((key) => selectedFiles[key]);
      addFile(filesArray);
      e.target.value = null;
    };

    const onDelete = useCallback(
      (fileName) => {
        const filesCopy = [...files];
        const fileToRemove = filesCopy.find((file) => file.file.name === fileName);
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
      if (e.dataTransfer.items?.length > 0) {
        setIsDragging(true);
      }
    };
    const handleDragOut = (e) => {
      // only if dragged items leave container (outside, not to childs)
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setIsDragging(false);
      }
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
          const valueFiles = (await Promise.all(
            value.map(async (file) => {
              if (file.preview) {
                return file;
              }
              const preview = await getFilePreview(file.file);
              return { ...file, preview };
            })
          )) as FileData[];
          setFiles(valueFiles);
        }
      };
      getFiles();
    }, [value]);

    return (
      <ThemeProvider theme={colorsTheme.fileInput}>
        <FileInputContainer margin={margin} ref={ref}>
          <Label htmlFor={fileInputId} disabled={disabled}>
            {label}
          </Label>
          <HelperText disabled={disabled}>{helperText}</HelperText>
          {mode === "file" ? (
            <FileContainer singleFileMode={!multiple && files.length === 1}>
              <ValueInput
                id={fileInputId}
                type="file"
                accept={accept}
                multiple={multiple}
                onChange={selectFiles}
                disabled={disabled}
                readOnly
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
              {files.length > 0 && (
                <FileItemListContainer>
                  {files.map((file, index) => (
                    <FileItem
                      fileName={file.file.name}
                      error={file.error}
                      singleFileMode={!multiple && files.length === 1}
                      showPreview={mode === "file" && !multiple ? false : showPreview}
                      preview={file.preview}
                      type={file.file.type}
                      onDelete={onDelete}
                      tabIndex={tabIndex}
                      key={`file-${index}`}
                    />
                  ))}
                </FileItemListContainer>
              )}
            </FileContainer>
          ) : (
            <Container>
              <ValueInput
                id={fileInputId}
                type="file"
                accept={accept}
                multiple={multiple}
                onChange={selectFiles}
                disabled={disabled}
                readOnly
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
                <DxcButton
                  mode="secondary"
                  label={buttonLabel ?? translatedLabels.fileInput.dropAreaButtonLabelDefault}
                  onClick={handleClick}
                  disabled={disabled}
                  size="fitContent"
                />
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
              {files.length > 0 && (
                <FileItemListContainer>
                  {files.map((file, index) => (
                    <FileItem
                      fileName={file.file.name}
                      error={file.error}
                      singleFileMode={false}
                      showPreview={showPreview}
                      preview={file.preview}
                      type={file.file.type}
                      onDelete={onDelete}
                      tabIndex={tabIndex}
                      key={`file-${index}`}
                    />
                  ))}
                </FileItemListContainer>
              )}
            </Container>
          )}
          {mode === "file" && !multiple && files.length === 1 && files[0].error && (
            <ErrorMessage>{files[0].error}</ErrorMessage>
          )}
        </FileInputContainer>
      </ThemeProvider>
    );
  }
);

const FileInputContainer = styled.div<{ margin: FileInputPropsType["margin"] }>`
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

const Label = styled.label<{ disabled: FileInputPropsType["disabled"] }>`
  color: ${(props) => (props.disabled ? props.theme.disabledLabelFontColor : props.theme.labelFontColor)};
  font-family: ${(props) => props.theme.labelFontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-weight: ${(props) => props.theme.labelFontWeight};
  line-height: ${(props) => props.theme.labelLineHeight};
`;

const HelperText = styled.span<{ disabled: FileInputPropsType["disabled"] }>`
  color: ${(props) => (props.disabled ? props.theme.disabledHelperTextFontcolor : props.theme.helperTextFontColor)};
  font-family: ${(props) => props.theme.helperTextFontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: ${(props) => props.theme.helperTextLineHeight};
`;

const FileContainer = styled.div<{ singleFileMode: boolean }>`
  display: flex;
  ${(props) =>
    props.singleFileMode ? "flex-direction: row; column-gap: 0.25rem;" : "flex-direction: column; row-gap: 0.25rem;"}
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

const DragDropArea = styled.div<{
  mode: FileInputPropsType["mode"];
  disabled: FileInputPropsType["disabled"];
  isDragging: boolean;
}>`
  box-sizing: border-box;
  display: flex;
  ${(props) =>
    props.mode === "filedrop"
      ? "flex-direction: row; column-gap: 0.75rem; height: 48px;"
      : "justify-content: center; flex-direction: column; row-gap: 0.5rem; height: 160px;"}
  align-items: center;
  width: 320px;
  padding: ${(props) =>
    props.mode === "filedrop"
      ? `calc(4px - ${props.theme.dropBorderThickness}) 1rem calc(4px - ${props.theme.dropBorderThickness}) calc(4px - ${props.theme.dropBorderThickness})`
      : "1rem"};
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

const DropzoneLabel = styled.div<{ disabled: FileInputPropsType["disabled"] }>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  text-align: center;
  color: ${(props) => (props.disabled ? props.theme.disabledDropLabelFontColor : props.theme.dropLabelFontColor)};
  font-family: ${(props) => props.theme.dropLabelFontFamily};
  font-size: ${(props) => props.theme.dropLabelFontSize};
  font-weight: ${(props) => props.theme.dropLabelFontWeight};
`;

const FiledropLabel = styled.span<{ disabled: FileInputPropsType["disabled"] }>`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${(props) => (props.disabled ? props.theme.disabledDropLabelFontColor : props.theme.dropLabelFontColor)};
  font-family: ${(props) => props.theme.dropLabelFontFamily};
  font-size: ${(props) => props.theme.dropLabelFontSize};
  font-weight: ${(props) => props.theme.dropLabelFontWeight};
`;

const ErrorMessage = styled.div`
  color: ${(props) => props.theme.errorMessageFontColor};
  font-family: ${(props) => props.theme.errorMessageFontFamily};
  font-size: ${(props) => props.theme.errorMessageFontSize};
  font-weight: ${(props) => props.theme.errorMessageFontWeight};
  line-height: ${(props) => props.theme.errorMessageLineHeight};
  margin-top: 0.25rem;
`;

DxcFileInput.displayName = "DxcFileInput";

export default DxcFileInput;
