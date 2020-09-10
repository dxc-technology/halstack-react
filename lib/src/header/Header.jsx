import React, { useState, useEffect, useRef, useContext, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";

import DefaultWhite from "./dxc_logo_white.png";
import DefaultBlack from "./dxc_logo_black.png";
import DefaultHamburguerWhite from "./hamb_menu_white.svg";
import DefaultHamburguerBlack from "./hamb_menu_black.svg";
import CloseIcon from "./close_icon.svg";

import { spaces, responsiveSizes, defaultTheme, theme } from "../common/variables.js";
import { getCustomTheme } from "../common/utils.js";
import ThemeContext from "../ThemeContext.js";

const DxcHeader = ({
  underlined = false,
  logoSrc = "default",
  onClick = "",
  content,
  responsiveContent,
  margin,
  padding,
}) => {
  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme)), [customTheme]);

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
          intoMenu && logoSrc === "default" ? DefaultBlack : !intoMenu && logoSrc === "default" ? DefaultWhite : logoSrc
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

  const HamburgerIcon = ({ fill }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
        fill={fill}
      />
    </svg>
  );

  return (
    <ThemeProvider theme={colorsTheme.header}>
      <HeaderContainer underlined={underlined} position="static" margin={margin} ref={ref}>
        <a onClick={() => onClickHandle()}>{getLogoRendered(false)}</a>
        {isResponsive && responsiveContent && (
          <MainContainer>
            <ChildContainer padding={padding}>
              <HamburguerItem underlined={underlined} onClick={handleMenu} tabIndex="0">
                <HamburguerIconStyled>
                  <HamburgerIcon fill={theme.header.hamburguerColor} />
                </HamburguerIconStyled>
                <HamburguerTitle>Menu</HamburguerTitle>
              </HamburguerItem>
            </ChildContainer>

            {
              <div>
                <ResponsiveMenu hasVisibility={isMenuVisible} refSize={refSize}>
                  {getLogoRendered(true)}
                  <MenuContent>{responsiveContent(handleMenu)}</MenuContent>
                  <CloseContainer onClick={handleMenu} src={CloseIcon} className="closeIcon" tabIndex="0" />
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
    background-color: ${(props) => props.theme.backgroundColor};

    color: ${(props) => props.theme.fontColor};

    border-bottom: ${(props) => `2px solid ${props.theme.underlinedColor}`};

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
`;

const HamburguerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 54px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => `${props.theme.hamburguerColor}${props.theme.hoverHamburguerColor}`};
  }
  &:focus {
    outline: ${(props) => props.theme.focusColor} auto 1px;
  }
`;

const HamburguerIconStyled = styled.div`
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
  background-color: ${(props) => props.theme.backgroundColorMenu};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2000;
  color: ${(props) => props.theme.fontColorMenu};
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
  height: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CloseContainer = styled.img`
  cursor: pointer;
  :focus {
    outline: ${(props) => props.theme.focusColor} auto 1px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => `${props.theme.overlayColor}${props.theme.overlayOpacity}`};
  visibility: ${(props) => (props.hasVisibility ? "visible" : "hidden")};
  opacity: ${(props) => (props.hasVisibility ? "1" : "0")};
  display: ${(props) => (props.refSize <= responsiveSizes.mobileLarge ? "none" : "")};
  transition: opacity 0.2s 0.2s ease-in-out;
  z-index: 1600;
`;

DxcHeader.propTypes = {
  logoSrc: PropTypes.string,
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
