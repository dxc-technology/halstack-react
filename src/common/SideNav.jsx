import React from "react";
import styled from "styled-components";
import { Link, Location } from "@reach/router";

function SideNav({ icon, title, paths }) {
  return (
    <SideNavContainer>
      <Title>{title}</Title>
      <Location>
        {({ location }) => (
          <Links>
            {paths.map(path => (
              <NavLink
                isActive={location.pathname.startsWith(
                  `/components/${path.path}`
                )}
              >
                <Link to={path.path}>{path.name}</Link>
              </NavLink>
            ))}
          </Links>
        )}
      </Location>
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
`;

const NavLink = styled.div`
  padding: 3px 0px;
  & a {
    text-decoration: none;
    font-weight: ${({ isActive }) => (isActive && "bold") || "normal"};
    color: ${({ isActive }) => (isActive && "black") || "gray"};
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
