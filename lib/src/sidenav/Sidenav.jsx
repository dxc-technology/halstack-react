/* eslint-disable react/require-default-props */
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import { spaces } from "../common/variables.js";
import useTheme from "../useTheme.js";

const DxcSidenav = ({ padding, children }) => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.sidenav}>
      <SideNavContainer padding={padding}>{children}</SideNavContainer>
    </ThemeProvider>
  );
};

const Title = ({ children }) => {
  return <SideNavMenuTitle>{children}</SideNavMenuTitle>;
};

const Subtitle = ({ children }) => {
  return <SideNavMenuSubTitle>{children}</SideNavMenuSubTitle>;
};

const Link = ({ href, onClick, children }) => {
  return (
    <SideNavMenuLink href={href} onClick={onClick}>
      {children}
    </SideNavMenuLink>
  );
};

const SideNavContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  font-family: ${(props) => props.theme.customContentFontFamily};
  font-size: ${(props) => props.theme.customContentFontSize};
  font-style: ${(props) => props.theme.customContentFontStyle};
  font-weight: ${(props) => props.theme.customContentFontWeight};
  color: ${(props) => props.theme.customContentFontColor};
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
  display: flex;
  flex-direction: column;
`;

const SideNavMenuTitle = styled.div`
  font-family: ${(props) => props.theme.titleFontFamily};
  font-size: ${(props) => props.theme.titleFontSize};
  font-style: ${(props) => props.theme.titleFontStyle};
  font-weight: ${(props) => props.theme.titleFontWeight};
  color: ${(props) => props.theme.titleFontColor};
  letter-spacing: ${(props) => props.theme.titleFontLetterSpacing};
  text-transform: ${(props) => props.theme.titleFontTextTransform};
  margin: 15px 0;
`;

const SideNavMenuSubTitle = styled.div`
  font-family: ${(props) => props.theme.subtitleFontFamily};
  font-size: ${(props) => props.theme.subtitleFontSize};
  font-style: ${(props) => props.theme.subtitleFontStyle};
  font-weight: ${(props) => props.theme.subtitleFontWeight};
  color: ${(props) => props.theme.subtitleFontColor};
  letter-spacing: ${(props) => props.theme.subtitleFontLetterSpacing};
  text-transform: ${(props) => props.theme.subtitleFontTextTransform};
  margin-top: 15px;
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
`;

DxcSidenav.propTypes = {
  padding: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
};

DxcSidenav.Title = Title;
DxcSidenav.Subtitle = Subtitle;
DxcSidenav.Link = Link;

export default DxcSidenav;
