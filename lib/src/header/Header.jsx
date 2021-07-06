import React, { useState, useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import DxcDropdown from "../dropdown/Dropdown";
import CloseIcon from "./close_icon.svg";
import { spaces, responsiveSizes } from "../common/variables.js";
import useTheme from "../useTheme.js";

const Dropdown = (props) => {
  return (
    <HeaderDropdown>
      <DxcDropdown {...props} />
    </HeaderDropdown>
  );
};

const HeaderDropdown = styled.div`
  button {
    background-color: transparent;
    :hover {
      background-color: transparent;
    }
  }
`;

const DxcHeader = ({
  underlined = false,
  logoSrc = "default",
  onClick,
  content,
  responsiveContent,
  margin,
  padding,
  tabIndex = 0,
}) => {
  const colorsTheme = useTheme();
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
          intoMenu && logoSrc === "default"
            ? colorsTheme.header.logoResponsive
            : !intoMenu && logoSrc === "default"
            ? colorsTheme.header.logo
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

  const HamburgerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
    </svg>
  );

  return (
    <ThemeProvider theme={colorsTheme.header}>
      <HeaderContainer underlined={underlined} position="static" margin={margin} ref={ref}>
        <LogoAnchor
          tabIndex={typeof onClick === "function" ? tabIndex : -1}
          interactuable={typeof onClick === "function"}
          onClick={onClick}
        >
          {getLogoRendered(false)}
        </LogoAnchor>
        {isResponsive && responsiveContent && (
          <MainContainer>
            <ChildContainer padding={padding}>
              <HamburguerItem tabIndex={tabIndex} underlined={underlined} onClick={handleMenu}>
                <HamburgerIcon />
                <HamburguerTitle>Menu</HamburguerTitle>
              </HamburguerItem>
            </ChildContainer>

            {
              <div>
                <ResponsiveMenu hasVisibility={isMenuVisible} refSize={refSize}>
                  {getLogoRendered(true)}
                  <MenuContent>{responsiveContent(handleMenu)}</MenuContent>
                  <CloseContainer tabIndex={tabIndex} onClick={handleMenu} src={CloseIcon} className="closeIcon" />
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

DxcHeader.Dropdown = Dropdown;

const HeaderContainer = styled(AppBar)`
  margin-bottom: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};

  &.MuiAppBar-colorPrimary {
    background-color: ${(props) => props.theme.backgroundColor};
    border-bottom: ${(props) =>
      props.underlined &&
      `${props.theme.underlinedThickness} ${props.theme.underlinedStyle} ${props.theme.underlinedColor}`};

    &.MuiPaper-elevation4 {
      box-shadow: none;
    }
    .ChildComponents {
      display: flex;
      align-items: center;
    }
  }
  & {
    min-height: ${(props) => props.theme.minHeight};
  }
  &.MuiAppBar-root {
    flex-direction: row;
    align-items: center;
    padding: ${(props) =>
      `${props.theme.paddingTop} ${props.theme.paddingRight} ${props.theme.paddingBottom} ${props.theme.paddingLeft}`};
    justify-content: space-between;
  }
`;

const LogoAnchor = styled.a`
  ${(props) => {
    if (!props.interactuable) {
      return "cursor: default; outline:none;";
    } else {
      return "cursor: pointer;";
    }
  }}
`;

const LogoIcon = styled.img`
  max-height: ${(props) => props.theme.logoHeight};
  width: ${(props) => props.theme.logoWidth};
  vertical-align: middle;
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
  font-family: ${(props) => props.theme.customContentFontFamily};
  font-style: ${(props) => props.theme.customContentFontStyle};
  font-size: ${(props) => props.theme.customContentFontSize};
  font-weight: ${(props) => props.theme.customContentFontWeight};
  color: ${(props) => props.theme.customContentFontColor};
`;

const HamburguerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 54px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.hamburguerHoverColor};
  }
  &:focus {
    outline: ${(props) => props.theme.hamburguerFocusColor} auto 1px;
  }
  & > svg {
    fill: ${(props) => props.theme.hamburguerIconColor};
  }
`;

const HamburguerTitle = styled.span`
  font-family: ${(props) => props.theme.hamburguerFontFamily};
  font-style: ${(props) => props.theme.hamburguerFontStyle};
  font-size: ${(props) => props.theme.hamburguerFontSize};
  text-transform: ${(props) => props.theme.hamburguerTextTransform};
  font-weight: ${(props) => props.theme.hamburguerFontWeight};
  color: ${(props) => props.theme.hamburguerFontColor};
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
  background-color: ${(props) => props.theme.menuBackgroundColor};
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${(props) => props.theme.menuZindex};
  width: ${(props) =>
    props.refSize <= responsiveSizes.laptop && props.refSize > responsiveSizes.mobileLarge
      ? `${(props) => props.theme.menuTabletWidth}`
      : `${(props) => props.theme.menuMobileWidth}`};
  height: 100vh;
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
  font-family: ${(props) => props.theme.menuCustomContentFontFamily};
  font-style: ${(props) => props.theme.menuCustomContentFontStyle};
  font-size: ${(props) => props.theme.menuCustomContentFontSize};
  font-weight: ${(props) => props.theme.menuCustomContentFontWeight};
  color: ${(props) => props.theme.menuCustomContentFontColor};
`;

const CloseContainer = styled.img`
  cursor: pointer;
  :focus {
    outline: ${(props) => props.theme.hamburguerFocusColor} auto 1px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.overlayColor};
  opacity: ${(props) => props.theme.overlayOpacity} !important;
  visibility: ${(props) => (props.hasVisibility ? "visible" : "hidden")};
  opacity: ${(props) => (props.hasVisibility ? "1" : "0")};
  display: ${(props) => (props.refSize <= responsiveSizes.mobileLarge ? "none" : "")};
  transition: opacity 0.2s 0.2s ease-in-out;
  z-index: ${(props) => props.theme.overlayZindex};
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
  responsiveContent: PropTypes.func,
  tabIndex: PropTypes.number,
};

export default DxcHeader;
