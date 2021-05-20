/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import closeIcon from "./close.svg";
import defaultIcon from "./file-icon.svg";
import videoIcon from "./video-icon.svg";
import audioIcon from "./audio-icon.svg";
import useTheme from "../../useTheme.js";

const DxcFileToUpload = ({ name = "", type = "", image, onDelete, tabIndexValue }) => {
  const icon = (type.includes("video") && videoIcon) || (type.includes("audio") && audioIcon) || defaultIcon;
  const hasImage = image && image.includes("image");
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.upload}>
      <DXCFileToUpload>
        <FileContent>
          {(hasImage && <FileImage src={image} />) || <FileImage src={icon} />}
          <FileInfo>
            <FileName>{name}</FileName>
            <FileType>{type}</FileType>
          </FileInfo>
          <DeleteFile className="delete-file" onClick={onDelete} tabIndex={tabIndexValue} />
        </FileContent>
      </DXCFileToUpload>
    </ThemeProvider>
  );
};

DxcFileToUpload.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  onDelete: PropTypes.func,
};

const DXCFileToUpload = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  max-width: 100%;
  height: 52px;
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
  padding-top: 25px;
  border-bottom: 1px solid ${(props) => props.theme.accentColor};
  :hover {
    background: ${(props) => props.theme.fileHoverColor};
  }
`;

const FileContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
  margin-left: 40px;
`;

const FileImage = styled.img`
  margin-right: 30px;
  width: 70px;
  height: 52px;
  object-fit: contain;
`;

const FileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const FileName = styled.div`
  font-size: ${(props) => props.theme.fileNameFontSize};
  font-style: ${(props) => props.theme.fileNameFontStyle};
  font-weight: ${(props) => props.theme.fileNameFontWeight};
  text-transform: ${(props) => props.theme.fileNameFontTextTransform};
  color: ${(props) => props.theme.fileNameFontColor};
  margin-bottom: 12px;
`;

const FileType = styled.div`
  font-size: ${(props) => props.theme.fileTypeFontSize};
  font-style: ${(props) => props.theme.fileTypeFontStyle};
  font-weight: ${(props) => props.theme.fileTypeFontWeight};
  text-transform: ${(props) => props.theme.fileTypeFontTextTransform};
  color: ${(props) => props.theme.fileTypeFontColor};
`;

const DeleteFile = styled.button`
  background-color: ${(props) => props.theme.fileDeleteIconColor};
  mask: url(${closeIcon}) no-repeat center;
  mask-size: ${(props) => `${props.theme.fileDeleteIconWidth} ${props.theme.fileDeleteIconHeight}`};
  height: ${(props) => props.theme.fileDeleteIconHeight};
  width: ${(props) => props.theme.fileDeleteIconWidth};
  border: none;
  display: flex;
  margin-right: 30px;
  margin-top: 11px;
  &:focus {
    visibility: visible;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default DxcFileToUpload;
