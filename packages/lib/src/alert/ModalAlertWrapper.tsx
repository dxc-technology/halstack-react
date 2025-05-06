import { createPortal } from "react-dom";
import { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { responsiveSizes } from "../common/variables";
import FocusLock from "../utils/FocusLock";
import { ModalAlertWrapperProps } from "./types";

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
  z-index: 2147483647;
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
  z-index: 2147483647;

  @media (max-width: ${responsiveSizes.medium}rem) {
    max-width: 92%;
    min-width: 92%;
  }
`;

const ModalAlertWrapper = ({ condition, onClose, children }: ModalAlertWrapperProps) => {
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

  return condition ? (
    <>
      <BodyStyle />
      {createPortal(
        <Modal>
          <Overlay onClick={onClose} />
          <ModalAlertContainer>
            <FocusLock>{children}</FocusLock>
          </ModalAlertContainer>
        </Modal>,
        document.body
      )}
    </>
  ) : (
    children
  );
};

export default ModalAlertWrapper;
