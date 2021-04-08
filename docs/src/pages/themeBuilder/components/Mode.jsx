import React from "react";
import styled from "styled-components";

const Mode = ({ text, children }) => {
  return (
    <ModeContainer>
      <Title>{text}</Title>
      <PreviewsContainer>{children}</PreviewsContainer>
    </ModeContainer>
  );
};

const ModeContainer = styled.div``;

const PreviewsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Title = styled.div`
  font: Bold 12px/17px Open Sans;
  letter-spacing: 1.88px;
  color: #000000;
  text-transform: uppercase;
  margin: 10px 0;
  margin-top: 20px;
`;

export default Mode;
