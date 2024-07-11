import styled from "styled-components";

const StyledInput = styled.input`
  box-sizing: border-box;
  font: normal 12px/17px Open Sans;
  height: 23px;

  &:focus {
    border-color: transparent;
    border-radius: 2px;
    outline: 2px solid #0095ff;
  }
`;

export default StyledInput;
