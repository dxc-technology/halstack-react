import { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";
import { responsiveSizes } from "../common/variables";
import DxcActionIcon from "../action-icon/ActionIcon";
import { HalstackLanguageContext } from "../HalstackContext";
import FocusLock from "../utils/FocusLock";
import DialogPropsType from "./types";
import { css, Global } from "@emotion/react";

const BodyStyle = () => (
  <Global
    styles={css`
      body {
        overflow: hidden;
      }
    `}
  />
);

const DialogContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: var(--z-dialog);
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  height: 100%;
  background-color: var(--color-bg-alpha-medium);
`;

const Dialog = styled.div<{ closable: DialogPropsType["closable"] }>`
  position: relative;
  box-sizing: border-box;
  max-width: 80%;
  min-width: 696px;
  border-radius: 4px;
  background-color: var(--color-bg-neutral-lightest);
  ${(props) => props.closable && "min-height: 72px;"}
  box-shadow: var(--shadow-100);

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
    <>
      <BodyStyle />
      {createPortal(
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
        document.body
      )}
    </>
  );
};

export default DxcDialog;
