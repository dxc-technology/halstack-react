/* eslint-disable react/require-default-props */
import React, { useContext, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { spaces, defaultTheme, theme } from "../common/variables.js";
import { getCustomTheme } from "../common/utils.js";
import ThemeContext from "../ThemeContext.js";

const DxcSidenav = ({ padding, children }) => {
  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme)), [customTheme]);

  return (
    <ThemeProvider theme={colorsTheme.sidenav}>
      <SideNavContainer padding={padding}>{children}</SideNavContainer>
    </ThemeProvider>
  );
};

const SideNavContainer = styled.div`
  top: 0;
  position: sticky;
  background-color: ${(props) => props.theme.backgroundColor};
  max-width: 300px;
  width: ${(props) => (props.padding ? `calc(300px - ${spaces[props.padding]} - ${spaces[props.padding]})` : "300px")};
  padding: ${(props) => (props.padding ? spaces[props.padding] : "")};
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: #d9d9d9;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #666666;
    border-radius: 3px;
  }
`;

DxcSidenav.propTypes = {
  padding: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
  ]),
};

export default DxcSidenav;
