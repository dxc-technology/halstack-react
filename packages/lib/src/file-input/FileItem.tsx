import { memo, useContext, useId } from "react";
import styled from "styled-components";
import DxcFlex from "../flex/Flex";
import { FileItemProps } from "./types";
import DxcIcon from "../icon/Icon";
import DxcActionIcon from "../action-icon/ActionIcon";
import { HalstackLanguageContext } from "../HalstackContext";

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
      ? `calc(var(--spacing-padding-xs) - var(--border-width-s))`
      : `calc(var(--spacing-padding-xs) - var(--border-width-s)) calc(var(--spacing-padding-xs) - var(--border-width-s)) calc(var(--spacing-padding-xs) - var(--border-width-s)) 16px`};
  ${(props) => props.error && `background-color: var(--color-bg-error-lightest)`};
  border-color: ${(props) => (props.error ? `var(--border-color-error-medium)` : `var(--border-color-neutral-light)`)};
  border-width: var(--border-width-s);
  border-style: var(--border-style-default);
  border-radius: var(--border-radius-s);
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
  background-color: ${(props) => (props.error ? `var(--color-bg-error-light) ` : `var(--color-bg-neutral-light)`)};
  width: 48px;
  height: 48px;
  padding: 15px;
  border-radius: 2px;
  color: ${(props) => (props.error ? `var(--color-fg-error-medium)` : `var(--color-fg-neutral-strong) `)};
  font-size: var(--height-xs);
  svg {
    width: 20px;
    height: var(--height-xs);
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
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-m);
  font-weight: var(--typography-helper-text-regular);
  white-space: pre;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ErrorIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 3px;
  width: 20px;
  height: var(--height-xs);
  font-size: var(--height-xs);
  color: var(--color-fg-error-medium);
`;

const ErrorMessage = styled.span`
  color: var(--color-fg-error-medium);
  font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-s);
  font-weight: var(--typography-helper-text-regular);
`;

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
  const translatedLabels = useContext(HalstackLanguageContext);
  const fileNameId = useId();

  return (
    <MainContainer error={error} role="listitem" singleFileMode={singleFileMode} showPreview={showPreview}>
      {showPreview &&
        (type.includes("image") ? (
          <ImagePreview src={preview} alt={fileName} />
        ) : (
          <IconPreview aria-labelledby={fileNameId} error={error} role="img">
            <DxcIcon icon={preview} />
          </IconPreview>
        ))}
      <FileItemContent>
        <FileName id={fileNameId}>{fileName}</FileName>
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
            title={translatedLabels.fileInput.deleteFileActionTitle}
          />
        </DxcFlex>
        {error && !singleFileMode && (
          <ErrorMessage role="alert" aria-live="assertive">
            {error}
          </ErrorMessage>
        )}
      </FileItemContent>
    </MainContainer>
  );
};

export default memo(FileItem);
