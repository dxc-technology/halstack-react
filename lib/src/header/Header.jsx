import React, { useState, useEffect, useRef, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import DxcDropdown from "../dropdown/Dropdown";
import { hamburgerIcon, closeIcon, dxcLogo } from "./Icons";
import { spaces, responsiveSizes } from "../common/variables.js";
import useTheme from "../useTheme.js";
import { BackgroundColorProvider } from "../BackgroundColorContext.js";

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

const getLogoElement = (themeInput) => {
  if (!themeInput) {
    return dxcLogo;
  }
  if (typeof themeInput === "string") {
    return <LogoImg alt="Logo" src={themeInput}></LogoImg>;
  }
  return themeInput;
};

const DxcHeader = ({
  underlined = false,
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

  const headerLogo = useMemo(() => {
    return getLogoElement(colorsTheme.header.logo);
  }, [colorsTheme.header.logo]);

  const headerResponsiveLogo = useMemo(() => {
    return getLogoElement(colorsTheme.header.logoResponsive);
  }, [colorsTheme.header.logoResponsive]);

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
    <ThemeProvider theme={colorsTheme.header}>
      <HeaderContainer underlined={underlined} position="static" margin={margin} ref={ref}>
        <LogoAnchor
          tabIndex={typeof onClick === "function" ? tabIndex : -1}
          interactuable={typeof onClick === "function"}
          onClick={onClick}
        >
          <LogoContainer>{headerLogo}</LogoContainer>
        </LogoAnchor>
        {isResponsive && responsiveContent && (
          <MainContainer>
            <ChildContainer padding={padding}>
              <HamburguerItem tabIndex={tabIndex} underlined={underlined} onClick={handleMenu}>
                {hamburgerIcon}
                <HamburguerTitle>Menu</HamburguerTitle>
              </HamburguerItem>
            </ChildContainer>
            {
              <div>
                <ResponsiveMenu hasVisibility={isMenuVisible} refSize={refSize}>
                  <ResponsiveLogoContainer>{headerResponsiveLogo}</ResponsiveLogoContainer>
                  <MenuContent>{responsiveContent(handleMenu)}</MenuContent>
                  <CloseContainer tabIndex={tabIndex} onClick={handleMenu} className="closeIcon">
                    {closeIcon}
                  </CloseContainer>
                </ResponsiveMenu>
                <Overlay onClick={handleMenu} hasVisibility={isMenuVisible} refSize={refSize}></Overlay>
              </div>
            }
          </MainContainer>
        )}
        {!isResponsive && (
          <ChildContainer padding={padding}>
            <BackgroundColorProvider color={colorsTheme.header.backgroundColor}>{content}</BackgroundColorProvider>
          </ChildContainer>
        )}
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
    }
    return "cursor: pointer;";
  }}
`;

const LogoImg = styled.img`
  max-height: ${(props) => props.theme.logoHeight};
  width: ${(props) => props.theme.logoWidth};
`;

const LogoContainer = styled.div`
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
`;

const ResponsiveLogoContainer = styled.div`
  max-height: ${(props) => props.theme.logoHeight};
  width: ${(props) => props.theme.logoWidth};
  position: absolute;
  top: 23px;
  left: 20px;
`;

const CloseContainer = styled.div`
  cursor: pointer;
  :focus {
    outline: ${(props) => props.theme.hamburguerFocusColor} auto 1px;
  }
  position: fixed;
  top: 23px;
  right: 20px;
  width: 24px;
  height: 24px;
  padding: ${spaces.xxsmall};
`;

const MenuContent = styled.div`
  height: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
