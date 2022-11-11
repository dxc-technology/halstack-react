// @ts-nocheck
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";

const deleteIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
  </svg>
);

const errorIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);

const FileItem = ({
  mode,
  multiple,
  name = "",
  error = "",
  showPreview,
  preview,
  type,
  numFiles,
  onDelete,
  tabIndex,
}) => {
  const colorsTheme = useTheme();
  const translatedLabels = useTranslatedLabels();

  const getIconAriaLabel = () => {
    if (type.includes("video"))
      return "video";
    else if (type.includes("audio"))
      return "audio";
    else return "file";
  };

  return (
    <ThemeProvider theme={colorsTheme.fileInput}>
      <Container mode={mode} multiple={multiple} error={error} showPreview={showPreview} numFiles={numFiles}>
        {showPreview &&
          (type.includes("image") ? (
            <ImagePreview src={preview} alt={name} />
          ) : (
            <IconPreviewContainer error={error} aria-label={getIconAriaLabel()}>
              {preview}
            </IconPreviewContainer>
          ))}
        <FileItemContent>
          <FileItemContainer>
            <FileName mode={mode} multiple={multiple} error={error} showPreview={showPreview} numFiles={numFiles}>
              {name}
            </FileName>
            {error && <ErrorIcon>{errorIcon}</ErrorIcon>}
            <DeleteFileAction
              error={error}
              onClick={() => {
                onDelete(name);
              }}
              title={translatedLabels.fileInput.deleteFileActionTitle}
              aria-label={translatedLabels.fileInput.deleteFileActionTitle}
              tabIndex={tabIndex}
            >
              {deleteIcon}
            </DeleteFileAction>
          </FileItemContainer>
          {error && (multiple || numFiles > 1) && <ErrorMessage>{error}</ErrorMessage>}
        </FileItemContent>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  padding: ${(props) =>
    props.showPreview
      ? `calc(8px - ${props.theme.fileItemBorderThickness}) 8px`
      : `calc(8px - ${props.theme.fileItemBorderThickness}) 8px calc(8px - ${props.theme.fileItemBorderThickness}) 16px`};
  width: ${(props) =>
    props.mode === "file" && !props.multiple && props.numFiles === 1
      ? "calc(230px - 26px)"
      : !props.showPreview
      ? "calc(320px - 26px)"
      : props.showPreview && "calc(320px - 18px)"};
  min-height: ${(props) =>
    (props.mode === "file" && !props.multiple && props.numFiles === 1) || (!props.showPreview && !props.error)
      ? "calc(40px - 18px)"
      : !props.showPreview && props.error
      ? "calc(59px - 18px)"
      : "calc(64px - 18px)"};
  background-color: ${(props) => props.error && props.theme.errorFileItemBackgroundColor};
  border-color: ${(props) => (props.error ? props.theme.errorFileItemBorderColor : props.theme.fileItemBorderColor)};
  border-width: ${(props) => props.theme.fileItemBorderThickness};
  border-style: ${(props) => props.theme.fileItemBorderStyle};
  border-radius: ${(props) => props.theme.fileItemBorderRadius};
`;

const FileItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const FileItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ImagePreview = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 2px;
`;

const IconPreviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.error ? props.theme.errorFilePreviewBackgroundColor : props.theme.filePreviewBackgroundColor};
  width: 48px;
  height: 48px;
  border-radius: 2px;
  color: ${(props) => (props.error ? props.theme.errorFilePreviewIconColor : props.theme.filePreviewIconColor)};
`;

const FileName = styled.span`
  color: ${(props) => props.theme.fileNameFontColor};
  width: ${(props) =>
    props.mode === "file" && !props.multiple && props.error && props.numFiles === 1
      ? "calc(230px - 76px)"
      : props.mode === "file" && !props.multiple && !props.error && props.numFiles === 1
      ? "calc(230px - 50px)"
      : !props.showPreview && !props.error
      ? "calc(320px - 52px)"
      : !props.showPreview && props.error
      ? "calc(320px - 76px)"
      : props.showPreview && props.error
      ? "calc(320px - 128px)"
      : props.showPreview && !props.error && "calc(320px - 102px)"};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-family: ${(props) => props.theme.fileItemFontFamily};
  font-size: ${(props) => props.theme.fileItemFontSize};
  font-weight: ${(props) => props.theme.fileItemFontWeight};
  line-height: ${(props) => props.theme.fileItemLineHeight};
`;

const ErrorIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 3px;
  height: 18px;
  width: 18px;
  color: #d0011b;
`;

const DeleteFileAction = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 24px;
  width: 24px;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fontFamily};
  border: 1px solid transparent;
  border-radius: 2px;
  margin-left: 4px;
  background-color: transparent;
  box-shadow: 0 0 0 2px transparent;
  padding: 3px;
  cursor: pointer;
  color: ${(props) => props.theme.deleteFileItemColor};

  svg {
    line-height: 18px;
  }
  &:hover {
    background-color: ${(props) => props.theme.hoverDeleteFileItemBackgroundColor};
  }
  &:focus, &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.focusDeleteFileItemBorderColor};
  }
  &:active {
    background-color: ${(props) => props.theme.activeDeleteFileItemBackgroundColor};
  }
`;

const ErrorMessage = styled.span`
  color: ${(props) => props.theme.errorMessageFontColor};
  font-family: ${(props) => props.theme.errorMessageFontFamily};
  font-size: ${(props) => props.theme.errorMessageFontSize};
  font-weight: ${(props) => props.theme.errorMessageFontWeight};
  line-height: ${(props) => props.theme.errorMessageLineHeight};
`;

export default React.memo(FileItem);
