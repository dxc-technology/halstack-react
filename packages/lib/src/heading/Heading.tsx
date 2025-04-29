import styled from "styled-components";
import { spaces } from "../common/variables";
import HeadingPropsType from "./types";
import { getHeadingSize, getHeadingWeight } from "./utils";

const HeadingContainer = styled.div<{ margin: HeadingPropsType["margin"] }>`
  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};
`;

const Heading = styled.h1<{
  $level: HeadingPropsType["level"];
  $weight: HeadingPropsType["weight"];
}>`
  color: var(--color-fg-neutral-dark);
  font-family: var(--font-family-sans);
  font-size: ${({ $level }) => getHeadingSize($level)};
  font-weight: ${({ $weight }) => getHeadingWeight($weight)};
  margin: 0;
`;

export default function DxcHeading({ as, level = 1, margin, text, weight = "default" }: HeadingPropsType) {
  return (
    <HeadingContainer margin={margin}>
      <Heading as={as ?? `h${level}`} $level={level} $weight={weight}>
        {text}
      </Heading>
    </HeadingContainer>
  );
}
