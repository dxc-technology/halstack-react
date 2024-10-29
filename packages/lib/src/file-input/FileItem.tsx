import { memo } from "react";
import styled, { ThemeProvider } from "styled-components";
import DxcFlex from "../flex/Flex";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import { FileItemProps } from "./types";
import DxcIcon from "../icon/Icon";
import DxcActionIcon from "../action-icon/ActionIcon";

const FileItem = ({
  fileName = "",
  error = "",
  singleFileMode,
  showPreview,
  preview,
  type,
  onDelete,
  tabIndex,
}: FileItemProps): JSX.Element => {
  const colorsTheme = useTheme();
  const translatedLabels = useTranslatedLabels();

  const getIconAriaLabel = () => (type.includes("video") ? "video" : type.includes("audio") ? "audio" : "file");

  return (
    <ThemeProvider theme={colorsTheme?.fileInput}>
      <MainContainer error={error} singleFileMode={singleFileMode} showPreview={showPreview}>
        {showPreview &&
          (type.includes("image") ? (
            <ImagePreview src={preview} alt={fileName} />
          ) : (
            <IconPreview error={error} role="document" aria-label={getIconAriaLabel()}>
              <DxcIcon icon={preview} />
            </IconPreview>
          ))}
        <FileItemContent>
          <FileName>{fileName}</FileName>
          <DxcFlex gap="0.25rem">
            {error && (
              <ErrorIcon>
                <DxcIcon icon="filled_error" />
              </ErrorIcon>
            )}
            <DxcActionIcon
              onClick={() => onDelete(fileName)}
              icon="close"
              tabIndex={tabIndex}
              title={translatedLabels?.fileInput?.deleteFileActionTitle ?? ""}
            />
          </DxcFlex>
          {error && !singleFileMode && (
            <ErrorMessage role="alert" aria-live="assertive">
              {error}
            </ErrorMessage>
          )}
        </FileItemContent>
      </MainContainer>
    </ThemeProvider>
  );
};

const MainContainer = styled.div<{
  error: FileItemProps["error"];
  singleFileMode: FileItemProps["singleFileMode"];
  showPreview: FileItemProps["showPreview"];
}>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  width: ${(props) => (props.singleFileMode ? "230px" : "320px")};
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

const IconPreview = styled.span<{ error: FileItemProps["error"] }>`
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
  font-size: 18px;
  svg {
    height: 18px;
    width: 18px;
  }
`;

const FileItemContent = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: auto min-content;
  grid-template-rows: min-content auto;
  column-gap: 0.25rem;
`;

const FileName = styled.span`
  align-self: center;
  color: ${(props) => props.theme.fileNameFontColor};
  font-family: ${(props) => props.theme.fileItemFontFamily};
  font-size: ${(props) => props.theme.fileItemFontSize};
  font-weight: ${(props) => props.theme.fileItemFontWeight};
  line-height: ${(props) => props.theme.fileItemLineHeight};
  white-space: pre;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ErrorIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 3px;
  height: 18px;
  width: 18px;
  font-size: 18px;
  color: #d0011b;
`;

const ErrorMessage = styled.span`
  color: ${(props) => props.theme.errorMessageFontColor};
  font-family: ${(props) => props.theme.errorMessageFontFamily};
  font-size: ${(props) => props.theme.errorMessageFontSize};
  font-weight: ${(props) => props.theme.errorMessageFontWeight};
  line-height: ${(props) => props.theme.errorMessageLineHeight};
`;

export default memo(FileItem);
