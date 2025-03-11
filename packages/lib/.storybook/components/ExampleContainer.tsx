import { ReactNode } from "react";
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
  children?: ReactNode;
  pseudoState?: PseudoStates | PseudoStates[];
  expanded?: boolean;
};

const ExampleContainer = ({ children, expanded, pseudoState }: Props): JSX.Element => (
  <DivContainer
    className={Array.isArray(pseudoState) ? pseudoState.map((state) => `${state}-all`).join(" ") : `${pseudoState}-all`}
    expanded={expanded}
  >
    {children}
  </DivContainer>
);

const DivContainer = styled.div<{ expanded: Props["expanded"] }>`
  margin: 15px;
  ${(props) => props.expanded && "height: 100vh;"}
`;

export default ExampleContainer;
