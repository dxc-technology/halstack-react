import React, { useState } from "react";
import styled from "styled-components";
import { DxcDialog, DxcButton } from "@dxc-technology/halstack-react";
import Mode from "../Mode";

const Dialog = () => {
  const [isDefaultDialogVisible, setDefaultDialogVisible] = useState(false);
  const [isModalDialogVisible, setModalDialogVisible] = useState(false);
  const [isClosedDialogVisible, setClosedDialogVisible] = useState(false);

  const handleClickDefaultDialog = () => {
    setDefaultDialogVisible(!isDefaultDialogVisible);
  };
  const onClick = () => {
    setModalDialogVisible(!isModalDialogVisible);
  };
  const onClickClosed = () => {
    setClosedDialogVisible(!isClosedDialogVisible);
  };

  return (
    <DialogContainer>
      <Mode text="Default dialog">
        <DxcButton
          label="Open Dialog"
          onClick={handleClickDefaultDialog}
        ></DxcButton>
        {isDefaultDialogVisible && (
          <DxcDialog
            overlay={false}
            isCloseVisible={true}
            onCloseClick={handleClickDefaultDialog}
          >
            Close Icon
          </DxcDialog>
        )}
      </Mode>
      <Mode text="Modal dialog">
        <DxcButton label="Open Dialog" onClick={onClick}></DxcButton>
        {isModalDialogVisible && (
          <DxcDialog padding="medium" onBackgroundClick={onClick}>
            Click on Background
          </DxcDialog>
        )}
      </Mode>
      <Mode text="Close button dialog">
        <DxcButton label="Open Dialog" onClick={onClickClosed}></DxcButton>
        {isClosedDialogVisible && (
          <DxcDialog padding="medium">
            <DxcButton label="Close Dialog" onClick={onClickClosed}></DxcButton>
          </DxcDialog>
        )}
      </Mode>
      <Mode text="Modal with scroll">
        <DxcButton label="Open Dialog" onClick={onClick}></DxcButton>
        {isModalDialogVisible && (
          <DxcDialog padding="medium" onBackgroundClick={onClick}>
            <div style={{ height: "150px" }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </div>
          </DxcDialog>
        )}
      </Mode>
    </DialogContainer>
  );
};

const DialogContainer = styled.div``;

export default Dialog;
