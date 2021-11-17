import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme.js";

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

const FileItem = ({ mode, multiple, name = "", error = "", showPreview, preview, type, numFiles, onDelete }) => {
  const colorsTheme = useTheme();
  const isImage = type.includes("image");

  return (
    <ThemeProvider theme={colorsTheme.fileInput}>
      <Container mode={mode} multiple={multiple} error={error} showPreview={showPreview} numFiles={numFiles}>
        {showPreview &&
          (isImage ? (
            <ImagePreview src={preview} />
          ) : (
            <IconPreviewContainer error={error}>
              <IconPreview error={error}>{preview}</IconPreview>
            </IconPreviewContainer>
          ))}
        <FileItemContent>
          <FileItemContainer>
            <FileName mode={mode} multiple={multiple} error={error} showPreview={showPreview} numFiles={numFiles}>
              {name}
            </FileName>
            {error && <ErrorIcon aria-label="Error">{errorIcon}</ErrorIcon>}
            <DeleteIcon onClick={() => onDelete(name)} aria-label="Remove">
              {deleteIcon}
            </DeleteIcon>
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
  padding: ${(props) => (props.showPreview ? "8px" : "8px 8px 8px 16px")};
  background-color: ${(props) => props.error && props.theme.errorFileItemBackgroundColor};
  border-radius: ${(props) => props.theme.fileItemBorderRadius};
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
  border-color: ${(props) => (props.error ? props.theme.errorFileItemBorderColor : props.theme.fileItemBorderColor)};
  border-width: ${(props) => props.theme.fileItemBorderThickness};
  border-style: ${(props) => props.theme.fileItemBorderStyle};
  display: flex;
  justify-content: center;
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
  margin-right: 12px;
  border-radius: 2px;
`;

const IconPreviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  background-color: ${(props) =>
    props.error ? props.theme.errorFileItemIconBackgroundColor : props.theme.fileItemIconBackgroundColor};
  width: 48px;
  height: 48px;
  border-radius: 2px;
  color: ${(props) => (props.error ? props.theme.errorFileItemIconColor : props.theme.fileItemIconColor)};
`;

const IconPreview = styled.div``;

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

const DeleteIcon = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 24px;
  width: 24px;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fontFamily};
  border: 1px solid transparent;
  border-radius: 4px;
  margin-left: 4px;
  background-color: transparent;
  padding: 3px;
  cursor: pointer;
  svg {
    line-height: 18px;
  }
`;

const ErrorMessage = styled.span`
  color: ${(props) => props.theme.errorMessageFontColor};
  font-family: ${(props) => props.theme.errorMessageFontFamily};
  font-size: ${(props) => props.theme.errorMessageFontSize};
  font-weight: ${(props) => props.theme.errorMessageFontWeight};
  line-height: ${(props) => props.theme.errorMessageLineHeight};
`;

FileItem.propTypes = {
  mode: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
  showPreview: PropTypes.boolean,
  numFiles: PropTypes.number,
  preview: PropTypes.string,
  error: PropTypes.string,
  onDelete: PropTypes.func,
};

export default FileItem;
