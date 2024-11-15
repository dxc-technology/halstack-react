import { createPortal } from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import { responsiveSizes } from "../common/variables";

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
  background-color: ${(props) => props.theme.overlayColor};
`;

const ModalAlertContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 80%;
  min-width: 696px;
  box-shadow: ${(props) =>
    `${props.theme.boxShadowOffsetX} ${props.theme.boxShadowOffsetY} ${props.theme.boxShadowBlur} ${props.theme.boxShadowSpreadRadius} rgba(0, 0, 0, 0.25)`};
  z-index: 2147483647;

  @media (max-width: ${responsiveSizes.medium}rem) {
    max-width: 92%;
    min-width: 92%;
  }
`;

const ModalAlertWrapper = ({ condition, onClose, children }) =>
  condition ? (
    <>
      <BodyStyle />
      {createPortal(
        <Modal>
          {condition && <Overlay onClick={onClose} />}
          <ModalAlertContainer>{children}</ModalAlertContainer>
        </Modal>,
        document.body
      )}
    </>
  ) : (
    children
  );

export default ModalAlertWrapper;
