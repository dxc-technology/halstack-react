import React, { useState } from "react";
import styled from "styled-components";

const DefaultInput = ({ propertyName, propertyValue, onChangeCustomTheme }) => {
  const [value, setValue] = useState(propertyValue || null);

  return (
    <DefaultInputContainer>
      <StyledInput
        type="text"
        value={value}
        onBlur={(event) => {
          const val = event.target.value;
          onChangeCustomTheme(propertyName, val);
        }}
        onChange={(event) => {
          const val = event.target.value;
          setValue(val);
        }}
      />
    </DefaultInputContainer>
  );
};

const DefaultInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const StyledInput = styled.input`
  margin-left: 10px;
  font: normal 12px/17px Open Sans;
  color: #00000099;
`;

export default DefaultInput;
