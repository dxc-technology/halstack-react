/* eslint-disable react/require-default-props */
import React, { useState, useEffect, useRef } from "react";
import { DxcHeader, DxcFooter, DxcSidenav } from "../index";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { spaces, responsiveSizes } from "../common/variables.js";
import { facebookLogo, linkedinLogo, twitterLogo } from "./Icons";
import useTheme from "../useTheme.js";

const year = new Date().getFullYear();

const Header = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

const Main = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

const Footer = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

const SideNav = (props) => {
  const { displayArrow, mode, ...childProps } = props;
  return <DxcSidenav {...childProps}>{childProps.children}</DxcSidenav>;
};

SideNav.propTypes = {
  mode: PropTypes.oneOf(["overlay", "push", ""]),
  displayArrow: PropTypes.bool,
  padding: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
  ]),
};

const defaultFooter = () => {
  return (
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
};

const defaultHeader = () => {
  return <DxcHeader underlined />;
};
const childTypeExists = (children, childType) => {
  return children.find((child) => child && child.type && child.type === childType);
};

const DxcApplicationLayout = ({ children }) => {
  const ref = useRef(null);

  const colorsTheme = useTheme();
  const [isSideNavVisible, setIsSideNavVisible] = useState(true);
  const [isResponsive, setIsResponsive] = useState();

  const childrenArray = React.Children.toArray(children);

  const header = childTypeExists(childrenArray, DxcHeader) || childTypeExists(childrenArray, Header) || defaultHeader();
  const footer = childTypeExists(childrenArray, DxcFooter) || childTypeExists(childrenArray, Footer) || defaultFooter();
  const sideNav = childTypeExists(childrenArray, SideNav);
  const main = childTypeExists(childrenArray, Main);
  const displayArrow = sideNav && sideNav.props && sideNav.props.displayArrow;
  const sideNavMode = sideNav && sideNav.props && sideNav.props.mode;

  const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15.995" height="10.01" viewBox="0 0 15.995 10.01">
      <path
        data-testid="arrow-to-right"
        d="M17.71,11.29l-4-4a1,1,0,0,0-1.42,1.42L14.59,11H3a1,1,0,0,0,0,2H14.59l-2.3,2.29a1,1,0,1,0,1.42,1.42l4-4a1.034,1.034,0,0,0,0-1.42Z"
        transform="translate(-2 -6.996)"
      />
    </svg>
  );

  const handleResize = (width) => {
    if (width) {
      if (width <= responsiveSizes.tablet ? setIsResponsive(true) : setIsResponsive(false));
      setIsSideNavVisible(true);
    }
  };

  const handleEventListener = () => {
    handleResize(ref.current.offsetWidth);
  };

  useEffect(() => {
    if (ref.current) {
      window.addEventListener("resize", handleEventListener);
      handleResize(ref.current.offsetWidth);
    }
    return () => {
      window.removeEventListener("resize", handleEventListener);
    };
  }, []);

  const handleSidenav = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };

  return (
    <ThemeProvider theme={colorsTheme.sidenav}>
      <ApplicationLayoutContainer ref={ref}>
        <HeaderContainer>{header}</HeaderContainer>
        <BodyContainer>
          <ContentContainer>
            <SideNavArrowContainer isSideNavVisible={isSideNavVisible}>
              {sideNav}
              <ArrowContainer>
                {sideNav && (displayArrow || isResponsive) && (
                  <ArrowTrigger tabIndex={0} onClick={handleSidenav} isSideNavVisible={isSideNavVisible}>
                    <ArrowIcon />
                  </ArrowTrigger>
                )}
              </ArrowContainer>
            </SideNavArrowContainer>
            <MainBodyContainer>
              <MainContent
                sideNav={sideNav}
                mode={isResponsive ? "overlay" : sideNavMode}
                isSideNavVisible={isSideNavVisible}
              >
                {main}
              </MainContent>
              <FooterContainer
                sideNav={sideNav}
                mode={isResponsive ? "overlay" : sideNavMode}
                isSideNavVisible={isSideNavVisible}
              >
                {footer}
              </FooterContainer>
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

const ApplicationLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 64px;
  bottom: 0;
  left: 0;
  right: 0;
`;

const HeaderContainer = styled.div`
  z-index: 1250;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const BodyContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: flex-start;
`;

const MainBodyContainer = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

const FooterContainer = styled.div`
  margin-left: ${(props) =>
    props.sideNav
      ? (props.mode === "push" && !props.isSideNavVisible) || props.mode === "overlay"
        ? "-300px"
        : ""
      : ""};
  transition: margin 0.4s ease-in-out;
`;

const MainContent = styled.div`
  flex-grow: 1;
  position: relative;
  min-height: calc(100vh - 184px);
  margin-left: ${(props) => (props.sideNav ? (props.mode === "push" && props.isSideNavVisible ? "" : "-297px") : "")};
  transition: margin 0.4s ease-in-out;
`;

const SideNavArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 1200;
  transform: ${(props) =>
    props.isSideNavVisible ? "translateX(0)" : !props.isSideNavVisible ? "translateX(-100%)" : ""};
  transition: transform 0.4s ease-in-out;
  height: calc(100vh - 64px);
  position: sticky;
  top: 64px;
`;

const ArrowContainer = styled.div`
  position: absolute;
  height: calc(100vh - 64px);
  left: 279px;
`;

const ArrowTrigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 45vh;
  width: 42px;
  min-height: 42px;
  background-color: ${(props) => `${props.theme.arrowContainerColor}`};
  border-radius: 50%;
  transform: ${(props) => (props.isSideNavVisible ? "rotate(-180deg)" : "rotate(0deg)")};
  transition: transform 0.4s ease-in-out;
  z-index: 1250;
  cursor: pointer;
  & > svg {
    fill: ${(props) => props.theme.arrowColor};
  }
`;

export default DxcApplicationLayout;
