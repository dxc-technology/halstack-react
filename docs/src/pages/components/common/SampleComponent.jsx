import React from "react";
import styled from "styled-components";

const SampleComponent = ({ color = "" }) => {
  return (
    <SampleContainer>
      <Sample color={color}></Sample>
      <span> {color} </span>
    </SampleContainer>
  );
};

const Sample = styled.span`
  background: ${(props) => props.color};
  padding: 10px;
  width: 15px;
  border-radius: 10px;
  border: 1px solid #00000070;
  margin-right: 10px;
`;

const SampleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default SampleComponent;
