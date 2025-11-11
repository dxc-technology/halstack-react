import { createPortal } from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import { responsiveSizes } from "../common/variables";
import FocusLock from "../utils/FocusLock";
import { ModalAlertWrapperProps } from "./types";
import { useEffect, useId, useState } from "react";

const BodyStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const Modal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 430;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  height: 100%;
  background-color: ${(props) => props.theme.overlayColor};
`;

const ModalAlertContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 80%;
  min-width: 696px;

  @media (max-width: ${responsiveSizes.medium}rem) {
    max-width: 92%;
    min-width: 92%;
  }
`;

const ModalAlertWrapper = ({ condition, onClose, children }: ModalAlertWrapperProps) => {
  const id = useId();
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalContainer(document.getElementById(`dialog-${id}-portal`));
  }, []);

  return condition ? (
    <>
      <BodyStyle />
      <div id={`dialog-${id}-portal`} style={{ position: "absolute" }} />
      {portalContainer &&
        createPortal(
          <Modal>
            <Overlay onClick={onClose} />
            <ModalAlertContainer>
              <FocusLock>{children}</FocusLock>
            </ModalAlertContainer>
          </Modal>,
          portalContainer
        )}
    </>
  ) : (
    children
  );
};

export default ModalAlertWrapper;
