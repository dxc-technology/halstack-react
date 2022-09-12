import React, { useState, useEffect, useRef, useMemo, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import DxcDropdown from "../dropdown/Dropdown";
import { dxcLogo } from "./Icons";
import { spaces, responsiveSizes } from "../common/variables.js";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import BackgroundColorContext, { BackgroundColorProvider } from "../BackgroundColorContext";
import HeaderPropsType, { Space, Padding } from "./types";

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

const getLogoElement = (themeInput, logoLabel) => {
  if (!themeInput) return dxcLogo;
  else if (typeof themeInput === "string") return <LogoImg alt={logoLabel} src={themeInput}></LogoImg>;
  else return themeInput;
};

type ContentProps = {
  isResponsive: boolean;
  responsiveContent: (closeHandler: () => void) => React.ReactNode;
  handleMenu: () => void;
  padding: Padding | Space;
  content: React.ReactNode;
};

const Content = ({ isResponsive, responsiveContent, handleMenu, padding, content }: ContentProps) => {
  const backgroundType = useContext(BackgroundColorContext);
  return isResponsive ? (
    <MenuContent backgroundType={backgroundType}>{responsiveContent(handleMenu)}</MenuContent>
  ) : (
    <ContentContainer padding={padding} backgroundType={backgroundType}>
      {content}
    </ContentContainer>
  );
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
  const translatedLabels = useTranslatedLabels();

  const ref = useRef(null);
  const [isResponsive, setIsResponsive] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleResize = () => {
    setIsResponsive(window.matchMedia(`(max-width: ${responsiveSizes.medium}rem)`).matches);
  };

  const handleMenu = () => {
    if (isResponsive && !isMenuVisible) {
      setIsMenuVisible(!isMenuVisible);
    } else {
      setIsMenuVisible(!isMenuVisible);
    }
  };

  const headerLogo = useMemo(() => {
    return getLogoElement(colorsTheme.header.logo, translatedLabels.formFields.logoAlternativeText);
  }, [colorsTheme.header.logo]);

  const headerResponsiveLogo = useMemo(() => {
    return getLogoElement(colorsTheme.header.logoResponsive, translatedLabels.formFields.logoAlternativeText);
  }, [colorsTheme.header.logoResponsive]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    !isResponsive && setIsMenuVisible(false);
  }, [isResponsive]);

  return (
    <ThemeProvider theme={colorsTheme.header}>
      <HeaderContainer underlined={underlined} margin={margin} ref={ref}>
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
              <HamburguerTrigger tabIndex={tabIndex} onClick={handleMenu}>
                {hamburgerIcon}
                {translatedLabels.header.hamburguerTitle}
              </HamburguerTrigger>
            </ChildContainer>
            <ResponsiveMenu hasVisibility={isMenuVisible}>
              <ResponsiveIconsContainer>
                <ResponsiveLogoContainer>{headerResponsiveLogo}</ResponsiveLogoContainer>
                <CloseAction tabIndex={tabIndex} onClick={handleMenu} aria-label={translatedLabels.header.closeIcon}>
                  {closeIcon}
                </CloseAction>
              </ResponsiveIconsContainer>
              <BackgroundColorProvider color={colorsTheme.header.menuBackgroundColor}>
                <Content
                  isResponsive={isResponsive}
                  responsiveContent={responsiveContent}
                  handleMenu={handleMenu}
                  padding={padding}
                  content={content}
                />
              </BackgroundColorProvider>
            </ResponsiveMenu>
            <Overlay onClick={handleMenu} hasVisibility={isMenuVisible}></Overlay>
          </MainContainer>
        )}
        {!isResponsive && (
          <BackgroundColorProvider color={colorsTheme.header.backgroundColor}>
            <Content
              isResponsive={isResponsive}
              responsiveContent={responsiveContent}
              handleMenu={handleMenu}
              padding={padding}
              content={content}
            />
          </BackgroundColorProvider>
        )}
      </HeaderContainer>
    </ThemeProvider>
  );
};

DxcHeader.Dropdown = Dropdown;

type HeaderContainerProps = {
  margin: Padding | Space;
  underlined: boolean;
};

const HeaderContainer = styled.header<HeaderContainerProps>`
  margin-bottom: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  padding: ${(props) =>
    `${props.theme.paddingTop} ${props.theme.paddingRight} ${props.theme.paddingBottom} ${props.theme.paddingLeft}`};
  background-color: ${(props) => props.theme.backgroundColor};
  border-bottom: ${(props) =>
    props.underlined &&
    `${props.theme.underlinedThickness} ${props.theme.underlinedStyle} ${props.theme.underlinedColor}`};
  min-height: ${(props) => props.theme.minHeight};
  box-shadow: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
`;

const LogoAnchor = styled.a<{ interactuable: boolean }>`
  ${(props) => (props.interactuable ? "cursor: pointer" : "cursor: default; outline:none")};
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

const ChildContainer = styled.div<{ padding: Space | Padding }>`
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

type ContentContainerProps = {
  padding: Space | Padding;
  backgroundType: "dark" | "light";
};

const ContentContainer = styled.div<ContentContainerProps>`
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
const HamburguerTrigger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 54px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  :hover {
    background-color: ${(props) => props.theme.hamburguerHoverColor};
  }
  &:focus {
    outline: ${(props) => props.theme.hamburguerFocusColor} auto 1px;
  }
  & > svg {
    fill: ${(props) => props.theme.hamburguerIconColor};
  }
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

const ResponsiveMenu = styled.div<{ hasVisibility: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.menuBackgroundColor};
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${(props) => props.theme.menuZindex};

  @media (max-width: ${responsiveSizes.large}rem) and (min-width: ${responsiveSizes.small}rem) {
    //tablet
    width: ${(props) => props.theme.menuTabletWidth};
  }

  @media (not((max-width: ${responsiveSizes.large}rem) and (min-width: ${responsiveSizes.small}rem))) {
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
  display: flex;
`;

const ResponsiveIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseAction = styled.button`
  cursor: pointer;
  padding: 6px;
  height: 36px;
  width: 36px;
  border: none;
  background-color: transparent;
  :focus,
  :focus-visible {
    outline: ${(props) => props.theme.hamburguerFocusColor} auto 1px;
  }
`;

const MenuContent = styled.div<{ backgroundType: "dark" | "light" }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${(props) => (props.backgroundType === "dark" ? props.theme.contentColorOnDark : props.theme.contentColor)};
`;

const Overlay = styled.div<{ hasVisibility: boolean }>`
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
