import { useEffect } from "react";
import { createPortal } from "react-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { responsiveSizes } from "../common/variables";
import DxcIcon from "../icon/Icon";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import FocusLock from "../utils/FocusLock";
import DialogPropsType from "./types";

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

const Dialog = styled.div<{ closable: DialogPropsType["closable"] }>`
  position: relative;
  box-sizing: border-box;
  max-width: 80%;
  min-width: 696px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.backgroundColor};
  ${(props) => props.closable && "min-height: 72px;"}
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
  span {
    font-size: ${(props) => props.theme.closeIconSize};
  }
`;

const DxcDialog = ({
  closable = true,
  onCloseClick,
  children,
  overlay = true,
  onBackgroundClick,
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
        <DialogContainer>
          {overlay && (
            <Overlay
              onClick={() => {
                onBackgroundClick?.();
              }}
            />
          )}
          <Dialog role="dialog" aria-modal={overlay} closable={closable} aria-label="Dialog">
            <FocusLock>
              {children}
              {closable && (
                <CloseIconAction
                  onClick={() => {
                    onCloseClick?.();
                  }}
                  aria-label={translatedLabels?.dialog?.closeIconAriaLabel}
                  tabIndex={tabIndex}
                >
                  <DxcIcon icon="close" />
                </CloseIconAction>
              )}
            </FocusLock>
          </Dialog>
        </DialogContainer>,
        document.body
      )}
    </ThemeProvider>
  );
};

export default DxcDialog;
