import React, { useContext, useMemo } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import { spaces, defaultTheme, theme } from "../common/variables.js";
import { getCustomTheme } from "../common/utils.js";
import ThemeContext from "../ThemeContext.js";

const DxcTabs = ({ activeTabIndex, tabs = [], onTabClick, margin }) => {
  const [innerActiveTabIndex, setInnerActiveTabIndex] = React.useState(0);
  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme)), [customTheme]);

  const handleChange = (event, newValue) => {
    if (activeTabIndex == null) {
      setInnerActiveTabIndex(newValue);
    }
    if (typeof onTabClick === "function") {
      onTabClick(newValue);
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.tabs}>
      <DxCTabs margin={margin}>
        <Underline></Underline>
        <Tabs
          value={activeTabIndex != null ? activeTabIndex : innerActiveTabIndex}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
        >
          {tabs.map((tab, i) => {
            return (
              <Tab
                key={`tab${i}${tab.label}`}
                label={tab.label}
                icon={tab.iconSrc && <TabIcon src={tab.iconSrc} />}
                disabled={tab.isDisabled}
                disableRipple={true}
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
  background-color: ${(props) => props.theme.underlinedColor};
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
      color: ${(props) => props.theme.textColor};
      &:not(.Mui-selected) {
        background-color: ${(props) => `${props.theme.selectedBackgroundColor}57`};
      }
      &.Mui-selected {
        background-color: ${(props) => props.theme.selectedBackgroundColor};
        color: ${(props) => props.theme.selectedColor};
      }
      &.Mui-disabled {
        cursor: not-allowed !important;
        pointer-events: all;
        opacity: ${(props) => props.theme.disabled};
      }
      &:focus {
        outline: ${(props) => props.theme.focusColor} auto 1px;
      }
    }

    .MuiTabs-indicator {
      background-color: ${(props) => props.theme.selectedUnderlinedColor};
    }
  }
`;

const TabIcon = styled.img`
  max-height: 22px;
  max-width: 22px;
`;

DxcTabs.propTypes = {
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
  activeTabIndex: null,
  tabs: [],
  onTabClick: () => {},
};

export default DxcTabs;
