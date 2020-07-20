/* eslint-disable no-undef */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import "../../common/OpenSans.css";
import Button from "../../button/Button";
import uploadIcon from "./upload-button.svg";
import dragAndDropIcon from "./drag-drop-icon.svg";
import { colors } from "../../common/variables.js";
import ThemeContext from "../../ThemeContext.js";

const DxcButtonsUpload = ({ addFile, onUpload }) => {
  const colorsTheme = useContext(ThemeContext) || colors;

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
    <ThemeProvider theme={colorsTheme}>
      <DXCButtonsUpload>
        <DragAndDropLabel>
          <DragAndDropIcon />
          Drag and Drop area
        </DragAndDropLabel>
        <Button style={{ marginRight: "30px" }} mode="flat" theme="light" label="CHOOSE FILES" onClick={handleClick} />
        <input id="chooseFiles" type="file" multiple onChange={selectFile} style={{ display: "none" }} />
        <Button
          mode="basic"
          theme="light"
          label="UPLOAD"
          iconPosition="after"
          iconSrc={uploadIcon}
          onClick={onUpload}
        />
      </DXCButtonsUpload>
    </ThemeProvider>
  );
};

DxcButtonsUpload.propTypes = {
  addFile: PropTypes.func,
  onUpload: PropTypes.func,
};

const DXCButtonsUpload = styled.div`
  font-family: "Open Sans", sans-serif;
  margin-right: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const DragAndDropLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-style: italic;
  font-size: 12px;
  color: ${(props) => props.theme.darkGrey};
  margin-right: 50px;
`;

const DragAndDropIcon = styled.div`
  background: url("${dragAndDropIcon}") no-repeat padding-box;
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

export default DxcButtonsUpload;
