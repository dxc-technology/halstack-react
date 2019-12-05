import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

function SideNav({ icon, title, paths }) {
  return (
    <SideNavContainer>
      <Title>{title}</Title>
      <Links>
        {paths.map(path => (
          <Link to={path.path}>{path.name}</Link>
        ))}
      </Links>
    </SideNavContainer>
  );
}

const SideNavContainer = styled.div`
  background: #f8f8f8;
  color: black;
  padding: 20px 30px 20px 20px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  & a {
    color: black;
    text-decoration: none;
  }
`;

const Links = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 10px 0px 30px 0px;
`;

export default SideNav;
