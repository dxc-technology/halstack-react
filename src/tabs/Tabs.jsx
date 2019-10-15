import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styled from "styled-components";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import colors from "../common/variables.js";

const DxcTabs = ({
  mode = "filled",
  theme = "light",
  showDotIndicator = false,
  disableRipple = false,
  activeTabIndex = 0,
  activeTabIndexChange = "",
  ...props
}) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    activeTabIndexChange(newValue);
  };
  function getTabIcon(tab) {
    return tab.props.iconSrc;
  }
  function getTabDisabled(tab) {
    return tab.props.disabled;
  }
  function getTabContent(children, value) {
    return children[value].props.children;
  }

  function getTabLabel(tab) {
    return tab.props.label;
  }
  return (
    <DxCTabs mode={mode} theme={theme}>
      <Tabs value={activeTabIndex || value} onChange={handleChange} variant="scrollable" scrollButtons="off">
        {props.children.map(tab => {
          return (
            <Tab
              label={getTabLabel(tab)}
              icon={getTabIcon(tab) && <TabIcon src={getTabIcon(tab)} />}
              disabled={getTabDisabled(tab)}
              disableRipple={disableRipple}
            />
          );
        })}
      </Tabs>
      <TabContentContainer>
        {props.children.map((tab, indice) => {
          return value === indice ? getTabContent(props.children, value) : "";
        })}
      </TabContentContainer>
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
      opacity: ${props =>
        props.mode === "filled" ? (props.theme === "dark" ? 0.8 : 0.5) : 0.5};
      &:hover:not(.Mui-selected):not(.Mui-disabled) {
        opacity: ${props => (props.mode === "filled" ? props.theme === "light" ? 0.8 : 1 : 1)};
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

const TabContentContainer = styled.div`
  margin: 15px;
`;
const TabIcon = styled.img`
  max-height: 22px;
  max-width: 22px;
`;
DxcTabs.propTypes = {
  mode: PropTypes.oneOf(["filled", "underlined"]),
  theme: PropTypes.oneOf(["light", "dark"]),
  showDotIndicator: PropTypes.bool,
  disableRipple: PropTypes.bool,
  activeTabIndex: PropTypes.number,
  activeTabIndexChange: PropTypes.func,
  children: PropTypes.string
};

export default DxcTabs;
