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
  max-width: 300px;
  width: ${(props) => (props.padding ? `calc(300px - ${spaces[props.padding]} - ${spaces[props.padding]})` : "300px")};
  padding: ${(props) => (props.padding ? spaces[props.padding] : "")};
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #66666626;
    border-radius: 3px;
  }

  display: flex;
  flex-direction: column;
`;

const SideNavMenuTitle = styled.div`
  font: normal normal normal 24px/33px Open Sans;
  letter-spacing: 0px;
  color: #000000de;
  margin: 15px 0;
`;

const SideNavMenuSubTitle = styled.div`
  font: normal normal normal 12px/17px Open Sans;
  letter-spacing: 1.88px;
  color: #00000099;
  text-transform: uppercase;
  margin-top: 15px;
`;

const SideNavMenuLink = styled.a`
  text-decoration: none;
  font: normal normal normal 14px/19px Open Sans;
  letter-spacing: 0.24px;
  color: #00000099;
  margin: 6px 18px;
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
