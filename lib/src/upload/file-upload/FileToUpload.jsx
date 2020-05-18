/* eslint-disable react/require-default-props */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import "../../common/OpenSans.css";
import styled, { ThemeProvider } from "styled-components";
import { colors } from "../../common/variables.js";
import closeIcon from "./close.svg";
import defaultIcon from "./file-icon.svg";
import videoIcon from "./video-icon.svg";
import audioIcon from "./audio-icon.svg";
import ThemeContext from "../../ThemeContext.js";

const DxcFileToUpload = ({ name = "", type = "", image, onDelete }) => {
  const icon = (type.includes("video") && videoIcon) || (type.includes("audio") && audioIcon) || defaultIcon;
  const hasImage = image && image.includes("image");
  const colorsTheme = useContext(ThemeContext) || colors;

  return (
    <ThemeProvider theme={colorsTheme}>
      <DXCFileToUpload>
        <FileContent>
          {(hasImage && <FileImage src={image} />) || <FileImage src={icon} />}
          <FileInfo>
            <FileName>{name}</FileName>
            <FileType>{type}</FileType>
          </FileInfo>
          <DeleteFile className="delete-file" onClick={onDelete} />
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
  font-family: "Open Sans", sans-serif;
  max-width: 100%;
  height: 52px;
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
  padding-top: 25px;
  border-bottom: 1px solid ${(props) => props.theme.lightGrey};
  :hover {
    cursor: pointer;
    background: ${(props) => props.theme.darkWhite};
    .delete-file {
      display: flex;
      margin-right: 30px;
      background: url('${closeIcon}') no-repeat padding-box;
      width: 30px;
      height: 30px;
      margin-top: 11px;
    }
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
  font-size: 16px;
`;

const FileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const FileType = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  color: ${(props) => props.theme.black}99;
`;

const DeleteFile = styled.div`
  display: none;
`;

export default DxcFileToUpload;
