import React from "react";
import styled from "styled-components";

function DocTitle({ size, children }) {
  if (size === 1) {
    return <Title1>{children}</Title1>;
  } else {
    return <Title2>{children}</Title2>;
  }
}

const Title1 = styled.h1`
  font-size: 50px;
  font-weight: 100;
  letter-spacing: 1px;
`;

const Title2 = styled.h2`
  font-size: 30px;
  font-weight: normal;
`;

export default DocTitle;
