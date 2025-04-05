import styled from "styled-components";
import DxcIcon from "../../icon/Icon";

const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-xs);
  color: var(--color-fg-error-medium);
  font-size: var(--typography-helper-text-s);
  font-weight: var(--typography-helper-text-regular, 400);
  margin-top: var(--spacing-gap-xs);
  
  /* Error icon */
  > span[role="img"] {
    font-size: var(--height-xxs);
  }
`;

const ErrorMessage = ({ error, id }: { error: string; id: string }) => (
  <ErrorMessageContainer aria-live={error ? "assertive" : "off"} id={id} role="alert">
    {error && <DxcIcon icon="filled_error" />}
    {error}
  </ErrorMessageContainer>
);

export default ErrorMessage;
