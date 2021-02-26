import React, { useContext, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { theme, defaultTheme } from "../common/variables.js";
import ThemeContext from "../ThemeContext.js";
import "../common/OpenSans.css";
import { getCustomTheme } from "../common/utils.js";

const DxcBadge = ({ notificationText }) => {
  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme)), [customTheme]);

  return (
    <ThemeProvider theme={colorsTheme.chip}>
      <StyledDxcBadge notificationText={notificationText}>
        <span>{notificationText}</span>
      </StyledDxcBadge>
    </ThemeProvider>
  );
};

const StyledDxcBadge = styled.div`
  background-color: #d0011b;
  border-radius: 10px;
  width: ${(props) => (props.notificationText === true ? "16px" : "23px")};
  height: ${(props) => (props.notificationText === true ? "16px" : "17px")};
  display: flex;
  padding-bottom: 1px;
  padding-right: 1px;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1;
  align-content: center;
  flex-direction: row;
  justify-content: center;
  color: #ffffff;
  font-size: 10px;
  margin-left: 12px;
  position: absolute;
`;

export default DxcBadge;
