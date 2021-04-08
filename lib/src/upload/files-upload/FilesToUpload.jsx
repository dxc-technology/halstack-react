import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "../../common/OpenSans.css";
import PropTypes from "prop-types";
import FileToUpload from "../file-upload/FileToUpload";
import ButtonsUpload from "../buttons-upload/ButtonsUpload";
import useTheme from "../../useTheme.js";

const DxcFilesToUpload = ({ filesToUpload, onUpload, addFile }) => {
  const colorsTheme = useTheme();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const filesObject = e.dataTransfer.files;
    if (filesObject && filesObject.length > 0) {
      const filesArray = Object.keys(filesObject).map((key) => filesObject[key]);
      addFile(filesArray);
      e.dataTransfer.clearData();
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.upload}>
      <DXCFilesToUpload
        onDrop={handleDrop}
        onDragEnter={handleDragIn}
        onDragOver={handleDrag}
        onDragLeave={handleDragOut}
      >
        <FilesToUpload>
          {filesToUpload.map((fileToUpload) => {
            return (
              <FileToUpload
                name={fileToUpload.name}
                type={fileToUpload.type}
                image={fileToUpload.image}
                onDelete={fileToUpload.deleteFile}
              />
            );
          })}
        </FilesToUpload>
        <ButtonsUpload addFile={addFile} onUpload={onUpload} />
      </DXCFilesToUpload>
    </ThemeProvider>
  );
};

DxcFilesToUpload.propTypes = {
  filesToUpload: PropTypes.array,
  addFile: PropTypes.func,
  onUpload: PropTypes.func,
};

const DXCFilesToUpload = styled.div`
  font-family: "Open Sans", sans-serif;
  width: 100%;
  padding: 20px;
  border-radius: 4px 4px 0px 4px;
  box-shadow: 0px 0px 1px ${(props) => props.theme.shadowColor};
`;

const FilesToUpload = styled.div`
  height: 83%;
  overflow: auto;
  margin-top: 2px;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: ${(props) => props.theme.scrollBarTrackColor};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: ${(props) => props.theme.scrollBarThumbColor};
  }
`;

export default DxcFilesToUpload;
