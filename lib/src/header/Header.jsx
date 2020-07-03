import React, { useState, useEffect, useRef, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";

import DefaultWhite from "./dxc_logo_white.png";
import DefaultBlack from "./dxc_logo_black.png";
import DefaultHamburguerWhite from "./hamb_menu_white.svg";
import DefaultHamburguerBlack from "./hamb_menu_black.svg";
import CloseIcon from "./close_icon.svg";

import { colors, spaces, responsiveSizes } from "../common/variables.js";
import ThemeContext from "../ThemeContext.js";

const DxcHeader = ({
  theme = "light",
  underlined = false,
  logoSrc = "default",
  onClick = "",
  content,
  responsiveContent,
  margin,
  padding,
}) => {
  const colorsTheme = useContext(ThemeContext) || colors;

  function onClickHandle() {
    if (typeof onClick === "function") {
      onClick();
    }
  }

  const ref = useRef(null);

  const [refSize, setRefSize] = useState();
  const [isResponsive, setIsResponsive] = useState();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleResize = (refWidth) => {
    if (refWidth) {
      setRefSize(refWidth);
      if (refWidth <= responsiveSizes.tablet && !isResponsive) {
        setIsResponsive(true);
      } else {
        setIsResponsive(false);
      }
    }
  };

  const handleMenu = () => {
    if (isResponsive && !isMenuVisible) {
      setIsMenuVisible(!isMenuVisible);
    } else {
      setIsMenuVisible(!isMenuVisible);
    }
  };

  const getLogoRendered = (intoMenu) => {
    return (
      <LogoIcon
        logoSrc={logoSrc}
        src={
          (intoMenu && logoSrc === "default" && DefaultBlack) ||
          (theme === "light" && underlined && logoSrc === "default")
            ? DefaultBlack
            : theme === "light" && !underlined && logoSrc === "default"
            ? DefaultWhite
            : theme === "dark" && underlined && logoSrc === "default"
            ? DefaultWhite
            : theme === "dark" && !underlined && logoSrc === "default"
            ? DefaultBlack
            : logoSrc
        }
      />
    );
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

  return (
    <ThemeProvider theme={colorsTheme}>
      <HeaderContainer brightness={theme} underlined={underlined} position="static" margin={margin} ref={ref}>
        <a onClick={() => onClickHandle()}>{getLogoRendered(false)}</a>
        {isResponsive && (
          <MainContainer>
            <ChildContainer padding={padding}>
              <HamburguerItem brightness={theme} underlined={underlined} onClick={handleMenu}>
                <HamburguerIcon
                  src={
                    theme === "light" && underlined
                      ? DefaultHamburguerBlack
                      : theme === "light" && !underlined
                      ? DefaultHamburguerWhite
                      : theme === "dark" && underlined
                      ? DefaultHamburguerWhite
                      : DefaultHamburguerBlack
                  }
                ></HamburguerIcon>
                <HamburguerTitle>Menu</HamburguerTitle>
              </HamburguerItem>
            </ChildContainer>

            {
              <div>
                <ResponsiveMenu hasVisibility={isMenuVisible} refSize={refSize}>
                  {getLogoRendered(true)}
                  <MenuContent>{responsiveContent(handleMenu)}</MenuContent>
                  <img onClick={handleMenu} src={CloseIcon} className="closeIcon" />
                </ResponsiveMenu>
                <Overlay onClick={handleMenu} hasVisibility={isMenuVisible} refSize={refSize}></Overlay>
              </div>
            }
          </MainContainer>
        )}
        {!isResponsive && <ChildContainer padding={padding}>{content}</ChildContainer>}
      </HeaderContainer>
    </ThemeProvider>
  );
};

const HeaderContainer = styled(AppBar)`
  margin-bottom: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};

  &.MuiAppBar-colorPrimary {
    background-color: ${(props) =>
      props.brightness === "light" && props.underlined === true
        ? props.theme.white
        : props.brightness === "light" && props.underlined === false
        ? props.theme.black
        : props.brightness === "dark" && props.underlined === true
        ? props.theme.black
        : props.brightness === "dark" && props.underlined === false
        ? props.theme.white
        : props.theme.white};

    color: ${(props) =>
      props.brightness === "light" && props.underlined === true
        ? props.theme.black
        : props.brightness === "light" && props.underlined === false
        ? props.theme.white
        : props.brightness === "dark" && props.underlined === true
        ? props.theme.white
        : props.brightness === "dark" && props.underlined === false
        ? props.theme.black
        : props.theme.black};

    border-bottom: ${(props) =>
      props.brightness === "light" && props.underlined === true
        ? `solid ${props.theme.black}  2px`
        : props.brightness === "light" && props.underlined === false
        ? "none"
        : props.brightness === "dark" && props.underlined === true
        ? `solid ${props.theme.white}  2px`
        : props.brightness === "dark" && props.underlined === false
        ? "none"
        : `solid ${props.theme.black}  2px`};

    font-family: "Open Sans", sans-serif;

    &.MuiPaper-elevation4 {
      box-shadow: none;
    }
    .ChildComponents {
      display: flex;
      align-items: center;
    }
  }
  & {
    min-height: 64px;
  }
  &.MuiAppBar-root {
    flex-direction: row;
    align-items: center;
    padding: 0px 0px 0px 20px;
    justify-content: space-between;
  }
`;

const LogoIcon = styled.img`
  max-height: 32px;
  width: auto;
  vertical-align: middle;

  cursor: ${(props) => {
    if (props.onLogoClick === "") {
      return "default";
    } else {
      return "pointer";
    }
  }};
`;

const ChildContainer = styled.div`
  * {
    width: calc(100% - 186px);
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: flex-end;
    padding: ${(props) => (props.padding && typeof props.padding !== "object" ? spaces[props.padding] : "0px")};
    padding-top: ${(props) =>
      props.padding && typeof props.padding === "object" && props.padding.top ? spaces[props.padding.top] : ""};
    padding-right: ${(props) =>
      props.padding && typeof props.padding === "object" && props.padding.right ? spaces[props.padding.right] : ""};
    padding-bottom: ${(props) =>
      props.padding && typeof props.padding === "object" && props.padding.bottom ? spaces[props.padding.bottom] : ""};
    padding-left: ${(props) =>
      props.padding && typeof props.padding === "object" && props.padding.left ? spaces[props.padding.left] : ""};
  }
`;

const HamburguerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 54px;
  &:hover {
    background-color: ${(props) =>
      props.brightness === "light" && props.underlined === true
        ? props.theme.lightGrey
        : props.brightness === "light" && props.underlined === false
        ? `${props.theme.darkGrey}80`
        : props.brightness === "dark" && props.underlined === true
        ? `${props.theme.darkGrey}80`
        : props.brightness === "dark" && props.underlined === false
        ? props.theme.lightGrey
        : props.theme.lightGrey};
  }
  cursor: pointer;
`;

const HamburguerIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const HamburguerTitle = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 600;
`;

const MainContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

const ResponsiveMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.lightGrey};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2000;
  color: ${(props) => props.theme.black};
  width: ${(props) =>
    props.refSize <= responsiveSizes.laptop && props.refSize > responsiveSizes.mobileLarge ? "60vw" : "100vw"};
  height: ${window.innerHeight}px;
  padding: 20px;
  transform: ${(props) => (props.hasVisibility ? "translateX(0)" : "translateX(100vw)")};
  opacity: ${(props) => (props.hasVisibility ? "1" : "0.96")};
  transition-property: transform, opacity;
  transition-duration: 0.6s;
  transition-timing-function: ease-in-out;
  box-sizing: border-box;

  & > img:first-of-type {
    position: absolute;
    top: 23px;
    left: 20px;
  }

  & > img:last-of-type {
    position: fixed;
    top: 23px;
    right: 20px;
    width: 24px;
    height: 24px;
    padding: ${spaces.xxsmall};
  }
`;

const MenuContent = styled.div`
  * {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    margin-top: 40px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.mediumBlack};
  visibility: ${(props) => (props.hasVisibility ? "visible" : "hidden")};
  opacity: ${(props) => (props.hasVisibility ? "1" : "0")};
  display: ${(props) => (props.refSize <= responsiveSizes.mobileLarge ? "none" : "")};
  transition: opacity 0.2s 0.2s ease-in-out;
  z-index: 1600;
`;

DxcHeader.propTypes = {
  logoSrc: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark", ""]),
  underlined: PropTypes.bool,
  onClick: PropTypes.func,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  content: PropTypes.object,
  responsiveContent: PropTypes.object,
};

export default DxcHeader;
