import React from "react";
import styled, { ThemeProvider } from "styled-components";

type Props = {
  children?: React.ReactNode,
  pseudoState?: string,
};

const ExampleContainer = ({ children, pseudoState }: Props): JSX.Element => {
  return <DivContainer className={pseudoState}>{children}</DivContainer>;
};

const DivContainer = styled.div`
  margin: 15px;
`;

export default ExampleContainer;
