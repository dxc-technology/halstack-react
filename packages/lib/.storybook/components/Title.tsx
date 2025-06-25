import styled from "@emotion/styled";

type Props = {
  title?: string;
  theme?: string;
  level?: number;
};

const Title = ({ title, theme, level = 4 }: Props): JSX.Element => {
  const headingLevel = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <SectionTitle theme={theme} as={headingLevel}>
      {title}
    </SectionTitle>
  );
};

const SectionTitle = styled.div`
  font-family:
    Open Sans,
    sans-serif;
  color: ${(props) => (props.theme === "dark" ? "#FFFFFF" : "#000000")};
`;

export default Title;
