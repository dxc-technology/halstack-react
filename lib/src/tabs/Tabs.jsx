import React, { useContext } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import { colors, spaces } from "../common/variables.js";
import ThemeContext from "../ThemeContext.js";

const DxcTabs = ({
  mode = "filled",
  theme = "light",
  disableRipple = false,
  activeTabIndex,
  tabs = [],
  onTabClick,
  margin,
}) => {
  const [innerActiveTabIndex, setInnerActiveTabIndex] = React.useState(0);
  const colorsTheme = useContext(ThemeContext) || colors;

  const handleChange = (event, newValue) => {
    if (activeTabIndex == null) {
      setInnerActiveTabIndex(newValue);
    }
    if (typeof onTabClick === "function") {
      onTabClick(newValue);
    }
  };

  return (
    <ThemeProvider theme={colorsTheme}>
      <DxCTabs mode={mode} brightness={theme} margin={margin}>
        <Underline></Underline>
        <Tabs
          value={activeTabIndex != null ? activeTabIndex : innerActiveTabIndex}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
        >
          {tabs.map((tab) => {
            return (
              <Tab
                label={tab.label}
                icon={tab.iconSrc && <TabIcon src={tab.iconSrc} />}
                disabled={tab.isDisabled}
                disableRipple={disableRipple}
              />
            );
          })}
        </Tabs>
      </DxCTabs>
    </ThemeProvider>
  );
};

const Underline = styled.div`
  left: 0px;
  bottom: 0;
  width: 100%;
  height: 2px;
  position: absolute;
  background-color: #d9d9d9;
  z-index: 2;
`;
const DxCTabs = styled.div`
  position: relative;
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  .MuiTabs-root {
    background: white;
    .MuiTabs-scroller {
      .MuiTabs-flexContainer + span {
        z-index: 4;
      }
    }
    .MuiButtonBase-root {
      padding: 12px;
      min-height: 48px;
      height: auto;
      font-family: "Open Sans", sans-serif;
      font-size: 14px;
      /* height: 64px cuando vengan con icono y texto */
      min-width: 180px;
      background-color: ${(props) =>
        props.mode === "filled"
          ? props.brightness === "dark"
            ? props.theme.darkGrey
            : props.theme.lightGrey
          : "transparent"};
      color: ${(props) =>
        props.mode === "filled"
          ? props.brightness === "dark"
            ? props.theme.white
            : props.theme.darkGrey
          : props.theme.darkGrey};
      opacity: ${(props) => (props.mode === "filled" ? (props.brightness === "dark" ? 0.8 : 0.5) : 0.5)};
      &:hover:not(.Mui-selected):not(.Mui-disabled) {
        opacity: ${(props) => (props.mode === "filled" ? (props.brightness === "light" ? 0.8 : 1) : 1)};
        background-color: ${(props) => (props.mode === "filled" ? props.theme.darkGrey : "transparent")};
        color: ${(props) => (props.mode === "filled" ? props.theme.white : props.theme.darkGrey)};
      }

      &.Mui-selected {
        background-color: ${(props) =>
          props.mode === "filled"
            ? props.brightness === "dark"
              ? props.theme.white
              : props.theme.black
            : "transparent"};
        color: ${(props) =>
          props.mode === "filled"
            ? props.brightness === "dark"
              ? props.theme.black
              : props.theme.white
            : props.theme.black};
        opacity: 1;
      }
      &.Mui-disabled {
        cursor: not-allowed !important;
        pointer-events: all;
        opacity: ${(props) => (props.mode === "underlined" ? "0.4" : "")};
      }
    }
    .MuiTabs-indicator {
      background-color: ${(props) => (props.mode === "filled" ? props.theme.yellow : props.theme.black)};
    }
  }
`;

const TabIcon = styled.img`
  max-height: 22px;
  max-width: 22px;
`;

DxcTabs.propTypes = {
  mode: PropTypes.oneOf(["filled", "underlined"]),
  theme: PropTypes.oneOf(["light", "dark"]),
  disableRipple: PropTypes.bool,
  activeTabIndex: PropTypes.number,
  onTabClick: PropTypes.func,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      iconSrc: PropTypes.string,
      isDisabled: PropTypes.boolean,
    })
  ),
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
};

DxcTabs.defaultProps = {
  mode: "filled",
  theme: "light",
  disableRipple: false,
  activeTabIndex: null,
  tabs: [],
  onTabClick: () => {},
};

export default DxcTabs;
