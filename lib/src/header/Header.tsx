import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import styled, { ThemeProvider } from "styled-components";
import DxcDropdown from "../dropdown/Dropdown";
import dxcLogo from "./Icons";
import { spaces, responsiveSizes } from "../common/variables";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import HeaderPropsType from "./types";
import DxcIcon from "../icon/Icon";

const Dropdown = (props: React.ComponentProps<typeof DxcDropdown>) => (
  <HeaderDropdown>
    <DxcDropdown {...props} />
  </HeaderDropdown>
);

const HeaderDropdown = styled.div`
  display: flex;
  button {
    background-color: transparent;
    :hover {
      background-color: transparent;
    }
  }
`;

const getLogoElement = (themeInput, logoLabel) =>
  !themeInput ? (
    dxcLogo
  ) : typeof themeInput === "string" ? (
    <LogoImg alt={logoLabel} src={themeInput}></LogoImg>
  ) : (
    themeInput
  );

type ContentProps = {
  isResponsive: boolean;
  responsiveContent: HeaderPropsType["responsiveContent"];
  handleMenu: () => void;
  content: HeaderPropsType["content"];
};

const Content = ({ isResponsive, responsiveContent, handleMenu, content }: ContentProps) =>
  isResponsive ? (
    <MenuContent>{responsiveContent(handleMenu)}</MenuContent>
  ) : (
    <ContentContainer>{content}</ContentContainer>
  );

const DxcHeader = ({
  underlined = false,
  content,
  responsiveContent,
  onClick,
  margin,
  tabIndex = 0,
}: HeaderPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const translatedLabels = useTranslatedLabels();

  const ref = useRef(null);
  const [isResponsive, setIsResponsive] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleResize = useCallback(() => {
    setIsResponsive(window.matchMedia(`(max-width: ${responsiveSizes.medium}rem)`).matches);
  }, []);

  const handleMenu = () => {
    if (isResponsive && !isMenuVisible) {
      setIsMenuVisible(!isMenuVisible);
    } else {
      setIsMenuVisible(!isMenuVisible);
    }
  };

  const headerLogo = useMemo(
    () => getLogoElement(colorsTheme.header.logo, translatedLabels.formFields.logoAlternativeText),
    [colorsTheme.header.logo],
  );

  const headerResponsiveLogo = useMemo(
    () => getLogoElement(colorsTheme.header.logoResponsive, translatedLabels.formFields.logoAlternativeText),
    [colorsTheme.header.logoResponsive],
  );

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    if (!isResponsive) {
      setIsMenuVisible(false);
    }
  }, [isResponsive]);

  return (
    <ThemeProvider theme={colorsTheme.header}>
      <HeaderContainer underlined={underlined} margin={margin} ref={ref}>
        <LogoAnchor tabIndex={onClick ? tabIndex : -1} interactuable={!!onClick} onClick={onClick}>
          <LogoContainer>{headerLogo}</LogoContainer>
        </LogoAnchor>
        {isResponsive && responsiveContent && (
          <MainContainer>
            <ChildContainer>
              <HamburguerTrigger tabIndex={tabIndex} onClick={handleMenu} aria-label="Show options">
                <DxcIcon icon="menu" />
                {translatedLabels.header.hamburguerTitle}
              </HamburguerTrigger>
            </ChildContainer>
            <ResponsiveMenu hasVisibility={isMenuVisible}>
              <ResponsiveIconsContainer>
                <ResponsiveLogoContainer>{headerResponsiveLogo}</ResponsiveLogoContainer>
                <CloseAction
                  tabIndex={tabIndex}
                  onClick={handleMenu}
                  aria-label={translatedLabels.header.closeIcon}
                  title={translatedLabels.header.closeIcon}
                >
                  <DxcIcon icon="close" />
                </CloseAction>
              </ResponsiveIconsContainer>
              <Content
                isResponsive={isResponsive}
                responsiveContent={responsiveContent}
                handleMenu={handleMenu}
                content={content}
              />
            </ResponsiveMenu>
            <Overlay onClick={handleMenu} hasVisibility={isMenuVisible}></Overlay>
          </MainContainer>
        )}
        {!isResponsive && (
          <Content
            isResponsive={isResponsive}
            responsiveContent={responsiveContent}
            handleMenu={handleMenu}
            content={content}
          />
        )}
      </HeaderContainer>
    </ThemeProvider>
  );
};

DxcHeader.Dropdown = Dropdown;

const HeaderContainer = styled.header<{
  margin: HeaderPropsType["margin"];
  underlined: HeaderPropsType["underlined"];
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: ${(props) => props.theme.minHeight};
  margin-bottom: ${(props) => (props.margin ? spaces[props.margin] : "0px")};
  padding: ${(props) =>
    `${props.theme.paddingTop} ${props.theme.paddingRight} ${props.theme.paddingBottom} ${props.theme.paddingLeft}`};
  background-color: ${(props) => props.theme.backgroundColor};
  border-bottom: ${(props) =>
    props.underlined &&
    `${props.theme.underlinedThickness} ${props.theme.underlinedStyle} ${props.theme.underlinedColor}`};
`;

const LogoAnchor = styled.a<{ interactuable: boolean }>`
  ${(props) => (props.interactuable ? "cursor: pointer" : "cursor: default; outline:none;")};
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  width: calc(100% - 186px);
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
  width: calc(100% - 186px);
  color: ${(props) => props.theme.contentColor};
`;

const HamburguerTrigger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 54px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 2px;
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
  & > span {
    font-size: 24px;
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
    width: ${(props) => props.theme.menuTabletWidth};
  }

  @media (not((max-width: ${responsiveSizes.large}rem) and (min-width: ${responsiveSizes.small}rem))) {
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
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 6px;
  border: unset;
  border-radius: 2px;
  background-color: transparent;
  cursor: pointer;

  :focus,
  :focus-visible {
    outline: ${(props) => props.theme.hamburguerFocusColor} auto 1px;
  }
  font-size: 24px;
  svg {
    height: 24px;
    width: 24px;
  }
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  color: ${(props) => props.theme.contentColor};
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
    display: none;
  }

  transition: opacity 0.2s 0.2s ease-in-out;
  z-index: ${(props) => props.theme.overlayZindex};
`;

export default DxcHeader;
