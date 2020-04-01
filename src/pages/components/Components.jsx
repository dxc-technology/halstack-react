import React from "react";
import { Router, Route } from "react-router-dom";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { types } from "./paths.js";
import { DxcSidenav } from "@diaas/dxc-react-cdk";
import paths from "./paths.js";
import reactIcon from "../../common/react-icon.png";

function Components() {
  const location = useLocation();
  return (
      <DxcSidenav
        padding="large"
        mode="push"
        arrowDistance="50vh"
        navContent={
          <SideNavContainer>
            <Title>React
              <ReactLogo src={reactIcon} alt="React Logo"></ReactLogo>
            </Title>
            {Object.keys(types).map(type => (
              <React.Fragment>
                <ComponentType>{types[type]}</ComponentType>
                <ComponentsList>
                  {paths
                    .filter(path => path.type === types[type])
                    .sort((path1, path2) => (path1.name < path2.name ? -1 : 1))
                    .map(path => (
                      <NavLink
                        isActive={location.pathname.startsWith(
                          `/components/${path.path}`
                        )}
                      >
                        <Link to={`/components/${path.path}`}>{path.name}</Link>
                      </NavLink>
                    ))}
                </ComponentsList>
              </React.Fragment>
            ))}
          </SideNavContainer>
        }
        pageContent={
          <SideNavContent>
            {paths.map(path => (
              <Route path={`/components/${path.path}`}>
                <path.component></path.component>
              </Route>
            ))}
          </SideNavContent>
        }
      >

      </DxcSidenav>
  );
}

/**New */
const SideNavContainer = styled.div``;
const SideNavContent = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  min-height: 100vh
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

const ReactLogo = styled.img`
  max-width: 28px;
  margin-left: 8px;
`;

/** */

const ComponentsContainer = styled.div`
  display: flex;
  height: 100%;
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

const NavLink = styled.div`
  padding: 3px 0px;
  & a {
    font-size: 14px;
    text-decoration: none;
    font-weight: ${({ isActive }) => (isActive && "bold") || "normal"};
    color: ${({ isActive }) => (isActive && "black") || "gray"};
  }
`;

const StyledRouter = styled(Router)`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
`;

export default Components;
