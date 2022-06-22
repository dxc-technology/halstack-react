import React, { useState, useEffect, useRef } from "react";
import DxcHeader from "../header/Header";
import DxcFooter from "../footer/Footer";
import DxcSidenav from "../sidenav/Sidenav";
import styled from "styled-components";
import { responsiveSizes } from "../common/variables.js";
import { facebookLogo, linkedinLogo, twitterLogo, hamburguerIcon } from "./Icons";
import AppLayoutPropsType, {
  AppLayoutSidenavPropsType,
  AppLayoutFooterPropsType,
  AppLayoutMainPropsType,
  AppLayoutHeaderPropsType,
} from "./types";
import { v4 as uuidv4 } from "uuid";
import { SidenavContextProvider, useResponsiveSidenavVisibility } from "./SidenavContext";
import useTranslatedLabels from "../useTranslatedLabels";

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

const childTypeExists = (children, childType) => children.find((child) => child?.type === childType);

const DxcApplicationLayout = ({ visibilityToggleLabel = "", children }: AppLayoutPropsType): JSX.Element => {
  const [appLayoutId] = useState(`appLayout-${uuidv4()}`);
  const visibilityToggleLabelId = `label-${appLayoutId}`;
  const [isSidenavVisibleResponsive, setIsSidenavVisibleResponsive] = useState(false);
  const [isResponsive, setIsResponsive] = useState(
    window.matchMedia(`(max-width: ${responsiveSizes.medium}rem)`).matches
  );
  const ref = useRef(null);
  const translatedLabels = useTranslatedLabels();

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

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsResponsive]);

  useEffect(() => {
    !isResponsive && setIsSidenavVisibleResponsive(false);
  }, [isResponsive, setIsSidenavVisibleResponsive]);

  return (
    <ApplicationLayoutContainer isSidenavVisible={isSidenavVisibleResponsive} ref={ref}>
      <HeaderContainer>{header}</HeaderContainer>
      {sidenav && isResponsive && (
        <VisibilityToggle>
          <HamburguerTrigger
            onClick={handleSidenavVisibility}
            aria-labelledby={visibilityToggleLabel ? visibilityToggleLabelId : undefined}
            aria-label={visibilityToggleLabel ? undefined : translatedLabels.applicationLayout.visibilityToggleTitle}
            title={translatedLabels.applicationLayout.visibilityToggleTitle}
          >
            {hamburguerIcon}
          </HamburguerTrigger>
          {visibilityToggleLabel && (
            <VisibilityToggleLabel id={visibilityToggleLabelId}>{visibilityToggleLabel}</VisibilityToggleLabel>
          )}
        </VisibilityToggle>
      )}
      <BodyContainer>
        <SidenavContextProvider value={setIsSidenavVisibleResponsive}>
          {sidenav && (isResponsive ? isSidenavVisibleResponsive : true) && (
            <SidenavContainer>{sidenav}</SidenavContainer>
          )}
        </SidenavContextProvider>
        <MainContentContainer>
          <MainContainer>{main}</MainContainer>
          {footer}
        </MainContentContainer>
      </BodyContainer>
    </ApplicationLayoutContainer>
  );
};

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
  border: 0px solid transparent;
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
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

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
    top: 112px;
  }
`;

const MainContainer = styled.div`
  flex: 1;
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

DxcApplicationLayout.Header = Header;
DxcApplicationLayout.Main = Main;
DxcApplicationLayout.Footer = Footer;
DxcApplicationLayout.SideNav = Sidenav;
DxcApplicationLayout.useResponsiveSidenavVisibility = useResponsiveSidenavVisibility;

export default DxcApplicationLayout;
