import React from "react";
import styled from "styled-components";
import { Link, Location } from "@reach/router";
import paths from "../pages/components/paths.js";
import { types } from "../pages/components/paths.js";

function SideNav({ icon, title }) {
  return (
    <SideNavContainer>
      <Title>{title}</Title>
      <Location>
        {({ location }) => (
          <Links>
            {Object.keys(types).map(type => (
              <React.Fragment>
                <ComponentType>{types[type]}</ComponentType>
                <ComponentsList>
                  {paths
                    .filter(path => path.type === types[type])
                    .map(path => (
                      <NavLink
                        isActive={location.pathname.startsWith(
                          `/components/${path.path}`
                        )}
                      >
                        <Link to={path.path}>{path.name}</Link>
                      </NavLink>
                    ))}
                </ComponentsList>
              </React.Fragment>
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
    font-size: 14px;
    text-decoration: none;
    font-weight: ${({ isActive }) => (isActive && "bold") || "normal"};
    color: ${({ isActive }) => (isActive && "black") || "gray"};
  }
`;
const ComponentType = styled.div`
  text-transform: uppercase;
  color: gray;
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 5px;
`;

const ComponentsList = styled.div`
  margin-left: 10px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 10px 0px 30px 0px;
`;

export default SideNav;
