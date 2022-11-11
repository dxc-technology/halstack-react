import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { DxcFlex } from "../main";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import { FileItemProps } from "./types";

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
  fileName = "",
  error = "",
  singleFileMode,
  showError,
  showPreview,
  preview,
  type,
  onDelete,
  tabIndex,
}: FileItemProps): JSX.Element => {
  const colorsTheme = useTheme();
  const translatedLabels = useTranslatedLabels();

  const getIconAriaLabel = () => {
    if (type.includes("video")) return "video";
    else if (type.includes("audio")) return "audio";
    else return "file";
  };

  return (
    <ThemeProvider theme={colorsTheme.fileInput}>
      <MainContainer error={error} singleFileMode={singleFileMode} showPreview={showPreview}>
        {showPreview &&
          (type.includes("image") ? (
            <ImagePreview src={preview} alt={fileName} />
          ) : (
            <IconPreview error={error} aria-label={getIconAriaLabel()}>
              {preview}
            </IconPreview>
          ))}
        <FileItemContent>
          <DxcFlex alignItems="center">
            <FileName>{fileName}</FileName>
            {error && <ErrorIcon>{errorIcon}</ErrorIcon>}
            <DeleteFileAction
              onClick={() => {
                onDelete(fileName);
              }}
              title={translatedLabels.fileInput.deleteFileActionTitle}
              aria-label={translatedLabels.fileInput.deleteFileActionTitle}
              tabIndex={tabIndex}
            >
              {deleteIcon}
            </DeleteFileAction>
          </DxcFlex>
          {error && showError && <ErrorMessage>{error}</ErrorMessage>}
        </FileItemContent>
      </MainContainer>
    </ThemeProvider>
  );
};

const MainContainer = styled.div<{ error: string; singleFileMode: boolean; showPreview: boolean; }>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  gap: 12px;
  width: ${(props) => props.singleFileMode ? "230px" : "320px"};
  padding: ${(props) =>
    props.showPreview
      ? `calc(8px - ${props.theme.fileItemBorderThickness})`
      : `calc(8px - ${props.theme.fileItemBorderThickness}) calc(8px - ${props.theme.fileItemBorderThickness}) calc(8px - ${props.theme.fileItemBorderThickness}) 16px`};
  ${(props) => (props.error ? `background-color: ${props.theme.errorFileItemBackgroundColor};` : "")};
  border-color: ${(props) => (props.error ? props.theme.errorFileItemBorderColor : props.theme.fileItemBorderColor)};
  border-width: ${(props) => props.theme.fileItemBorderThickness};
  border-style: ${(props) => props.theme.fileItemBorderStyle};
  border-radius: ${(props) => props.theme.fileItemBorderRadius};
`;

const ImagePreview = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 2px;
  object-fit: contain;
`;

const IconPreview = styled.span<{ error: string }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.error ? props.theme.errorFilePreviewBackgroundColor : props.theme.filePreviewBackgroundColor};
  width: 48px;
  height: 48px;
  padding: 15px;
  border-radius: 2px;
  color: ${(props) => (props.error ? props.theme.errorFilePreviewIconColor : props.theme.filePreviewIconColor)};

  svg {
    height: 18px;
    width: 18px;
  }
`;

const FileItemContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 0;
`;

const FileName = styled.span`
  flex-grow: 1;
  color: ${(props) => props.theme.fileNameFontColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${(props) => props.theme.fileItemFontFamily};
  font-size: ${(props) => props.theme.fileItemFontSize};
  font-weight: ${(props) => props.theme.fileItemFontWeight};
  line-height: ${(props) => props.theme.fileItemLineHeight};
`;

const ErrorIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;  
  margin-left: 0.25rem;
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
  margin-left: 0.25rem;
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
  &:focus,
  &:focus-visible {
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
