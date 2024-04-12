import React from "react";
import styled from "styled-components";

type PseudoStates =
  | "pseudo-active"
  | "pseudo-focus"
  | "pseudo-focus-visible"
  | "pseudo-focus-within"
  | "pseudo-hover"
  | "pseudo-link"
  | "pseudo-target"
  | "pseudo-visited";

type Props = {
  children?: React.ReactNode;
  pseudoState?: PseudoStates;
  expanded?: boolean;
};

const ExampleContainer = ({
  children,
  pseudoState,
  expanded = false,
}: Props): JSX.Element => (
  <DivContainer className={`${pseudoState}-all`} expanded={expanded}>
    {children}
  </DivContainer>
);

const DivContainer = styled.div<{ expanded: boolean }>`
  margin: 15px;
  ${(props) => props.expanded && "height: 100vh;"}
`;

export default ExampleContainer;
