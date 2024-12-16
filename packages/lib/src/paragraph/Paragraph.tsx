import styled, { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import useTheme from "../useTheme";

const Paragraph = styled.p`
  display: ${(props) => props.theme.display};
  font-family: "Open Sans", sans-serif;
  font-size: ${(props) => props.theme.fontSize};
  font-style: "normal";
  font-weight: ${(props) => props.theme.fontWeight};
  letter-spacing: 0em;
  line-height: 1.5em;
  text-align: "left";
  color: ${(props) => props.theme.fontColor};
  text-decoration: none;
  text-overflow: unset;
  white-space: normal;
  margin: 0;
`;

const DxcParagraph = ({ children }: { children: ReactNode }) => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.paragraph}>
      <Paragraph>{children}</Paragraph>
    </ThemeProvider>
  );
};

export default DxcParagraph;
