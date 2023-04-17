import React, { useEffect } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import DialogPropsType from "./types";
import { spaces, responsiveSizes } from "../common/variables.js";
import useTheme from "../useTheme";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import useTranslatedLabels from "../useTranslatedLabels";
import { createPortal } from "react-dom";
import FocusLock from "../utils/FocusLock";

const closeIcon = (
  <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
  </svg>
);

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
  const translatedLabels = useTranslatedLabels();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseClick?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCloseClick]);

  return (
    <ThemeProvider theme={colorsTheme.dialog}>
      <BodyStyle />
      {createPortal(
        <FocusLock>
          <DialogContainer>
            {overlay && (
              <Overlay
                onClick={() => {
                  onBackgroundClick?.();
                }}
              />
            )}
            <Dialog role="dialog" aria-modal={overlay} isCloseVisible={isCloseVisible}>
              <Children padding={padding}>
                <BackgroundColorProvider color={colorsTheme.dialog.backgroundColor}>{children}</BackgroundColorProvider>
              </Children>
              {isCloseVisible && (
                <CloseIconAction
                  onClick={() => {
                    onCloseClick?.();
                  }}
                  aria-label={translatedLabels.dialog.closeIconAriaLabel}
                  tabIndex={tabIndex}
                >
                  {closeIcon}
                </CloseIconAction>
              )}
            </Dialog>
          </DialogContainer>
        </FocusLock>,
        document.body
      )}
    </ThemeProvider>
  );
};

const BodyStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const DialogContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 2147483647;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  height: 100%;
  background-color: ${(props) => props.theme.overlayColor};
`;

const Dialog = styled.div<{ isCloseVisible: DialogPropsType["isCloseVisible"] }>`
  position: relative;
  box-sizing: border-box;
  max-width: 80%;
  min-width: 696px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.backgroundColor};
  ${(props) => props.isCloseVisible && "min-height: 72px;"}
  box-shadow: ${(props) =>
    `${props.theme.boxShadowOffsetX} ${props.theme.boxShadowOffsetY} ${props.theme.boxShadowBlur} ${props.theme.boxShadowColor}`};
  z-index: 2147483647;

  @media (max-width: ${responsiveSizes.medium}rem) {
    max-width: 92%;
    min-width: 92%;
  }
`;

const CloseIconAction = styled.button`
  all: unset;
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.closeIconBackgroundColor};
  box-shadow: 0 0 0 2px transparent;
  color: ${(props) => props.theme.closeIconColor};
  border-radius: ${(props) => props.theme.closeIconBorderRadius};
  border-width: ${(props) => props.theme.closeIconBorderThickness};
  border-style: ${(props) => props.theme.closeIconBorderStyle};
  border-color: ${(props) => props.theme.closeIconBorderColor};
  cursor: pointer;
  z-index: 1;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0095ff;
  }
  &:hover {
    background-color: #f2f2f2;
  }
  &:active {
    background-color: #cccccc;
  }
  svg {
    width: ${(props) => props.theme.closeIconWidth};
    height: ${(props) => props.theme.closeIconHeight};
  }
`;

const Children = styled.div<{ padding: DialogPropsType["padding"] }>`
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

export default DxcDialog;
