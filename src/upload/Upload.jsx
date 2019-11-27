/* eslint-disable no-param-reassign */
import React, { useState } from "react";
import styled from "styled-components";
import "../common/OpenSans.css";
import PropTypes from "prop-types";
import DragAndDropArea from "./dragAndDropArea/DragAndDropArea";
import FilesToUpload from "./files-upload/FilesToUpload";
import Transactions from "./transactions/Transactions";

const DxcUpload = ({ callbackUpload }) => {
  const [files, setFiles] = useState([]);

  const getFilesToUpload = () => {
    return files
      .filter(file => file.status === "pending")
      .map(file => {
        const fileInfo = { name: file.name, type: file.type, image: file.image, status: file.status };
        fileInfo.deleteFile = () => {
          const uploadFiles = [];
          files.forEach(item => uploadFiles.push(item));
          const fileIndex = uploadFiles.indexOf(file, 0);
          if (fileIndex > -1) {
            uploadFiles.splice(fileIndex, 1);
            setFiles(uploadFiles);
          }
        };
        return fileInfo;
      });
  };

  const getTransactionsFiles = () => {
    return files
      .filter(file => file.status === "success" || file.status === "error" || file.status === "processing")
      .map(file => {
        return { name: file.name, type: file.type, image: file.image, status: file.status };
      });
  };

  const getFilePreview = file => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
        resolve(e.target.result);
      };
    });
  };

  const onDragHandler = filesToAdd => {
    setFiles([
      ...files,
      ...filesToAdd.map(file => {
        const fileToAdd = {
          status: "pending",
          name: file.name,
          type: file.type
        };
        return fileToAdd;
      })
    ]);

    Promise.all(filesToAdd.map(fileToAdd => getFilePreview(fileToAdd))).then(previews => {
      setFiles([
        ...files,
        ...filesToAdd.map((file, index) => {
          const fileToAdd = {
            status: "pending",
            name: file.name,
            type: file.type,
            image: previews[index]
          };
          return fileToAdd;
        })
      ]);
    });
  };

  const onUploadHandler = () => {
    let uploadedFiles = [];
    files.forEach(file => {
      uploadedFiles = [...uploadedFiles, file];
    });
    uploadedFiles.forEach(file => {
      if (file.status === "pending") {
        file.status = "processing";
        callbackUpload(file)
          .then(() => {
            file.status = "success";
            uploadedFiles = getTransactionsFiles();
            setFiles(uploadedFiles);
          })
          .catch(err => {
            file.status = "error";
            file.message = err;
            uploadedFiles = getTransactionsFiles();
            setFiles(uploadedFiles);
          })
          .finally();
      }
      setFiles(uploadedFiles);
    });
  };

  const filesToUpload = getFilesToUpload();
  const transactionFiles = getTransactionsFiles();

  return (
    <DXCUpload>
      {transactionFiles && transactionFiles.length !== 0 && <Transactions transactions={transactionFiles} />}
      {(filesToUpload && filesToUpload.length === 0 && transactionFiles && transactionFiles.length === 0 && (
        <DragAndDropArea dashed={false} addFile={onDragHandler} />
      )) ||
        (filesToUpload && filesToUpload.length === 0 && transactionFiles && transactionFiles.length !== 0 && (
          <DragAndDropArea dashed addFile={onDragHandler} />
        ))}

      {filesToUpload && filesToUpload.length !== 0 && (
        <FilesToUpload filesToUpload={filesToUpload} addFile={onDragHandler} onUpload={onUploadHandler} />
      )}
    </DXCUpload>
  );
};

DxcUpload.propTypes = {
  callbackUpload: PropTypes.func
};

const DXCUpload = styled.div`
  font-family: "Open Sans", sans-serif;
  max-width: 100%;
  height: 400px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
`;

export default DxcUpload;
