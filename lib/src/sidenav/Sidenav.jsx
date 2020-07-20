import React, { useState, useRef, useEffect, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import { colors, spaces, responsiveSizes } from "../common/variables.js";
import "../common/OpenSans.css";
import ArrowIcon from "./arrow_icon.svg";
import ThemeContext from "../ThemeContext.js";

const DxcSidenav = ({ navContent, pageContent, padding, mode, arrowDistance, displayArrow = true }) => {
  const ref = useRef(null);

  const [sidenavSize, setSidenavSize] = useState();
  const [isShown, setIsShown] = useState();
  const [isResponsive, setIsResponsive] = useState();
  const colorsTheme = useContext(ThemeContext) || colors;

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

  return (
    <ThemeProvider theme={colorsTheme}>
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
                  <ArrowImage src={ArrowIcon} isShown={isShown}></ArrowImage>
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

  background-color: #f8f8f8;

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
  background-color: ${(props) => props.theme.lighterGrey};
  border-radius: 50%;
  transform: ${(props) => (props.isShown ? "rotate(-180deg)" : "rotate(0deg)")};
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
`;

const ArrowImage = styled.img`
  width: 18px;
  height: 18px;
  margin-left: ${(props) => (props.isShown ? "0" : "10px")};
  transition: margin 0.4s ease-in;
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
