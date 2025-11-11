import { useContext, useEffect, useId, useState } from "react";
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
  z-index: 300;
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
  disableFocusLock = false,
}: DialogPropsType): JSX.Element => {
  const id = useId();
  const colorsTheme = useContext(HalstackContext);
  const translatedLabels = useContext(HalstackLanguageContext);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalContainer(document.getElementById(`dialog-${id}-portal`));
  }, []);

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
      <div id={`dialog-${id}-portal`} style={{ position: "absolute" }} />
      {portalContainer &&
        createPortal(
          <DialogContainer>
            {overlay && <Overlay onClick={onBackgroundClick} />}
            <Dialog aria-label="Dialog" aria-modal={overlay} closable={closable} role="dialog">
              {!disableFocusLock ? (
                <FocusLock>
                  {children}
                  {closable && (
                    <CloseIconActionContainer>
                      <DxcActionIcon
                        icon="close"
                        onClick={onCloseClick}
                        tabIndex={tabIndex}
                        title={translatedLabels.dialog.closeIconAriaLabel}
                      />
                    </CloseIconActionContainer>
                  )}
                </FocusLock>
              ) : (
                <>
                  {children}
                  {closable && (
                    <CloseIconActionContainer>
                      <DxcActionIcon
                        icon="close"
                        onClick={onCloseClick}
                        tabIndex={tabIndex}
                        title={translatedLabels.dialog.closeIconAriaLabel}
                      />
                    </CloseIconActionContainer>
                  )}
                </>
              )}
            </Dialog>
          </DialogContainer>,
          portalContainer
        )}
    </ThemeProvider>
  );
};

export default DxcDialog;
