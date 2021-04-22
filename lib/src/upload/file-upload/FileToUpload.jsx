/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import "../../common/OpenSans.css";
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
    cursor: pointer;
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

const FileName = styled.div`
  margin-bottom: 12px;
  font-size: ${(props) => props.theme.fontSize16};
  `;

const FileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const FileType = styled.div`
  text-transform: ${(props) => props.theme.fontTextTransform};
  font-size: ${(props) => props.theme.fontSize12};

  color: ${(props) => props.theme.fontColor};
`;

const DeleteFile = styled.button`
  border: none;
  display: flex;
  margin-right: 30px;
  background: url("${closeIcon}") no-repeat padding-box;
  width: 30px;
  height: 30px;
  margin-top: 11px;
  &:focus {
    visibility: visible;
  }
`;

export default DxcFileToUpload;
