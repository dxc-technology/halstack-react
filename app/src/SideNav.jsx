import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import paths from "./paths";

function SideNav() {
  return (
    <SideNavContainer>
      <Title>React Components</Title>
      {paths.map(path => (
        <Link to={path.path}>{path.name}</Link>
      ))}
    </SideNavContainer>
  );
}

const SideNavContainer = styled.div`
  background: black;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  & a {
    color: white;
    text-decoration: none;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 10px 0px 30px 0px;
`;

export default SideNav;
