import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { types } from "./paths.js";
import {
  DxcBox,
  DxcLink,
  DxcFooter,
  DxcApplicationLayout,
} from "@dxc-technology/halstack-react";
import paths from "./paths.js";
import reactIcon from "../../common/react-icon.png";
import DocTitle from "../../common/DocTitle";
import ComponentDoc from "./common/ComponentDoc";
import Header from "../../common/Header";

const getComponentsLinks = (type) => {
  const dividedList = paths
    .filter((path) => path.type === type)
    .sort((path1, path2) => (path1.name < path2.name ? -1 : 1))
    .reduce((result, path, i, array) => {
      if (i % 4 === 0) result.push(array.slice(i, i + 4));
      return result;
    }, []);
  return (
    <ComponentsLinksContainer>
      {dividedList.map((sublist, position) => {
        return position === dividedList.length - 1 ? (
          <LastLinksColumn key={`sublist-${type}-${position}`}>
            {sublist.map((path, i) => (
              <li key={path.name}>
                <DxcLink
                  text={path.name}
                  underlined={false}
                  margin={{ top: "xxsmall" }}
                  href={`#/components/${path.path}`}
                />
              </li>
            ))}
          </LastLinksColumn>
        ) : (
          <LinksColumn key={`sublist-${type}-${position}`}>
            {sublist.map((path, i) => (
              <li key={path.name}>
                <DxcLink
                  text={path.name}
                  underlined={false}
                  margin={{ top: "xxsmall" }}
                  href={`#/components/${path.path}`}
                />
              </li>
            ))}
          </LinksColumn>
        );
      })}
    </ComponentsLinksContainer>
  );
};

function Components() {
  const location = useLocation();

  return (
    <DxcApplicationLayout>
      <DxcApplicationLayout.Header>
        <Header />
      </DxcApplicationLayout.Header>
      <DxcApplicationLayout.SideNav mode="push" padding="large">
        <SideNavContainer>
          <Title>
            React
            <ReactLogo src={reactIcon} alt="React Logo"></ReactLogo>
          </Title>
          {Object.keys(types).map((type) => (
            <React.Fragment key={types[type]}>
              <ComponentType>{types[type]}</ComponentType>
              <ComponentsList>
                {paths
                  .filter((path) => path.type === types[type])
                  .sort((path1, path2) => (path1.name < path2.name ? -1 : 1))
                  .map((path) => (
                    <NavLink
                      isActive={location.pathname.startsWith(
                        `/components/${path.path}`
                      )}
                      key={path.path}
                    >
                      <Link to={`/components/${path.path}`}>{path.name}</Link>
                    </NavLink>
                  ))}
              </ComponentsList>
            </React.Fragment>
          ))}
        </SideNavContainer>
      </DxcApplicationLayout.SideNav>
      <DxcApplicationLayout.Main>
        <SideNavContent>
          <Route exact path="/components">
            <ComponentDoc>
              <DocTitle size={1}>Components</DocTitle>
              <ComponentTypeTitle>Forms</ComponentTypeTitle>
              <DxcBox
                padding="small"
                margin={{ top: "small", bottom: "small" }}
              >
                {getComponentsLinks("Forms")}
              </DxcBox>
              <ComponentTypeTitle>Navigation</ComponentTypeTitle>
              <DxcBox
                padding="small"
                margin={{ top: "small", bottom: "small" }}
              >
                {getComponentsLinks("Navigation")}
              </DxcBox>
              <ComponentTypeTitle>Layout</ComponentTypeTitle>
              <DxcBox
                padding="small"
                margin={{ top: "small", bottom: "small" }}
              >
                {getComponentsLinks("Layout")}
              </DxcBox>
              <ComponentTypeTitle>Utilities</ComponentTypeTitle>
              <DxcBox
                padding="small"
                margin={{ top: "small", bottom: "small" }}
              >
                {getComponentsLinks("Utilities")}
              </DxcBox>
            </ComponentDoc>
          </Route>
          {paths.map((path) => (
            <Route path={`/components/${path.path}`} key={path.path}>
              <path.component></path.component>
            </Route>
          ))}
        </SideNavContent>
      </DxcApplicationLayout.Main>
      <DxcApplicationLayout.Footer>
        <DxcFooter
          bottomLinks={[
            { text: "Twitter", href: "http://www.google.com" },
            { text: "Facebook", href: "http://www.google.com" },
            { text: "Instagram", href: "http://www.google.com" },
          ]}
          copyright="© DXC Technology 2020. All rights reserved."
        ></DxcFooter>
      </DxcApplicationLayout.Footer>
    </DxcApplicationLayout>
  );
}

const SideNavContainer = styled.div`
  margin-bottom: 40px;
`;
const SideNavContent = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 24px;
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

const ComponentTypeTitle = styled.h2`
  font-size: 30px;
  font-weight: normal;
  margin-bottom: 0;
`;

const ComponentsLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const LinksColumn = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  list-style-type: none;
  padding: 0;
  margin: 0 100px 0 0;
  width: 100px;
`;

const LastLinksColumn = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100px;
`;

export default Components;
