import styled from "styled-components";

const Placeholder = styled.div`
  min-height: 40px;
  min-width: 120px;
  border: 1px solid #a46ede;
  background-color: #e5d5f6;
  padding-left: ${({ paddingLeft }) => `${paddingLeft ?? 0}px`};
  padding-right: ${({ paddingRight }) => `${paddingRight ?? 0}px`};
`;

export default Placeholder;
