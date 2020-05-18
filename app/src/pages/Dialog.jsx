import React, { useState } from "react";
import { DxcDialog, DxcButton, ThemeContext } from "@diaas/dxc-react-cdk";

const colors = {
  black: "blue",
  mediumBlack: "red",
  lightBlack: "grey",
  white: "black",
  darkWhite: "beige",
  yellow: "aquamarine",
  darkGrey: "brown",
  lightGrey: "azure",
  darkRed: "coral",
  lightRed: "aqua",
  lightBlue: "green",
  lightYellow: "white",
  lightPink: "red",
  lightGreen: "blue",
};

function App() {
  const [isDialog1Visible, setIsDialog1Visible] = useState(false);
  const [isDialog2Visible, setIsDialog2Visible] = useState(false);
  const [isDialog3Visible, setIsDialog3Visible] = useState(false);
  const [isDialog4Visible, setIsDialog4Visible] = useState(false);

  const onClickDialog1 = () => {
    setIsDialog1Visible(!isDialog1Visible);
  };
  const onClickDialog2 = () => {
    setIsDialog1Visible(!isDialog2Visible);
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

      <DxcButton
        label="Custom Dialog"
        onClick={onClickDialog4}
        margin="medium"
      ></DxcButton>
      {isDialog4Visible && (
        <ThemeContext.Provider value={colors}>
          <DxcDialog isCloseVisible={true} onCloseClick={onClickDialog4}>
            Close Icon
          </DxcDialog>
        </ThemeContext.Provider>
      )}
    </div>
  );
}

export default App;
