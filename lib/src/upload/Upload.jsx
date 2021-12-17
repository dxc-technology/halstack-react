/* eslint-disable no-param-reassign */
import React, { useState } from "react";
import styled from "styled-components";

import PropTypes from "prop-types";
import DragAndDropArea from "./dragAndDropArea/DragAndDropArea";
import FilesToUpload from "./files-upload/FilesToUpload";
import Transactions from "./transactions/Transactions";
import { spaces } from "../common/variables.js";

const V3DxcUpload = ({ callbackUpload, margin, tabIndex = 0 }) => {
  const [files, setFiles] = useState([]);

  const getFilesToUpload = () => {
    return files
      .filter((file) => file.status === "pending")
      .map((file) => {
        const fileInfo = { name: file.name, type: file.type, image: file.image, status: file.status };
        fileInfo.deleteFile = () => {
          const uploadFiles = [];
          files.forEach((item) => uploadFiles.push(item));
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
      .filter((file) => file.status === "success" || file.status === "error" || file.status === "processing")
      .map((file) => {
        return { name: file.name, type: file.type, image: file.image, status: file.status };
      });
  };

  const getFilePreview = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        resolve(e.target.result);
      };
    });
  };

  const onDragHandler = (filesToAdd) => {
    setFiles([
      ...files,
      ...filesToAdd.map((file) => {
        const fileToAdd = {
          status: "pending",
          name: file.name,
          type: file.type,
        };
        return fileToAdd;
      }),
    ]);

    Promise.all(filesToAdd.map((fileToAdd) => getFilePreview(fileToAdd))).then((previews) => {
      setFiles([
        ...files,
        ...filesToAdd.map((file, index) => {
          const fileToAdd = {
            status: "pending",
            name: file.name,
            type: file.type,
            image: previews[index],
          };
          return fileToAdd;
        }),
      ]);
    });
  };

  const onUploadHandler = () => {
    let uploadedFiles = [];
    files.forEach((file) => {
      uploadedFiles = [...uploadedFiles, file];
    });
    uploadedFiles.forEach((file) => {
      if (file.status === "pending") {
        file.status = "processing";
        if (typeof callbackUpload === "function") {
          callbackUpload(file)
            .then(() => {
              file.status = "success";
              uploadedFiles = getTransactionsFiles();
              setFiles(uploadedFiles);
            })
            .catch((err) => {
              file.status = "error";
              file.message = err;
              uploadedFiles = getTransactionsFiles();
              setFiles(uploadedFiles);
            })
            .finally();
        }
      }
      setFiles(uploadedFiles);
    });
  };

  const filesToUpload = getFilesToUpload();
  const transactionFiles = getTransactionsFiles();

  return (
    <DXCUpload margin={margin}>
      {transactionFiles && transactionFiles.length !== 0 && (
        <Transactions tabIndexValue={tabIndex} transactions={transactionFiles} />
      )}
      {(filesToUpload && filesToUpload.length === 0 && transactionFiles && transactionFiles.length === 0 && (
        <DragAndDropArea dashed={false} addFile={onDragHandler} tabIndexValue={tabIndex} />
      )) ||
        (filesToUpload && filesToUpload.length === 0 && transactionFiles && transactionFiles.length !== 0 && (
          <DragAndDropArea dashed addFile={onDragHandler} tabIndexValue={tabIndex} />
        ))}
      {filesToUpload && filesToUpload.length !== 0 && (
        <FilesToUpload
          filesToUpload={filesToUpload}
          addFile={onDragHandler}
          onUpload={onUploadHandler}
          tabIndexValue={tabIndex}
        />
      )}
    </DXCUpload>
  );
};

V3DxcUpload.propTypes = {
  callbackUpload: PropTypes.func,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  tabIndex: PropTypes.number,
};

const DXCUpload = styled.div`
  max-width: 100%;
  height: 400px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
`;

export default V3DxcUpload;
