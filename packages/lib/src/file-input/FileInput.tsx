import { useCallback, useContext, useEffect, useId, useState, forwardRef, DragEvent, ChangeEvent } from "react";
import styled from "@emotion/styled";
import DxcButton from "../button/Button";
import { spaces } from "../common/variables";
import FileItem from "./FileItem";
import FileInputPropsType, { FileData, RefType } from "./types";
import { HalstackLanguageContext } from "../HalstackContext";
import { getFilePreview, isFileIncluded } from "./utils";
import HelperText from "../styles/forms/HelperText";
import Label from "../styles/forms/Label";

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

const FileContainer = styled.div<{ singleFileMode: boolean }>`
  display: flex;
  ${(props) =>
    props.singleFileMode
      ? "flex-direction: row; column-gap: var(--spacing-gap-xs);"
      : "flex-direction: column; row-gap: var(--spacing-gap-xs);"}
  margin-top: var(--spacing-gap-xs);
`;

const ValueInput = styled.input`
  display: none;
`;

const FileItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: var(--spacing-gap-xs);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: var(--spacing-gap-xs);
  margin-top: var(--spacing-gap-xs);
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
      ? "flex-direction: row; column-gap: var(--spacing-gap-s);"
      : "justify-content: center; flex-direction: column; row-gap: var(--spacing-gap-s); height: 160px;"}
  align-items: center;
  width: 320px;
  padding: ${(props) => (props.mode === "filedrop" ? `var(--spacing-padding-xxs)` : "var(--spacing-padding-m)")};
  overflow: hidden;
  border-radius: var(--border-radius-m);
  border-width: var(--border-width-s);
  border-style: var(--border-style-outline);
  border-color: var(--border-color-neutral-dark);
  ${(props) =>
    props.isDragging &&
    `
      background-color: var(--color-bg-secondary-lightest);
      border: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
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
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-m);
  font-weight: var(--typography-helper-text-regular);
`;

const FiledropLabel = styled.span<{ disabled: FileInputPropsType["disabled"] }>`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-m);
  font-weight: var(--typography-helper-text-regular);
`;

const DxcFileInput = forwardRef<RefType, FileInputPropsType>(
  (
    {
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
    },
    ref
  ): JSX.Element => {
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState<FileData[]>([]);
    const fileInputId = `file-input-${useId()}`;
    const translatedLabels = useContext(HalstackLanguageContext);

    const checkFileSize = (file: File) => {
      if (minSize && file.size < minSize) return translatedLabels.fileInput.fileSizeGreaterThanErrorMessage;
      else if (maxSize && file.size > maxSize) return translatedLabels.fileInput.fileSizeLessThanErrorMessage;
    };

    const getFilesToAdd = async (selectedFiles: File[]) => {
      const filesToAdd = await Promise.all(selectedFiles.map((selectedFile) => getFilePreview(selectedFile))).then(
        (previews: string[]) =>
          selectedFiles.map((file, index) => {
            const fileInfo = {
              file,
              error: checkFileSize(file),
              preview: previews[index],
            };
            return fileInfo;
          })
      );
      return filesToAdd.filter((file) => !isFileIncluded(file, files));
    };

    const addFile = async (selectedFiles: File[]) => {
      const filesToAdd = await getFilesToAdd(
        multiple ? selectedFiles : selectedFiles.length === 1 ? selectedFiles : [selectedFiles[0] as File]
      );
      const finalFiles = multiple ? [...files, ...filesToAdd] : filesToAdd;
      callbackFile?.(finalFiles);
    };

    const selectFiles = (e: ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = e.target.files;
      if (selectedFiles) {
        const filesArray = Array.from(selectedFiles);
        addFile(filesArray);
        e.target.value = "";
      }
    };

    const onDelete = useCallback(
      (fileName: string) => {
        const filesCopy = [...files];
        const fileToRemove = filesCopy.find((file) => file.file.name === fileName);
        if (fileToRemove) {
          const fileIndex = filesCopy.indexOf(fileToRemove);
          filesCopy.splice(fileIndex, 1);
          callbackFile?.(filesCopy);
        }
      },
      [files, callbackFile]
    );

    const handleClick = () => {
      document.getElementById(fileInputId)?.click();
    };
    const handleDrag = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const handleDragIn = (e: DragEvent<HTMLDivElement>) => {
      if (e.dataTransfer.items.length > 0) {
        setIsDragging(true);
      }
    };
    const handleDragOut = (e: DragEvent<HTMLDivElement>) => {
      // only if dragged items leave container (outside, not to children)
      if (!e.currentTarget.contains(e.relatedTarget as HTMLDivElement)) {
        setIsDragging(false);
      }
    };
    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      const filesObject = e.dataTransfer.files;
      if (filesObject.length > 0) {
        const filesArray = Array.from(filesObject);
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
              size={{ width: "fitContent", height: "medium" }}
              tabIndex={tabIndex}
            />
            {files.length > 0 && (
              <FileItemListContainer role="list">
                {files.map((file, index) => (
                  <FileItem
                    fileName={file.file.name}
                    error={file.error}
                    singleFileMode={!multiple && files.length === 1}
                    showPreview={mode === "file" && !multiple ? false : showPreview}
                    preview={file.preview ?? ""}
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
                size={{ width: "fitContent", height: "medium" }}
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
              <FileItemListContainer role="list">
                {files.map((file, index) => (
                  <FileItem
                    fileName={file.file.name}
                    error={file.error}
                    singleFileMode={false}
                    showPreview={showPreview}
                    preview={file.preview ?? ""}
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
      </FileInputContainer>
    );
  }
);

export default DxcFileInput;
