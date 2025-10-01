import { createPortal } from "react-dom";
import { useEffect, useId, useState } from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { responsiveSizes } from "../common/variables";
import FocusLock from "../utils/FocusLock";
import { ModalAlertWrapperProps } from "./types";

const BodyStyle = () => (
  <Global
    styles={css`
      body {
        overflow: hidden;
      }
    `}
  />
);

const Modal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: var(--z-alert);
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  height: 100%;
  background-color: var(--color-bg-alpha-medium);
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
    if (condition) {
      const handleModalAlertKeydown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose?.();
        }
      };
      document.addEventListener("keydown", handleModalAlertKeydown);
      return () => {
        document.removeEventListener("keydown", handleModalAlertKeydown);
      };
    }
  }, [condition, onClose]);

  useEffect(() => {
    setPortalContainer(document.getElementById(`dialog-${id}-portal`));
  }, []);

  return condition ? (
    <>
      <BodyStyle />
      <div id={`dialog-${id}-portal`} style={{ position: "absolute" }} />
      {createPortal(
        <Modal>
          <Overlay onClick={onClose} />
          <ModalAlertContainer>
            <FocusLock>{children}</FocusLock>
          </ModalAlertContainer>
        </Modal>,
        portalContainer || document.body
      )}
    </>
  ) : (
    children
  );
};

export default ModalAlertWrapper;
