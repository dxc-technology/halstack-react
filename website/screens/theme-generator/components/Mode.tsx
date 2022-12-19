import React from "react";
import styled from "styled-components";

type ModeProps = {
  text: string;
  mode?: "light" | "dark";
  children: React.ReactNode;
};
const Mode = ({ text, mode = "light", children }: ModeProps): JSX.Element => (
  <ModeContainer mode={mode}>
    <Title mode={mode}>{text}</Title>
    <PreviewContainer>{children}</PreviewContainer>
  </ModeContainer>
);

const ModeContainer = styled.div<{ mode: string }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) =>
    props.mode === "dark" ? "#000000" : "transparent"};
`;

const Title = styled.span<{ mode: string }>`
  font: Bold 12px/17px Open Sans;
  line-height: 18px;
  letter-spacing: 1.88px;
  color: ${(props) => (props.mode === "dark" ? "#FFFFFF" : "#000000")};
  text-transform: uppercase;
`;

const PreviewContainer = styled.div`
  display: flex;
  gap: 5rem;
  padding-left: 1rem;
`;

export default Mode;
