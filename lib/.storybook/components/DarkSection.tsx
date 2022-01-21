import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode,
};

const DarkContainer = ({ children }: Props): JSX.Element => {
  return <DivContainer>{children}</DivContainer>;
};

const DivContainer = styled.div`
  background-color: #333333;
`;

export default DarkContainer;
