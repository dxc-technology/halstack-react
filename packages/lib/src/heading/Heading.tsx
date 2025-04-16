import styled from "styled-components";
import { spaces } from "../common/variables";
import HeadingPropsType from "./types";
import { getHeadingSize, getHeadingWeight } from "./utils";

const HeadingContainer = styled.div<{ margin: HeadingPropsType["margin"] }>`
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
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
      <Heading as={as} $level={level} $weight={weight}>
        {text}
      </Heading>
    </HeadingContainer>
  );
}
