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
import { v4 as uuidv4 } from "uuid";

type SidenavContextType = {
  setIsSidenavVisibleResponsive: (isSidenavVisible: boolean) => void;
};
export const SidenavContext = createContext<SidenavContextType | null>(null);

const year = new Date().getFullYear();
const Header = ({ children }: AppLayoutHeaderPropsType): JSX.Element => <>{children}</>;
const Main = ({ children }: AppLayoutMainPropsType): JSX.Element => <>{children}</>;
const Footer = ({ children }: AppLayoutFooterPropsType): JSX.Element => <>{children}</>;
const Sidenav = ({ ...childProps }: AppLayoutSidenavPropsType): JSX.Element => (
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

const DxcApplicationLayout = ({ visibilityToggleLabel = "", children }: AppLayoutPropsType): JSX.Element => {
  const [appLayoutId] = useState(`appLayout-${uuidv4()}`);
  const visibilityToggleLabelId = `label-${appLayoutId}`;

  const ref = useRef(null);
  const [isSidenavVisibleResponsive, setIsSidenavVisibleResponsive] = useState(false);
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
    setIsSidenavVisibleResponsive((isSidenavVisibleResponsive) => !isSidenavVisibleResponsive);
  };

  useLayoutEffect(() => {
    ref.current && window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ApplicationLayoutContainer ref={ref} isSidenavVisible={isSidenavVisibleResponsive}>
      <HeaderContainer>{header}</HeaderContainer>
      {sidenav && isResponsive && (
        <VisibilityToggle>
          <HamburguerTrigger
            onClick={handleSidenavVisibility}
            aria-labelledBy={visibilityToggleLabelId}
            title="Toggle visibility sidenav"
          >
            {hamburguerIcon}
          </HamburguerTrigger>
          <VisibilityToggleLabel id={visibilityToggleLabelId}>{visibilityToggleLabel}</VisibilityToggleLabel>
        </VisibilityToggle>
      )}
      <BodyContainer>
        <ContentContainer>
          {(!isResponsive || (isResponsive && isSidenavVisibleResponsive)) && (
            <SidenavContainer>
              <SidenavContext.Provider value={{ setIsSidenavVisibleResponsive }}>{sidenav}</SidenavContext.Provider>
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
  isSidenavVisible: boolean;
};
const ApplicationLayoutContainer = styled.div<ApplicationLayoutContainerProps>`
  position: absolute;
  top: 64px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: ${responsiveSizes.medium}rem) {
    top: 112px;
    ${(props) => props.isSidenavVisible && "overflow: hidden;"}
  }
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

const VisibilityToggle = styled.div`
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
`;

const HamburguerTrigger = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  border: 1px solid transparent;
  border-radius: 2px;
  padding: 3px;
  background-color: transparent;
  box-shadow: 0 0 0 2px transparent;
  cursor: pointer;

  :hover {
    background-color: #e6e6e6;
  }
  :active {
    background-color: #cccccc;
  }
  :focus,
  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #0095ff;
  }
  & > svg {
    height: 20px;
    width: 20px;
  }
`;

const VisibilityToggleLabel = styled.span`
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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${responsiveSizes.medium}rem) {
    position: relative;
  }
`;

const SidenavContainer = styled.div`
  position: sticky;
  top: 64px;
  display: flex;
  height: calc(100vh - 64px);
  z-index: 1;

  @media (max-width: ${responsiveSizes.medium}rem) {
    position: fixed;
  }
`;

const MainBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export default DxcApplicationLayout;
