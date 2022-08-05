import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { types } from "./paths.js";
import {
  DxcBox,
  DxcLink,
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
    <>
      {Object.keys(types).map((type) => (
        <DxcApplicationLayout.SideNav.Group
          key={types[type]}
          title={types[type]}
        >
          {paths
            .filter((path) => path.type === types[type])
            .sort((path1, path2) => (path1.name < path2.name ? -1 : 1))
            .map((path) => (
              <>
                <Link
                  to={`/components/${path.path}`}
                  onClick={handleLinkOnClick}
                  component={DxcApplicationLayout.SideNav.Link}
                  selected={location.pathname === `/components/${path.path}`}
                >
                  {path.name}
                </Link>
                {path.status === "deprecated" && (
                  <StatusTag
                    status={
                      path.status.charAt(0).toUpperCase() + path.status.slice(1)
                    }
                  />
                )}
              </>
            ))}
        </DxcApplicationLayout.SideNav.Group>
      ))}
    </>
  );
};

const Components = () => (
  <DxcApplicationLayout
    visibilityToggleLabel="Components"
    header={<Header />}
    footer={
      <DxcApplicationLayout.Footer
        bottomLinks={[
          { text: "Twitter", href: "http://www.google.com" },
          { text: "Facebook", href: "http://www.google.com" },
          { text: "Instagram", href: "http://www.google.com" },
        ]}
      ></DxcApplicationLayout.Footer>
    }
    sidenav={
      <DxcApplicationLayout.SideNav
        padding="large"
        title={
          <DxcApplicationLayout.SideNav.Title>
            React
            <ReactLogo src={reactIcon} alt="React Logo" />
          </DxcApplicationLayout.SideNav.Title>
        }
      >
        <DxcApplicationLayout.SideNav.Section>
          <SidenavContent />
        </DxcApplicationLayout.SideNav.Section>
      </DxcApplicationLayout.SideNav>
    }
  >
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
  </DxcApplicationLayout>
);

const MainContent = styled.div`
  height: 100%;
  min-height: 100vh;
`;

const ReactLogo = styled.img`
  max-width: 28px;
  margin-left: 8px;
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
