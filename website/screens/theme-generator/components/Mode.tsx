import React from "react";
import styled from "styled-components";

type ModeProps = {
  text: string;
  mode: string;
  children: React.ReactNode;
};
const Mode = ({ text, mode, children }: ModeProps): JSX.Element => (
  <ModeContainer mode={mode}>
    <Title mode={mode}>{text}</Title>
    <PreviewsContainer>{children}</PreviewsContainer>
  </ModeContainer>
);

const ModeContainer = styled.div<{ mode: string }>`
  background-color: ${(props) =>
    props.mode === "dark" ? "#000000" : "transparent"};
  padding-bottom: 10px;
`;

const PreviewsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
`;

const Title = styled.div<{ mode: string }>`
  font: Bold 12px/17px Open Sans;
  letter-spacing: 1.88px;
  color: ${(props) => (props.mode === "dark" ? "#FFFFFF" : "#000000")};
  text-transform: uppercase;
  padding: 20px 0 10px 10px;
`;

export default Mode;
