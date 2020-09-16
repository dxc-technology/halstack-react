import React, { useState, useRef, useEffect, useContext, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import { spaces, responsiveSizes, defaultTheme, theme } from "../common/variables.js";
import "../common/OpenSans.css";
import { getCustomTheme } from "../common/utils.js";
import ThemeContext from "../ThemeContext.js";

const DxcSidenav = ({ navContent, pageContent, padding, mode, arrowDistance, displayArrow = true }) => {
  const ref = useRef(null);

  const [sidenavSize, setSidenavSize] = useState();
  const [isShown, setIsShown] = useState();
  const [isResponsive, setIsResponsive] = useState();
  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme)), [customTheme]);

  const handleVisbility = (width) => {
    setIsShown(width <= responsiveSizes.tablet ? false : true);
  };

  const handleResize = (width) => {
    if (width) {
      setSidenavSize(width);
      if (width <= responsiveSizes.tablet ? setIsResponsive(true) : setIsResponsive(false));
    }
  };

  const handleEventListener = () => {
    handleResize(ref.current.offsetWidth);
  };

  useEffect(() => {
    if (ref.current) {
      window.addEventListener("resize", handleEventListener);
      handleResize(ref.current.offsetWidth);
      handleVisbility(ref.current.offsetWidth);
    }
    return () => {
      window.removeEventListener("resize", handleEventListener);
    };
  }, []);

  const handleSidenav = () => {
    setIsShown(!isShown);
  };

  const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15.995" height="10.01" viewBox="0 0 15.995 10.01">
      <path
        data-testid="arrow-to-right"
        d="M17.71,11.29l-4-4a1,1,0,0,0-1.42,1.42L14.59,11H3a1,1,0,0,0,0,2H14.59l-2.3,2.29a1,1,0,1,0,1.42,1.42l4-4a1.034,1.034,0,0,0,0-1.42Z"
        transform="translate(-2 -6.996)"
      />
    </svg>
  );

  return (
    <ThemeProvider theme={colorsTheme.sidenav}>
      <SidenavComponent ref={ref}>
        {ref.current && (
          <React.Fragment>
            <Sidenav
              navContent={navContent}
              isShown={isShown}
              padding={padding}
              mode={isResponsive ? "overlay" : mode}
              sidenavSize={sidenavSize}
              isResponsive={isResponsive}
            >
              {navContent}
              {(displayArrow || isResponsive) && (
                <ArrowTrigger
                  onClick={handleSidenav}
                  isShown={isShown}
                  sidenavSize={sidenavSize}
                  arrowDistance={arrowDistance}
                >
                  <ArrowIcon isShown={isShown}></ArrowIcon>
                </ArrowTrigger>
              )}
            </Sidenav>
            <PageContent
              pageContent={pageContent}
              padding={padding}
              isShown={isShown}
              mode={isResponsive ? "overlay" : mode}
              sidenavSize={sidenavSize}
              isResponsive={isResponsive}
            >
              {pageContent}
            </PageContent>
          </React.Fragment>
        )}
      </SidenavComponent>
    </ThemeProvider>
  );
};

const SidenavComponent = styled.div`
  display: flex;
  position: relative;
`;

const Sidenav = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundColor};
  width: ${(props) => (props.sidenavSize <= responsiveSizes.tablet ? "60%" : "300px")};
  box-sizing: border-box;
  padding: ${(props) => (props.padding ? spaces[props.padding] : "")};
  z-index: ${(props) => (props.mode === "overlay" ? "400" : "auto")};
  transform: ${(props) => (props.isShown ? "translateX(0)" : !props.isShown ? "translateX(-100%)" : "")};
  transition: transform 0.4s ease-in-out;
`;

const ArrowTrigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${(props) => (props.sidenavSize <= responsiveSizes.tablet ? "calc(100% - 21px)" : "279px")};
  top: ${(props) => (props.arrowDistance ? props.arrowDistance : "calc(50% - 21px)")};
  width: 42px;
  min-height: 42px;
  background-color: ${(props) => `${props.theme.arrowContainerColor}${props.theme.arrowContainerOpacity}`};
  border-radius: 50%;
  transform: ${(props) => (props.isShown ? "rotate(-180deg)" : "rotate(0deg)")};
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
  & > svg {
    fill: ${(props) => props.theme.arrowColor};
  }
`;

const PageContent = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  height: 100%;
  padding: ${(props) => (props.padding ? spaces[props.padding] : "")};
  margin-left: ${(props) =>
    props.isShown && props.mode === "push" && !props.isResponsive ? "" : !props.isResponsive ? "-300px" : "-60%"};
  transition: margin 0.4s ease-in-out;
  width: ${(props) => (props.isShown && props.mode === "push" ? "calc(100% - 300px)" : "calc(100%)")};
`;

DxcSidenav.propTypes = {
  mode: PropTypes.oneOf(["overlay", "push", ""]),
  padding: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  navContent: PropTypes.object,
  pageContent: PropTypes.object,
  arrowDistance: PropTypes.string,
  displayArrow: PropTypes.bool,
};
export default DxcSidenav;
