/* eslint-disable react/require-default-props */
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { spaces } from "../common/variables.js";
import useTheme from "../useTheme.js";
import { BackgroundColorProvider } from "../BackgroundColorContext.js";
import SidenavPropsType, { SidenavTitlePropsType, SidenavSubtitlePropsType, SidenavLinkPropsType } from "./types.js";

const DxcSidenav = ({ padding, children }: SidenavPropsType): JSX.Element => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.sidenav}>
      <SideNavContainer padding={padding}>
        <BackgroundColorProvider color={colorsTheme.sidenav.backgroundColor}>{children}</BackgroundColorProvider>
      </SideNavContainer>
    </ThemeProvider>
  );
};

const Title = ({ children }: SidenavTitlePropsType): JSX.Element => <SideNavMenuTitle>{children}</SideNavMenuTitle>;

const Subtitle = ({ children }: SidenavSubtitlePropsType): JSX.Element => (
  <SideNavMenuSubTitle>{children}</SideNavMenuSubTitle>
);

const Link = ({ tabIndex = 0, href, onClick, children }: SidenavLinkPropsType): JSX.Element => (
  <SideNavMenuLink tabIndex={tabIndex} href={href} onClick={onClick}>
    {children}
  </SideNavMenuLink>
);

const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundColor};
  max-width: 300px;
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

const SideNavMenuTitle = styled.div`
  font-family: ${(props) => props.theme.titleFontFamily};
  font-size: ${(props) => props.theme.titleFontSize};
  font-style: ${(props) => props.theme.titleFontStyle};
  font-weight: ${(props) => props.theme.titleFontWeight};
  color: ${(props) => props.theme.titleFontColor};
  letter-spacing: ${(props) => props.theme.titleFontLetterSpacing};
  text-transform: ${(props) => props.theme.titleFontTextTransform};
  margin-bottom: 16px;
`;

const SideNavMenuSubTitle = styled.div`
  font-family: ${(props) => props.theme.subtitleFontFamily};
  font-size: ${(props) => props.theme.subtitleFontSize};
  font-style: ${(props) => props.theme.subtitleFontStyle};
  font-weight: ${(props) => props.theme.subtitleFontWeight};
  color: ${(props) => props.theme.subtitleFontColor};
  letter-spacing: ${(props) => props.theme.subtitleFontLetterSpacing};
  text-transform: ${(props) => props.theme.subtitleFontTextTransform};
  margin-bottom: 4px;
`;

const SideNavMenuLink = styled.a`
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
