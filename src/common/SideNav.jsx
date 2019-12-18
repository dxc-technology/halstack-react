import React from "react";
import styled from "styled-components";
import { Link, Location } from "@reach/router";

import paths from "../pages/components/paths.js";
import { types } from "../pages/components/paths.js";
import reactIcon from "./react-icon.png";

function SideNav({ title }) {
  return (
    <SideNavContainer>
      <Title>
        {title}
        <ReactLogo src={reactIcon} alt="React Logo"></ReactLogo>
      </Title>
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
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: sticky;
  top: 64px;
  height: calc(100vh - 64px - 40px);
  overflow-y: auto;
  padding: 20px 50px 20px 30px;
  ::-webkit-scrollbar {
    width: 3px;
    margin: 5px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: #eeeeee;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #d3d3d3;
  }
`;

const ReactLogo = styled.img`
  max-width: 28px;
  margin-left: 8px;
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
  font-size: 24px;
  margin: 20px 0px 40px 0px;
  display: flex;
  align-items: center;
  color: #646464;
  font-weight: normal;
  line-height: 18px;
`;

export default SideNav;
