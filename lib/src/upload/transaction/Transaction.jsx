import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import "../../common/OpenSans.css";
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
import { colors } from "../../common/variables.js";
import ThemeContext from "../../ThemeContext.js";

const DxcTransaction = ({ name = "", type = "", status = "", message = "" }) => {
  const colorsTheme = useContext(ThemeContext) || colors;
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
    <ThemeProvider theme={colorsTheme}>
      <DXCTransaction status={status}>
        <FileImage src={icon} />
        {(status === "processing" && (
          <Prueba>
            <FileName>{name}</FileName>
            <Spinner mode="small" />
          </Prueba>
        )) ||
          (status === "success" && (
            <Prueba>
              <FileName>{name}</FileName>
              <FileStatus status={status} />
            </Prueba>
          )) ||
          (status === "error" && (
            <Prueba>
              <Tooltip title={message}>
                <FileName>{name}</FileName>
              </Tooltip>
              <FileStatus status={status} />
            </Prueba>
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
  font-family: "Open Sans", sans-serif;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  color: ${(props) => props.status === "error" && `${props.theme.red}`};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  .MuiCircularProgress-root {
    width: 28px !important;
    height: 28px !important;
  }
`;

const FileImage = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 16px;
  svg {
    fill: ${(props) => (props.status === "error" && "#D0011B") || `${props.theme.lightGrey}`};
  }
`;

const Prueba = styled.div`
  display: flex;
  flex-direction: row;
`;

const FileName = styled.div`
  margin-right: 16px;
`;

const FileStatus = styled.div`
  width: 25px;
  height: 20px;
  background: ${(props) =>
    (props.status === "success" && `url('${successIcon}') no-repeat padding-box`) ||
    (props.status === "error" && `url('${errorIcon}') no-repeat padding-box`)};
`;

export default DxcTransaction;
