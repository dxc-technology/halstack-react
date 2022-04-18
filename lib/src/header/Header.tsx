// @ts-nocheck
import React, { useState, useEffect, useRef, useMemo, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import DxcDropdown from "../dropdown/Dropdown";
import { dxcLogo } from "./Icons";
import { spaces, responsiveSizes } from "../common/variables.js";
import useTheme from "../useTheme";
import BackgroundColorContext, { BackgroundColorProvider } from "../BackgroundColorContext";
import HeaderPropsType from "./types";

const closeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const hamburgerIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
  </svg>
);

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
  content,
  responsiveContent,
  onClick,
  margin,
  padding,
  tabIndex = 0,
}: HeaderPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const ref = useRef(null);
  const [isResponsive, setIsResponsive] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleResize = () => {
    setIsResponsive(window.matchMedia(`(max-width: ${responsiveSizes.medium}rem)`).matches && !isResponsive);
  };
  const ContentContainerComponent = () => {
    const backgroundType = useContext(BackgroundColorContext);
    return (
      (isResponsive && <MenuContent backgroundType={backgroundType}>{responsiveContent(handleMenu)}</MenuContent>) || (
        <ContentContainer padding={padding} backgroundType={backgroundType}>
          {content}
        </ContentContainer>
      )
    );
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

  useEffect(() => {
    if (ref.current) {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={colorsTheme.header}>
      <HeaderContainer $underlined={underlined} position="static" margin={margin} ref={ref}>
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
                <ResponsiveMenu hasVisibility={isMenuVisible}>
                  <ResponsiveLogoContainer>{headerResponsiveLogo}</ResponsiveLogoContainer>
                  <BackgroundColorProvider color={colorsTheme.header.menuBackgroundColor}>
                    <ContentContainerComponent />
                  </BackgroundColorProvider>
                  <CloseContainer tabIndex={tabIndex} onClick={handleMenu} className="closeIcon">
                    {closeIcon}
                  </CloseContainer>
                </ResponsiveMenu>
                <Overlay onClick={handleMenu} hasVisibility={isMenuVisible}></Overlay>
              </div>
            }
          </MainContainer>
        )}
        {!isResponsive && (
          <BackgroundColorProvider color={colorsTheme.header.backgroundColor}>
            <ContentContainerComponent />
          </BackgroundColorProvider>
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
      props.$underlined &&
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
const ContentContainer = styled.div`
  width: calc(100% - 186px);
  display: flex;
  align-items: center;
  flex-grow: 1;
  color: ${(props) => (props.backgroundType === "dark" ? props.theme.contentColorOnDark : props.theme.contentColor)};

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

  @media (max-width: ${responsiveSizes.large}rem) and (min-width: ${responsiveSizes.small}rem) {
    //tablet
    width: ${(props) => props.theme.menuTabletWidth};
  }

  @media not((max-width: ${responsiveSizes.large}rem) and (min-width: ${responsiveSizes.small}rem)) {
    //mobile phones
    width: ${(props) => props.theme.menuMobileWidth};
  }

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
  color: ${(props) => (props.backgroundType === "dark" ? props.theme.contentColorOnDark : props.theme.contentColor)};
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

  @media (max-width: ${responsiveSizes.small}rem) {
    //mobile phones
    display: none;
  }

  transition: opacity 0.2s 0.2s ease-in-out;
  z-index: ${(props) => props.theme.overlayZindex};
`;

export default DxcHeader;
