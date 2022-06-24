import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces, responsiveSizes } from "../common/variables.js";

import useTheme from "../useTheme";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import SidenavPropsType, { SidenavTitlePropsType, SidenavSubtitlePropsType, SidenavLinkPropsType } from "./types";
import { useResponsiveSidenavVisibility } from "../layout/SidenavContext";

const DxcSidenav = ({ padding, children }: SidenavPropsType): JSX.Element => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.sidenav}>
      <SidenavContainer padding={padding}>
        <BackgroundColorProvider color={colorsTheme.sidenav.backgroundColor}>{children}</BackgroundColorProvider>
      </SidenavContainer>
    </ThemeProvider>
  );
};

const Title = ({ children }: SidenavTitlePropsType): JSX.Element => <SidenavMenuTitle>{children}</SidenavMenuTitle>;

const Subtitle = ({ children }: SidenavSubtitlePropsType): JSX.Element => (
  <SidenavMenuSubTitle>{children}</SidenavMenuSubTitle>
);

const Link = ({ tabIndex = 0, href, onClick, children }: SidenavLinkPropsType): JSX.Element => {
  const setIsSidenavVisibleResponsive = useResponsiveSidenavVisibility();
  const handleClick = () => {
    onClick?.();
    setIsSidenavVisibleResponsive?.(false);
  };

  return (
    <SidenavMenuLink tabIndex={tabIndex} href={href} onClick={handleClick}>
      {children}
    </SidenavMenuLink>
  );
};

const SidenavContainer = styled.div<SidenavPropsType>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundColor};

  @media (max-width: ${responsiveSizes.medium}rem) {
    width: ${(props) =>
      props.padding ? `calc(100vw - ${spaces[props.padding]} - ${spaces[props.padding]})` : "100vw"};
  }

  width: ${(props) => (props.padding ? `calc(300px - ${spaces[props.padding]} - ${spaces[props.padding]})` : "300px")};
  padding: ${(props) => (props.padding ? spaces[props.padding] : "")};

  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollBarTrackColor};
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollBarThumbColor};
    border-radius: 3px;
  }
`;

const SidenavMenuTitle = styled.div`
  font-family: ${(props) => props.theme.titleFontFamily};
  font-size: ${(props) => props.theme.titleFontSize};
  font-style: ${(props) => props.theme.titleFontStyle};
  font-weight: ${(props) => props.theme.titleFontWeight};
  color: ${(props) => props.theme.titleFontColor};
  letter-spacing: ${(props) => props.theme.titleFontLetterSpacing};
  text-transform: ${(props) => props.theme.titleFontTextTransform};
  margin-bottom: 16px;
`;

const SidenavMenuSubTitle = styled.div`
  font-family: ${(props) => props.theme.subtitleFontFamily};
  font-size: ${(props) => props.theme.subtitleFontSize};
  font-style: ${(props) => props.theme.subtitleFontStyle};
  font-weight: ${(props) => props.theme.subtitleFontWeight};
  color: ${(props) => props.theme.subtitleFontColor};
  letter-spacing: ${(props) => props.theme.subtitleFontLetterSpacing};
  text-transform: ${(props) => props.theme.subtitleFontTextTransform};
  margin-bottom: 4px;
`;

const SidenavMenuLink = styled.a`
  font-family: ${(props) => props.theme.linkFontFamily};
  font-size: ${(props) => props.theme.linkFontSize};
  font-style: ${(props) => props.theme.linkFontStyle};
  font-weight: ${(props) => props.theme.linkFontWeight};
  color: ${(props) => props.theme.linkFontColor};
  letter-spacing: ${(props) => props.theme.linkFontLetterSpacing};
  text-transform: ${(props) => props.theme.linkFontTextTransform};
  text-decoration: ${(props) => props.theme.linkTextDecoration};
  margin: ${(props) =>
    `${props.theme.linkMarginTop} ${props.theme.linkMarginRight} ${props.theme.linkMarginBottom} ${props.theme.linkMarginLeft}`};
  cursor: pointer;

  :focus-visible {
    outline: 2px solid ${(props) => props.theme.linkFocusColor};
    outline-offset: 1px;
  }
`;

DxcSidenav.Title = Title;
DxcSidenav.Subtitle = Subtitle;
DxcSidenav.Link = Link;

export default DxcSidenav;
