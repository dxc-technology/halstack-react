import { memo, MouseEvent, useContext, useId, useState } from "react";
import styled from "@emotion/styled";
import DxcFlex from "../flex/Flex";
import { FileItemProps } from "./types";
import DxcIcon from "../icon/Icon";
import DxcActionIcon from "../action-icon/ActionIcon";
import { HalstackLanguageContext } from "../HalstackContext";
import { TooltipWrapper } from "../tooltip/Tooltip";

const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-gap-xs);
`;

const MainContainer = styled.div<{
  error: FileItemProps["error"];
  singleFileMode: FileItemProps["singleFileMode"];
  showPreview: FileItemProps["showPreview"];
}>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-m);
  width: ${(props) => (props.singleFileMode ? "230px" : "320px")};
  height: ${(props) => (props.singleFileMode || !props.showPreview) && "var(--height-m)"};
  padding: ${(props) =>
    props.showPreview && !props.singleFileMode
      ? `var(--spacing-padding-xs) var(--spacing-padding-s)`
      : `0px var(--spacing-padding-s)`};
  ${(props) => props.error && `background-color: var(--color-bg-error-lightest)`};
  border-color: ${(props) => (props.error ? `var(--border-color-error-medium)` : `var(--border-color-neutral-light)`)};
  border-width: ${(props) => (props.error ? `var(--border-width-m)` : `var(--border-width-s)`)};
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
  column-gap: var(--spacing-gap-s);
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

const ErrorMessageContainer = styled.div<{ singleFileMode: FileItemProps["singleFileMode"] }>`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-xs);
  color: var(--color-fg-error-medium);
  max-width: ${(props) => (props.singleFileMode ? "230px" : "320px")};
`;
const ErrorIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  font-size: var(--height-xs);
`;

const ErrorMessage = styled.div`
  display: block;
  color: var(--color-fg-error-medium);
  font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-s);
  font-weight: var(--typography-helper-text-regular);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  const [hasTooltip, setHasTooltip] = useState(false);
  const fileNameId = useId();

  const handleOnMouseEnter = (event: MouseEvent<HTMLSpanElement>) => {
    const text = event.currentTarget;
    setHasTooltip(text.scrollWidth > text.clientWidth);
  };

  return (
    <ListItem>
      <MainContainer error={error} singleFileMode={singleFileMode} showPreview={showPreview}>
        {showPreview &&
          (type.includes("image") ? (
            <ImagePreview src={preview} alt={`Preview of ${fileName}`} />
          ) : (
            <IconPreview aria-labelledby={fileNameId} error={error} role="img">
              <DxcIcon icon={preview} />
            </IconPreview>
          ))}
        <FileItemContent>
          <FileName id={fileNameId}>{fileName}</FileName>
          <DxcFlex>
            <DxcActionIcon
              onClick={() => onDelete(fileName)}
              icon="close"
              tabIndex={tabIndex}
              title={translatedLabels.fileInput.deleteFileActionTitle}
            />
          </DxcFlex>
        </FileItemContent>
      </MainContainer>
      {error && (
        <TooltipWrapper condition={hasTooltip} label={error}>
          <ErrorMessageContainer role="alert" aria-live="assertive" singleFileMode={singleFileMode}>
            <ErrorIcon>
              <DxcIcon icon="filled_error" />
            </ErrorIcon>
            <ErrorMessage onMouseEnter={handleOnMouseEnter}>{error}</ErrorMessage>
          </ErrorMessageContainer>
        </TooltipWrapper>
      )}
    </ListItem>
  );
};

export default memo(FileItem);
