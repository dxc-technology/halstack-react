import React from "react";
import styled from "styled-components";

type Props = {
  title?: string,
  theme?: string,
  level?: number,
};

const Title = ({ title, theme, level }: Props): JSX.Element => {
  return level === 2 ? (
    <SectionTitle theme={theme}>{title}</SectionTitle>
  ) : (
    <ExampleTitle theme={theme}>{title}</ExampleTitle>
  );
};

const SectionTitle = styled.h2`
  font-family: Open Sans, sans-serif;
  color: ${(props) => (props.theme === "dark" ? "#FFFFFF" : "#000000")};
`;

const ExampleTitle = styled.h4`
  font-family: Open Sans, sans-serif;
  color: ${(props) => (props.theme === "dark" ? "#FFFFFF" : "#000000")};
`;

export default Title;
