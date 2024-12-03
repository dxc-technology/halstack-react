import styled from "styled-components";
import useTheme from "../useTheme";

const DxcParagraph = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const colorsTheme = useTheme();

  return (
    <ParagraphContainer
      display={colorsTheme.paragraph.display}
      fontSize={colorsTheme.paragraph.fontSize}
      fontWeight={colorsTheme.paragraph.fontWeight}
      fontColor={colorsTheme.paragraph.fontColor}
    >
      {children}
    </ParagraphContainer>
  );
};

const ParagraphContainer = styled.p<{ display: string; fontSize: string; fontWeight: string; fontColor: string }>`
  display: ${(props) => props.display};
  font-family: "Open Sans, sans-serif";
  font-size: ${(props) => props.fontSize};
  font-style: "normal";
  font-weight: ${(props) => props.fontWeight};
  letter-spacing: 0em;
  line-height: 1.5em;
  text-align: "left";
  color: ${(props) => props.fontColor};
  text-decoration: none;
  text-overflow: unset;
  white-space: normal;
  margin: 0;
`;

export default DxcParagraph;
