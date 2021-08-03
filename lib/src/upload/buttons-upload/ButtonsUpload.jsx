/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import Button from "../../button/Button";
import uploadIcon from "./upload-button.svg";
import dragAndDropIcon from "./drag-drop-icon.svg";
import useTheme from "../../useTheme.js";
import { BackgroundColorProvider } from "../../BackgroundColorContext.js";

const DxcButtonsUpload = ({ addFile, onUpload }) => {
  const colorsTheme = useTheme();

  const selectFile = (e) => {
    const filesObject = e.target.files;
    if (filesObject && filesObject.length > 0) {
      const filesArray = Object.keys(filesObject).map((key) => filesObject[key]);
      addFile(filesArray);
    }
  };

  const handleClick = () => {
    document.getElementById("chooseFiles").click();
  };

  return (
    <ThemeProvider theme={colorsTheme.upload}>
      <BackgroundColorProvider color={colorsTheme.upload.backgroundColor}>
        <DXCButtonsUpload>
          <DragAndDropLabel>
            <DragAndDropIcon />
            Drag and Drop area
          </DragAndDropLabel>
          <Button margin={{ right: "small" }} mode="text" label="CHOOSE FILES" onClick={handleClick} />
          <input id="chooseFiles" type="file" multiple onChange={selectFile} style={{ display: "none" }} />
          <Button label="UPLOAD" iconPosition="after" iconSrc={uploadIcon} onClick={onUpload} />
        </DXCButtonsUpload>
      </BackgroundColorProvider>
    </ThemeProvider>
  );
};

DxcButtonsUpload.propTypes = {
  addFile: PropTypes.func,
  onUpload: PropTypes.func,
};

const DXCButtonsUpload = styled.div`
  margin-right: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const DragAndDropLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.dragAndDropAreaTextFontSize};
  font-style: ${(props) => props.theme.dragAndDropAreaTextFontStyle};
  font-weight: ${(props) => props.theme.dragAndDropAreaTextFontWeight};
  text-transform: ${(props) => props.theme.dragAndDropAreaTextFontTextTransform};
  color: ${(props) => props.theme.dragAndDropAreaTextFontColor};
  margin-right: 50px;
`;

const DragAndDropIcon = styled.div`
  background-color: ${(props) => props.theme.dragAndDropAreaIconColor};
  mask: url(${dragAndDropIcon}) no-repeat center;
  mask-size: ${(props) => `${props.theme.dragAndDropAreaIconSize} ${props.theme.dragAndDropAreaIconSize}`};
  height: ${(props) => props.theme.dragAndDropAreaIconSize};
  width: ${(props) => props.theme.dragAndDropAreaIconSize};
  margin-right: 5px;
`;

export default DxcButtonsUpload;
