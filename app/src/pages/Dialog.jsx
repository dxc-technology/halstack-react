import React, { useState } from "react";
import { DxcDialog, DxcButton } from "@dxc-technology/halstack-react";

function App() {
  const [isDialog1Visible, setIsDialog1Visible] = useState(false);
  const [isDialog2Visible, setIsDialog2Visible] = useState(false);
  const [isDialog3Visible, setIsDialog3Visible] = useState(false);
  const [isDialog4Visible, setIsDialog4Visible] = useState(false);

  const onClickDialog1 = () => {
    setIsDialog1Visible(!isDialog1Visible);
  };
  const onClickDialog2 = () => {
    setIsDialog2Visible(!isDialog2Visible);
  };
  const onClickDialog3 = () => {
    setIsDialog3Visible(!isDialog3Visible);
  };
  const onClickDialog4 = () => {
    setIsDialog4Visible(!isDialog4Visible);
  };

  return (
    <div>
      <DxcButton
        label="Dialog 1"
        onClick={onClickDialog1}
        margin="medium"
      ></DxcButton>
      {isDialog1Visible && (
        <DxcDialog isCloseVisible={true} onCloseClick={onClickDialog1}>
          Close Icon
        </DxcDialog>
      )}

      <DxcButton
        label="Dialog 2"
        onClick={onClickDialog2}
        margin="medium"
      ></DxcButton>
      {isDialog2Visible && (
        <DxcDialog
          padding="xxlarge"
          onBackgroundClick={onClickDialog2}
          isCloseVisible={false}
        >
          Overlay close
        </DxcDialog>
      )}

      <DxcButton
        label="Dialog 3"
        onClick={onClickDialog3}
        margin="medium"
      ></DxcButton>
      {isDialog3Visible && (
        <DxcDialog padding="xxlarge" isCloseVisible={false}>
          <DxcButton
            label="Close"
            onClick={onClickDialog3}
            margin="small"
          ></DxcButton>
        </DxcDialog>
      )}
    </div>
  );
}

export default App;
