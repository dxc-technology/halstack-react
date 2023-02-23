import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode,
};

const DarkSection = ({ children }: Props): JSX.Element => {
  return <DivSection>{children}</DivSection>;
};

const DivSection = styled.div`
  background-color: #333333;
`;

export default DarkSection;
