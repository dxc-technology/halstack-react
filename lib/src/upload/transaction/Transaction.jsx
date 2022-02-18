import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import {
  successIcon,
  errorIcon,
  defaultIcon,
  imageIcon,
  videoIcon,
  audioIcon,
  defaultIconError,
  imageIconError,
  videoIconError,
  audioIconError,
} from "./Icons";
import Spinner from "../../spinner/Spinner";
import useTheme from "../../useTheme";
import { BackgroundColorProvider } from "../../BackgroundColorContext";

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
        <FileImage status={status}>{icon}</FileImage>
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
              <FileStatus>{successIcon}</FileStatus>
            </FileData>
          )) ||
          (status === "error" && (
            <FileData>
              <Tooltip title={message}>
                <FileName>{name}</FileName>
              </Tooltip>
              <FileStatus>{errorIcon}</FileStatus>{" "}
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
  mask-size: ${(props) => `${props.theme.uploadedFileIconSize} ${props.theme.uploadedFileIconSize}`};
  height: ${(props) => props.theme.uploadedFileIconSize};
  width: ${(props) => props.theme.uploadedFileIconSize};
  margin-right: 16px;
  max-width: 20%;
  & svg {
    fill: ${(props) => (props.status === "error" && props.theme.errorColor) || props.theme.uploadedFileIconColor};
  }
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
