import React from "react";
import styled from "styled-components";

type Props = {
  title?: string;
  theme?: string;
  level?: number;
};

const Title = ({ title, theme, level = 4 }: Props): JSX.Element => {
  const HeadingLevel = `h${level}`;

  const SectionTitle = styled[HeadingLevel]`
    font-family: Open Sans, sans-serif;
    color: ${(props) => (props.theme === "dark" ? "#FFFFFF" : "#000000")};
  `;

  return <SectionTitle theme={theme}>{title}</SectionTitle>;
};

export default Title;
