import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styled from "styled-components";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import colors from "../common/variables.js";

const DxcTabs = ({ mode, theme, disableRipple, activeTabIndex, tabs, onTabClick }) => {
  const [innerActiveTabIndex, setInnerActiveTabIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    if (activeTabIndex == null) {
      setInnerActiveTabIndex(newValue);
    }
    onTabClick(newValue);
  };

  return (
    <DxCTabs mode={mode} theme={theme}>
      <Tabs
        value={activeTabIndex != null ? activeTabIndex : innerActiveTabIndex}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="off"
      >
        {tabs.map(tab => {
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
  );
};

const DxCTabs = styled.div`
  .MuiTabs-root {
    .MuiTabs-scroller {
      margin: 15px;
      .MuiTabs-flexContainer {
        border-bottom: 1.5px solid ${colors.lightGrey};
      }
    }
    .MuiButtonBase-root {
      padding: 12px;
      min-height: 48px;
      height: auto;
      font-family: "Open Sans", sans-serif;
      font-size: 16px;
      /* height: 64px cuando vengan con icono y texto */
      min-width: 180px;
      background-color: ${props =>
        props.mode === "filled" ? (props.theme === "dark" ? colors.darkGrey : colors.lightGrey) : "transparent"};
      color: ${props =>
        props.mode === "filled" ? (props.theme === "dark" ? colors.white : colors.darkGrey) : colors.darkGrey};
      opacity: ${props => (props.mode === "filled" ? (props.theme === "dark" ? 0.8 : 0.5) : 0.5)};
      &:hover:not(.Mui-selected):not(.Mui-disabled) {
        opacity: ${props => (props.mode === "filled" ? (props.theme === "light" ? 0.8 : 1) : 1)};
        background-color: ${props => (props.mode === "filled" ? colors.darkGrey : "transparent")};
        color: ${props => (props.mode === "filled" ? colors.white : colors.darkGrey)};
      }

      &.Mui-selected {
        background-color: ${props =>
          props.mode === "filled" ? (props.theme === "dark" ? colors.white : colors.black) : "transparent"};
        color: ${props =>
          props.mode === "filled" ? (props.theme === "dark" ? colors.black : colors.white) : colors.black};
        opacity: 1;
      }
      &.Mui-disabled {
        cursor: not-allowed !important;
        pointer-events: all;
        opacity: ${props => (props.mode === "underlined" ? "0.4" : "")};
      }
      &:focus:not(.Mui-disabled) {
        color: ${colors.lightGrey};
      }
    }
    .MuiTabs-indicator {
      background-color: ${props => (props.mode === "filled" ? colors.yellow : colors.black)};
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
      isDisabled: PropTypes.boolean
    })
  )
};

DxcTabs.defaultProps = {
  mode: "filled",
  theme: "light",
  disableRipple: false,
  activeTabIndex: null,
  tabs: [],
  onTabClick: () => {}
};

export default DxcTabs;
