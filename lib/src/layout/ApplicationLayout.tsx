import React, { createContext, useState, useLayoutEffect, useRef } from "react";
import { DxcHeader, DxcFooter } from "../main";
import styled from "styled-components";
import { responsiveSizes } from "../common/variables.js";
import { facebookLogo, linkedinLogo, twitterLogo, hamburguerIcon } from "./Icons";
import AppLayoutPropsType, {
  AppLayoutSidenavPropsType,
  AppLayoutFooterPropsType,
  AppLayoutMainPropsType,
  AppLayoutHeaderPropsType,
} from "./types";
import DxcSidenav from "./sidenav/Sidenav";

type SidenavContextType = {
  isResponsive: boolean;
  setIsSidenavVisible: (isSidenavVisible: boolean) => void;
};
export const SidenavContext = createContext<SidenavContextType | null>(null);

const year = new Date().getFullYear();
const Header = ({ children }: AppLayoutHeaderPropsType): JSX.Element => <>{children}</>;
const Main = ({ children }: AppLayoutMainPropsType): JSX.Element => <>{children}</>;
const Footer = ({ children }: AppLayoutFooterPropsType): JSX.Element => <>{children}</>;
const Sidenav = ({ mode = "overlay", ...childProps }: AppLayoutSidenavPropsType): JSX.Element => (
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
  const [isSidenavVisible, setIsSidenavVisible] = useState(true);
  const [isResponsive, setIsResponsive] = useState(
    window.matchMedia(`(max-width: ${responsiveSizes.medium}rem)`).matches
  );

  const childrenArray = React.Children.toArray(children);
  const header = childTypeExists(childrenArray, DxcHeader) || childTypeExists(childrenArray, Header) || defaultHeader();
  const footer = childTypeExists(childrenArray, DxcFooter) || childTypeExists(childrenArray, Footer) || defaultFooter();
  const sidenav = childTypeExists(childrenArray, Sidenav);
  const main = childTypeExists(childrenArray, Main);

  const handleResize = () => {
    setIsResponsive(window.matchMedia(`(max-width: ${responsiveSizes.medium}rem)`).matches);
  };
  const handleSidenavVisibility = () => {
    setIsSidenavVisible(!isSidenavVisible);
  };

  useLayoutEffect(() => {
    ref.current && window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    setIsSidenavVisible(!isResponsive);
  }, [isResponsive]);

  return (
    <ApplicationLayoutContainer ref={ref} isResponsive={isResponsive} isSidenavVisible={isSidenavVisible}>
      <HeaderContainer>{header}</HeaderContainer>
      {sidenav && isResponsive && (
        <HamburguerTrigger role="button" tabIndex={0} onClick={handleSidenavVisibility}>
          <HamburguerIcon>{hamburguerIcon}</HamburguerIcon>
          <HamburguerText>Menu</HamburguerText>
        </HamburguerTrigger>
      )}
      <BodyContainer>
        <ContentContainer isResponsive={isResponsive}>
          {isSidenavVisible && (
            <SidenavContainer isResponsive={isResponsive}>
              <SidenavContext.Provider value={{ isResponsive, setIsSidenavVisible }}>{sidenav}</SidenavContext.Provider>
            </SidenavContainer>
          )}
          <MainBodyContainer>
            {main}
            {footer}
          </MainBodyContainer>
        </ContentContainer>
      </BodyContainer>
    </ApplicationLayoutContainer>
  );
};

DxcApplicationLayout.Header = Header;
DxcApplicationLayout.Main = Main;
DxcApplicationLayout.Footer = Footer;
DxcApplicationLayout.SideNav = Sidenav;

type ApplicationLayoutContainerProps = {
  isResponsive: boolean;
  isSidenavVisible: boolean;
};
const ApplicationLayoutContainer = styled.div<ApplicationLayoutContainerProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${(props) => (props.isResponsive ? "112px" : "64px")};
  bottom: 0;
  left: 0;
  right: 0;
  ${(props) => props.isResponsive && props.isSidenavVisible && "overflow: hidden;"}
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
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
  width: 100%;
  background-color: #f2f2f2;
  user-select: none;
  z-index: 2;

  :hover {
    background-color: #e6e6e6;
  }
  :active {
    background-color: #cccccc;
  }
`;

const HamburguerIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 3px;

  & > svg {
    height: 18px;
    width: 18px;
  }
`;

const HamburguerText = styled.span`
  font-family: Open Sans, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
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
  height: calc(100vh - 64px);
  z-index: 1;
`;

const MainBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export default DxcApplicationLayout;
