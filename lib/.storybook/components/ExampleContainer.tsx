import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
  pseudoState?: string;
  expanded?: boolean;
};

const ExampleContainer = ({ children, pseudoState, expanded = false }: Props): JSX.Element => (
  <DivContainer className={pseudoState} expanded={expanded}>
    {children}
  </DivContainer>
);

const DivContainer = styled.div`
  margin: 15px;
  ${(props) => props.expanded && "height: 100vh;"}
`;

export default ExampleContainer;
