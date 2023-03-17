import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import DxcHeader from "../header/Header";
import DxcFooter from "../footer/Footer";
import DxcSidenav from "../sidenav/Sidenav";
import styled from "styled-components";
import { responsiveSizes } from "../common/variables";
import { facebookLogo, linkedinLogo, twitterLogo, hamburgerIcon } from "./Icons";
import AppLayoutPropsType, { AppLayoutMainPropsType } from "./types";
import { SidenavContextProvider, useResponsiveSidenavVisibility } from "./SidenavContext";
import useTranslatedLabels from "../useTranslatedLabels";

const year = new Date().getFullYear();
const Main = ({ children }: AppLayoutMainPropsType): JSX.Element => <>{children}</>;
const defaultHeader = () => <DxcHeader underlined />;

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

const childTypeExists = (children, childType) => children.find((child) => child?.type === childType);

const DxcApplicationLayout = ({
  visibilityToggleLabel = "",
  header,
  sidenav,
  footer,
  children,
}: AppLayoutPropsType): JSX.Element => {
  const [isSidenavVisibleResponsive, setIsSidenavVisibleResponsive] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);
  const ref = useRef(null);
  const translatedLabels = useTranslatedLabels();

  const childrenArray = React.Children.toArray(children);
  const headerContent = header || defaultHeader();
  const footerContent = footer || defaultFooter();

  const main = childTypeExists(childrenArray, Main);

  const handleResize = () => {
    setIsResponsive(window.matchMedia(`(max-width: ${responsiveSizes.medium}rem)`).matches);
  };
  const handleSidenavVisibility = () => {
    setIsSidenavVisibleResponsive((isSidenavVisibleResponsive) => !isSidenavVisibleResponsive);
  };

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    !isResponsive && setIsSidenavVisibleResponsive(false);
  }, [isResponsive]);

  return (
    <ApplicationLayoutContainer
      hasSidenav={sidenav ? true : false}
      isSidenavVisible={isSidenavVisibleResponsive}
      ref={ref}
    >
      <HeaderContainer>{headerContent}</HeaderContainer>
      {sidenav && isResponsive && (
        <VisibilityToggle>
          <HamburgerTrigger
            onClick={handleSidenavVisibility}
            aria-label={visibilityToggleLabel ? undefined : translatedLabels.applicationLayout.visibilityToggleTitle}
            title={translatedLabels.applicationLayout.visibilityToggleTitle}
          >
            {hamburgerIcon}
            {visibilityToggleLabel}
          </HamburgerTrigger>
        </VisibilityToggle>
      )}
      <BodyContainer>
        <SidenavContextProvider value={setIsSidenavVisibleResponsive}>
          {sidenav && (isResponsive ? isSidenavVisibleResponsive : true) && (
            <SidenavContainer>{sidenav}</SidenavContainer>
          )}
        </SidenavContextProvider>
        <MainContainer>
          <MainContentContainer>{main}</MainContentContainer>
          {footerContent}
        </MainContainer>
      </BodyContainer>
    </ApplicationLayoutContainer>
  );
};

type ApplicationLayoutContainerProps = {
  isSidenavVisible: boolean;
  hasSidenav: boolean;
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
    ${(props) => props.hasSidenav && "top: 116px"};
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
  padding: 4px 16px;
  width: 100%;
  background-color: #f2f2f2;
  user-select: none;
  z-index: 2;
`;

const HamburgerTrigger = styled.button`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  border: 0px solid transparent;
  border-radius: 2px;
  padding: 12px 4px;
  background-color: transparent;
  box-shadow: 0 0 0 2px transparent;
  font-family: Open Sans, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #000;
  cursor: pointer;
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

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const SidenavContainer = styled.div`
  position: sticky;
  top: 64px;
  display: flex;
  height: calc(100vh - 64px);
  z-index: 1;

  @media (max-width: ${responsiveSizes.medium}rem) {
    position: absolute;
    top: 0px;
    height: 100%;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainContentContainer = styled.div`
  flex: 1;
`;

DxcApplicationLayout.Header = DxcHeader;
DxcApplicationLayout.Main = Main;
DxcApplicationLayout.Footer = DxcFooter;
DxcApplicationLayout.SideNav = DxcSidenav;
DxcApplicationLayout.useResponsiveSidenavVisibility = useResponsiveSidenavVisibility;

export default DxcApplicationLayout;