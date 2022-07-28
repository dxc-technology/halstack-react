import React, { useEffect, useRef } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import DialogPropsType, { Padding, Space } from "./types";

import { spaces, responsiveSizes } from "../common/variables.js";
import useTheme from "../useTheme";
import { BackgroundColorProvider } from "../BackgroundColorContext";

const DxcDialog = ({
  isCloseVisible = true,
  onCloseClick,
  children,
  overlay = true,
  onBackgroundClick,
  padding = "small",
  tabIndex = 0,
}: DialogPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const ref = useRef<HTMLButtonElement>(null);

  const handleClose = () => {
    onCloseClick?.();
  };

  const handleOverlayClick = () => {
    onBackgroundClick?.();
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.keyCode === 27) {
      // escape
      event.preventDefault();
      handleClose();
    }
  };

  useEffect(() => {
    ref?.current?.focus();
  }, [isCloseVisible]);

  return (
    <ThemeProvider theme={colorsTheme.dialog}>
      <BodyStyle />
      <DialogContainer role="presentation">
        {overlay && <Overlay onClick={handleOverlayClick} />}
        <Dialog role="dialog" aria-modal={overlay} isCloseVisible={isCloseVisible}>
          <Children padding={padding}>
            <BackgroundColorProvider color={colorsTheme.dialog.backgroundColor}>{children}</BackgroundColorProvider>
          </Children>
          {isCloseVisible && (
            <CloseIconContainer onClick={handleClose} onKeyDown={handleOnKeyDown} tabIndex={tabIndex} ref={ref}>
              <CloseIcon
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </CloseIcon>
            </CloseIconContainer>
          )}
        </Dialog>
      </DialogContainer>
    </ThemeProvider>
  );
};

const BodyStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const DialogContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0px;
  height: 100%;
  z-index: 1300;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0px;
  height: 100%;
  background-color: ${(props) => props.theme.overlayColor};
  opacity: ${(props) => props.theme.overlayOpacity};
`;

const Dialog = styled.div<{ isCloseVisible?: boolean }>`
  display: flex;
  justify-content: space-between;
  z-index: 1300;
  background-color: ${(props) => props.theme.backgroundColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
  min-height: ${(props) => (props.isCloseVisible ? "72px" : "")};
  box-sizing: border-box;
  box-shadow: ${(props) =>
    `${props.theme.boxShadowOffsetX} ${props.theme.boxShadowOffsetY} ${props.theme.boxShadowBlur} ${props.theme.boxShadowColor}`};
  border-radius: 4px;

  @media (min-width: ${responsiveSizes.medium}rem) {
    max-width: 80%;
    min-width: 800px;
  }

  @media (max-width: ${responsiveSizes.medium}rem) {
    //mobile phones
    max-width: 92%;
    min-width: 92%;
  }
`;

const Children = styled.div<{ padding: Padding | Space }>`
  display: flex;
  flex-direction: column;

  padding: ${(props) => (props.padding && typeof props.padding !== "object" ? spaces[props.padding] : spaces["small"])};
  padding-top: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.top ? spaces[props.padding.top] : ""};
  padding-right: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.right ? spaces[props.padding.right] : ""};
  padding-bottom: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.bottom ? spaces[props.padding.bottom] : ""};
  padding-left: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.left ? spaces[props.padding.left] : ""};
`;

const CloseIconContainer = styled.button`
  cursor: pointer;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  position: relative;
  top: 20px;
  right: 20px;
  color: ${(props) => props.theme.closeIconColor};
  width: ${(props) => props.theme.closeIconWidth};
  height: ${(props) => props.theme.closeIconHeight};
`;

const CloseIcon = styled.svg`
  background-color: ${(props) => props.theme.closeIconBackgroundColor};
  width: ${(props) => props.theme.closeIconWidth};
  height: ${(props) => props.theme.closeIconHeight};
  border-radius: ${(props) => props.theme.closeIconBorderRadius};
  border-width: ${(props) => props.theme.closeIconBorderThickness};
  border-style: ${(props) => props.theme.closeIconBorderStyle};
  border-color: ${(props) => props.theme.closeIconBorderColor};
`;

export default DxcDialog;
