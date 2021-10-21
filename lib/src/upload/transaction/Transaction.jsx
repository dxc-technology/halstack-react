import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import successIcon from "./success-icon.svg";
import errorIcon from "./error-icon.svg";
import defaultIcon from "./file-icon.svg";
import imageIcon from "./image-icon.svg";
import videoIcon from "./video-icon.svg";
import audioIcon from "./audio-icon.svg";
import defaultIconError from "./file-icon-err.svg";
import imageIconError from "./image-icon-err.svg";
import videoIconError from "./video-icon-err.svg";
import audioIconError from "./audio-icon-err.svg";
import Spinner from "../../spinner/Spinner";
import useTheme from "../../useTheme.js";
import { BackgroundColorProvider } from "../../BackgroundColorContext.js";

const DxcTransaction = ({ name = "", type = "", status = "", message = "" }) => {
  const colorsTheme = useTheme();
  const icon =
    (status === "error" &&
      ((type.includes("image") && imageIconError) ||
        (type.includes("video") && videoIconError) ||
        (type.includes("audio") && audioIconError) ||
        defaultIconError)) ||
    (type.includes("image") && imageIcon) ||
    (type.includes("video") && videoIcon) ||
    (type.includes("audio") && audioIcon) ||
    defaultIcon;

  return (
    <ThemeProvider theme={colorsTheme.upload}>
      <DXCTransaction status={status}>
        <FileImage status={status} img={icon} />
        {(status === "processing" && (
          <FileData>
            <FileName>{name}</FileName>
            <BackgroundColorProvider color={colorsTheme.upload.backgroundColor}>
              <Spinner mode="small" />
            </BackgroundColorProvider>
          </FileData>
        )) ||
          (status === "success" && (
            <FileData>
              <FileName>{name}</FileName>
              <FileStatus status={status} />
            </FileData>
          )) ||
          (status === "error" && (
            <FileData>
              <Tooltip title={message}>
                <FileName>{name}</FileName>
              </Tooltip>
              <FileStatus status={status} />
            </FileData>
          ))}
      </DXCTransaction>
    </ThemeProvider>
  );
};

DxcTransaction.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  status: PropTypes.string,
  message: PropTypes.string,
};

const DXCTransaction = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  max-width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  color: ${(props) => props.status === "error" && props.theme.errorColor};
  .MuiCircularProgress-root {
    width: 28px !important;
    height: 28px !important;
  }
`;

const FileImage = styled.div`
  background-color: ${(props) =>
    (props.status === "error" && props.theme.errorColor) || props.theme.uploadedFileIconColor};
  mask: url(${(props) => props.img}) no-repeat center;
  mask-size: ${(props) => `${props.theme.uploadedFileIconSize} ${props.theme.uploadedFileIconSize}`};
  height: ${(props) => props.theme.uploadedFileIconSize};
  width: ${(props) => props.theme.uploadedFileIconSize};
  margin-right: 16px;
  max-width: 20%;
`;

const FileName = styled.div`
  font-size: ${(props) => props.theme.fileNameFontSize};
  font-style: ${(props) => props.theme.fileNameFontStyle};
  font-weight: ${(props) => props.theme.fileNameFontWeight};
  text-transform: ${(props) => props.theme.fileNameFontTextTransform};
  color: ${(props) => props.theme.fileNameFontColor};
  margin-right: 16px;
  width: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const FileStatus = styled.div`
  background: ${(props) =>
    (props.status === "success" && `url('${successIcon}') no-repeat padding-box`) ||
    (props.status === "error" && `url('${errorIcon}') no-repeat padding-box`)};
  width: 25px;
  height: 20px;
  max-width: 20%;
`;

const FileData = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
`;

export default DxcTransaction;
