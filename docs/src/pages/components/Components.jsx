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
  DxcHeading,
} from "@dxc-technology/halstack-react";
import paths from "./paths.js";
import reactIcon from "../../common/react-icon.png";
import ComponentDoc from "./common/ComponentDoc";
import Header from "../../common/Header";
import StatusTag from "../../common/StatusTag.jsx";

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
                <Link
                  to={`/components/${path.path}`}
                  component={DxcLink}
                  margin={{ top: "xxsmall" }}
                >
                  {path.name}
                </Link>
              </li>
            ))}
          </LastLinksColumn>
        ) : (
          <LinksColumn key={`sublist-${type}-${position}`}>
            {sublist.map((path, i) => (
              <li key={path.name}>
                <Link
                  to={`/components/${path.path}`}
                  component={DxcLink}
                  margin={{ top: "xxsmall" }}
                >
                  {path.name}
                </Link>
              </li>
            ))}
          </LinksColumn>
        );
      })}
    </ComponentsLinksContainer>
  );
};

const SidenavContent = () => {
  const location = useLocation();
  const changeResponsiveSidenavVisibility =
    DxcApplicationLayout.useResponsiveSidenavVisibility();

  const handleLinkOnClick = () => {
    changeResponsiveSidenavVisibility(false);
  };

  return (
    <SidenavContainer>
      <Title>
        React
        <ReactLogo src={reactIcon} alt="React Logo" />
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
                  isActive={location.pathname === `/components/${path.path}`}
                  key={path.path}
                >
                  <Link
                    to={`/components/${path.path}`}
                    onClick={handleLinkOnClick}
                  >
                    {path.name}
                  </Link>
                  {path.status === "deprecated" && (
                    <StatusTag
                      status={
                        path.status.charAt(0).toUpperCase() +
                        path.status.slice(1)
                      }
                    />
                  )}
                </NavLink>
              ))}
          </ComponentsList>
        </React.Fragment>
      ))}
    </SidenavContainer>
  );
};

const Components = () => (
  <DxcApplicationLayout visibilityToggleLabel="Components">
    <DxcApplicationLayout.Header>
      <Header />
    </DxcApplicationLayout.Header>
    <DxcApplicationLayout.SideNav padding="large">
      <SidenavContent />
    </DxcApplicationLayout.SideNav>
    <DxcApplicationLayout.Main>
      <MainContent>
        <Route exact path="/components">
          <ComponentDoc>
            <DxcHeading
              level={1}
              text="Components"
              margin={{ bottom: "large" }}
            />
            <DxcHeading level={3} text="Forms" />
            <DxcBox padding="small" margin={{ top: "small", bottom: "small" }}>
              {getComponentsLinks("Forms")}
            </DxcBox>
            <DxcHeading level={3} text="Navigation" />
            <DxcBox padding="small" margin={{ top: "small", bottom: "small" }}>
              {getComponentsLinks("Navigation")}
            </DxcBox>
            <DxcHeading level={3} text="Layout" />
            <DxcBox padding="small" margin={{ top: "small", bottom: "small" }}>
              {getComponentsLinks("Layout")}
            </DxcBox>
            <DxcHeading level={3} text="Utilities" />
            <DxcBox padding="small" margin={{ top: "small", bottom: "small" }}>
              {getComponentsLinks("Utilities")}
            </DxcBox>
          </ComponentDoc>
        </Route>
        {paths.map((path) => (
          <Route path={`/components/${path.path}`} key={path.path}>
            <path.component></path.component>
          </Route>
        ))}
      </MainContent>
    </DxcApplicationLayout.Main>
    <DxcApplicationLayout.Footer>
      <DxcFooter
        bottomLinks={[
          { text: "Twitter", href: "http://www.google.com" },
          { text: "Facebook", href: "http://www.google.com" },
          { text: "Instagram", href: "http://www.google.com" },
        ]}
      ></DxcFooter>
    </DxcApplicationLayout.Footer>
  </DxcApplicationLayout>
);

const SidenavContainer = styled.div`
  margin-bottom: 40px;
`;

const MainContent = styled.div`
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 4px 0px;
  & a {
    font-size: 14px;
    text-decoration: none;
    font-weight: ${({ isActive }) => (isActive && "bold") || "normal"};
    color: ${({ isActive }) => (isActive && "black") || "gray"};
    ::before {
      display: table;
      content: "";
      margin-bottom: 0.21875rem;
    }
    ::after {
      display: table;
      content: "";
      margin-top: 0.21875rem;
    }
  }
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
