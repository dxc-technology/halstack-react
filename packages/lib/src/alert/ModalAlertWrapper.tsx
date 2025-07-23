import { createPortal } from "react-dom";
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

const ModalAlertWrapper = ({ condition, onClose, children }: ModalAlertWrapperProps) =>
  condition ? (
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

export default ModalAlertWrapper;
