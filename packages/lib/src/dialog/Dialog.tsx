import { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { responsiveSizes } from "../common/variables";
import DxcActionIcon from "../action-icon/ActionIcon";
import HalstackContext, { HalstackLanguageContext } from "../HalstackContext";
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

const CloseIconActionContainer = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`;

const DxcDialog = ({
  children,
  closable = true,
  onBackgroundClick,
  onCloseClick,
  overlay = true,
  tabIndex = 0,
}: DialogPropsType): JSX.Element => {
  const colorsTheme = useContext(HalstackContext);
  const translatedLabels = useContext(HalstackLanguageContext);

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
          {overlay && <Overlay onClick={onBackgroundClick} />}
          <Dialog aria-label="Dialog" aria-modal={overlay} closable={closable} role="dialog">
            <FocusLock>
              {children}
              {closable && (
                <ThemeProvider
                  theme={{
                    actionBackgroundColor: colorsTheme.dialog.closeIconBackgroundColor,
                    actionIconColor: colorsTheme.dialog.closeIconColor,
                  }}
                >
                  <CloseIconActionContainer>
                    <DxcActionIcon
                      icon="close"
                      onClick={onCloseClick}
                      tabIndex={tabIndex}
                      title={translatedLabels.dialog.closeIconAriaLabel}
                    />
                  </CloseIconActionContainer>
                </ThemeProvider>
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
