import React, { createContext, useState, useLayoutEffect, useRef } from "react";
import { DxcHeader, DxcFooter } from "../main";
import styled, { ThemeProvider } from "styled-components";
import { responsiveSizes } from "../common/variables.js";
import { facebookLogo, linkedinLogo, twitterLogo, hamburguerIcon } from "./Icons";
import useTheme from "../useTheme";
import AppLayoutPropsType, {
  AppLayoutSidenavPropsType,
  AppLayoutFooterPropsType,
  AppLayoutMainPropsType,
  AppLayoutHeaderPropsType,
} from "./types";
import DxcSidenav from "./Sidenav";

type SidenavContextType = {
  isResponsive: boolean;
};
export const SidenavContext = createContext<SidenavContextType | null>(null);

const year = new Date().getFullYear();
const Header = ({ children }: AppLayoutHeaderPropsType): JSX.Element => <>{children}</>;
const Main = ({ children }: AppLayoutMainPropsType): JSX.Element => <>{children}</>;
const Footer = ({ children }: AppLayoutFooterPropsType): JSX.Element => <>{children}</>;
const SideNav = ({ mode = "overlay", ...childProps }: AppLayoutSidenavPropsType): JSX.Element => (
  <DxcSidenav {...childProps}>{childProps.children}</DxcSidenav>
);
const defaultFooter = () => (
  <DxcFooter
    copyright={`© DXC Technology ${year}​​​​. All rights reserved.`}
    bottomLinks={[
      {
        href: "https://www.linkedin.com/company/dxctechnology",
        text: "Linkedin",
      },
      {
        href: "https://twitter.com/dxctechnology",
        text: "Twitter",
      },
      {
        href: "https://www.facebook.com/DXCTechnology/",
        text: "Facebook",
      },
    ]}
    socialLinks={[
      {
        href: "https://www.linkedin.com/company/dxctechnology",
        logo: linkedinLogo,
      },
      {
        href: "https://twitter.com/dxctechnology",
        logo: twitterLogo,
      },
      {
        href: "https://www.facebook.com/DXCTechnology/",
        logo: facebookLogo,
      },
    ]}
  />
);
const defaultHeader = () => <DxcHeader underlined />;

const childTypeExists = (children, childType) =>
  children.find((child) => child && child.type && child.type === childType);

const DxcApplicationLayout = ({ children }: AppLayoutPropsType): JSX.Element => {
  const ref = useRef(null);
  const colorsTheme = useTheme();
  const [isSideNavVisible, setIsSideNavVisible] = useState(true);
  const [isResponsive, setIsResponsive] = useState(
    window.matchMedia(`(max-width: ${responsiveSizes.medium}rem)`).matches
  );

  const childrenArray = React.Children.toArray(children);
  const header = childTypeExists(childrenArray, DxcHeader) || childTypeExists(childrenArray, Header) || defaultHeader();
  const footer = childTypeExists(childrenArray, DxcFooter) || childTypeExists(childrenArray, Footer) || defaultFooter();
  const sideNav = childTypeExists(childrenArray, SideNav);
  const main = childTypeExists(childrenArray, Main);

  const handleResize = () => {
    setIsResponsive(window.matchMedia(`(max-width: ${responsiveSizes.medium}rem)`).matches);
  };

  useLayoutEffect(() => {
    ref.current && window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    setIsSideNavVisible(isResponsive ? false : true);
  }, [isResponsive]);

  const handleSidenav = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };

  return (
    <ThemeProvider theme={colorsTheme.sidenav}>
      <ApplicationLayoutContainer ref={ref} isResponsive={isResponsive}>
        <HeaderContainer>{header}</HeaderContainer>
        {isResponsive && (
          <HamburguerTrigger role="button" tabIndex={0} onClick={handleSidenav}>
            <HamburguerIcon>{hamburguerIcon}</HamburguerIcon>
            <span>Menu</span>
          </HamburguerTrigger>
        )}
        <BodyContainer>
          <ContentContainer isResponsive={isResponsive}>
            {isSideNavVisible && (
              <SidenavContainer isResponsive={isResponsive}>
                <SidenavContext.Provider value={{ isResponsive }}>{sideNav}</SidenavContext.Provider>
              </SidenavContainer>
            )}
            <MainBodyContainer>
              {main}
              {footer}
            </MainBodyContainer>
          </ContentContainer>
        </BodyContainer>
      </ApplicationLayoutContainer>
    </ThemeProvider>
  );
};

DxcApplicationLayout.Header = Header;
DxcApplicationLayout.Main = Main;
DxcApplicationLayout.Footer = Footer;
DxcApplicationLayout.SideNav = SideNav;

type ApplicationLayoutContainerProps = {
  isResponsive: boolean;
};
const ApplicationLayoutContainer = styled.div<ApplicationLayoutContainerProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${(props) => (props.isResponsive ? "112px" : "64px")};
  bottom: 0;
  left: 0;
  right: 0;
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

const HamburguerTrigger = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 12px 16px;
  gap: 10px;
  width: 100%;
  background-color: #f2f2f2;
  border: none;
  user-select: none;
  z-index: 3;

  :hover {
    background-color: #e6e6e6;
  }
  :active {
    background-color: #cccccc;
  }
  :focus-visible {
    outline: 2px solid #0095ff;
    outline-offset: -2px;
  }
`;

const HamburguerIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 3px;

  & > svg {
    fill: ${(props) => props.theme.arrowColor};
    height: 18px;
    width: 18px;
  }
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

type ContentContainerProps = {
  isResponsive?: boolean;
};
const ContentContainer = styled.div<ContentContainerProps>`
  ${(props) => props.isResponsive && "position: relative;"}
  display: flex;
  flex-direction: row;
`;

type SidenavArrowContainerProps = {
  isSideNavVisible?: boolean;
  isResponsive?: boolean;
};
const SidenavContainer = styled.div<SidenavArrowContainerProps>`
  ${(props) => (props.isResponsive ? "position: fixed;" : "position: sticky; top: 64px;")}
  display: flex;
  flex-direction: row;
  height: calc(100vh - 64px);
  z-index: 1;
`;

const MainBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default DxcApplicationLayout;
