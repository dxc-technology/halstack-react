import React, { useContext, useMemo } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import { spaces, defaultTheme, theme } from "../common/variables.js";
import DxcBadge from "../badge/Badge";
import { getCustomTheme } from "../common/utils.js";
import ThemeContext from "../ThemeContext.js";

const DxcTabs = ({ activeTabIndex, tabs = [], onTabClick, onTabHover, margin, iconPosition = "left" }) => {
  const [innerActiveTabIndex, setInnerActiveTabIndex] = React.useState(0);

  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme)), [customTheme]);
  const hasLabelAndIcon = tabs && tabs.filter((tab) => tab.label && tab.icon).length > 0;

  const handleChange = (event, newValue) => {
    if (activeTabIndex == null) {
      setInnerActiveTabIndex(newValue);
    }
    if (typeof onTabClick === "function") {
      onTabClick(newValue);
    }
  };

  const getLabelForTab = (tab) => {
    return (
      <MainLabelContainer hasBadge={tab.notificationNumber}>
        <TabLabelContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
          {tab.icon ? (
            <TabIconContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
              {typeof tab.icon === "object" ? tab.icon : React.createElement(tab.icon)}
            </TabIconContainer>
          ) : (
            tab.iconSrc && <TabIcon src={tab.iconSrc} />
          )}
          <LabelTextContainer>{tab.label}</LabelTextContainer>
        </TabLabelContainer>
        {tab.notificationNumber && tab.notificationNumber !== false && (
          <BadgeContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
            <DxcBadge notificationText={tab.notificationNumber > 99 ? "+99" : tab.notificationNumber} />
          </BadgeContainer>
        )}
      </MainLabelContainer>
    );
  };

  return (
    <ThemeProvider theme={colorsTheme.tabs}>
      <DxCTabs margin={margin} hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
        <Underline />
        <Tabs
          value={activeTabIndex != null ? activeTabIndex : innerActiveTabIndex}
          onChange={handleChange}
          onMouseOver={onTabHover}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((tab, i) => {
            const tabContent = React.forwardRef((props, ref) => <div role="button" {...props} ref={ref} />);
            return (
              <Tab
                key={`tab${i}${tab.label}`}
                label={getLabelForTab(tab)}
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
const TabLabelContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "top" && "column") || "row"};
  align-items: center;
`;
const LabelTextContainer = styled.div``;
const BadgeContainer = styled.div`
  display: flex;
  align-items: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "top" && "end") || "center"};
  position: relative;
  margin-right: 12px;
`;
const MainLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${(props) => (props.hasBadge && "19px") || "unset"};
  margin-right: ${(props) => (props.hasBadge && "19px") || "unset"};
`;

const Underline = styled.div`
  left: 0px;
  bottom: 0;
  width: 100%;
  height: 1px;
  position: absolute;
  background-color: ${(props) => props.theme.divider};
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
    .MuiTab-root {
      text-transform: none !important;
    }
    .MuiButtonBase-root {
      padding: ${(props) =>
        ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "12px 16px") ||
        "8px 16px"};
      height: ${(props) =>
        ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "48px") || "72px"};
      font-family: "Open Sans", sans-serif;
      font-weight: 600;
      font-size: 16px;
      min-width: 90px;
      max-width: 360px;
      color: ${(props) => props.theme.fontColor};
      &:hover {
        background-color: ${(props) => `${props.theme.hoverBackgroundColor} !important`};
      }
      &:active {
        background-color: ${(props) => `${props.theme.pressedBackgroundColor} !important`};
      }
      &:not(.Mui-selected) {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.fontColor};
      }
      &.Mui-selected {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.selectedFontColor};
      }
      &.Mui-disabled {
        cursor: not-allowed !important;
        pointer-events: all;
        opacity: ${(props) => props.theme.disabledFontcolor};
      }
      &:focus {
        outline: ${(props) => props.theme.selectedFontColor} auto 1px;
      }
    }

    .MuiTabs-indicator {
      background-color: ${(props) => props.theme.selectedFontColor};
    }

    .MuiTabs-scrollButtons {
      min-width: 48px;
      width: 48px;
      padding: 0;
    }

    @media (max-width: 599.95px) {
      .MuiTabs-scrollButtonsDesktop {
        display: flex;
      }
    }
  }
`;

const TabIcon = styled.img`
  max-height: 22px;
  max-width: 22px;
`;

const TabIconContainer = styled.div`
  max-height: 22px;
  max-width: 22px;
  margin-bottom: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "top" && "8px") || ""};
  margin-right: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "left" && "12px") || ""};
  overflow: hidden;
  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

DxcTabs.propTypes = {
  activeTabIndex: PropTypes.number,
  onTabClick: PropTypes.func,
  onTabHover: PropTypes.func,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
      iconSrc: PropTypes.string,
      isDisabled: PropTypes.boolean,
      notificationNumber: PropTypes.oneOfType([PropTypes.boolean, PropTypes.string]),
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
  iconPosition: PropTypes.oneOf(["top", "left"]),
};

DxcTabs.defaultProps = {
  activeTabIndex: null,
  tabs: [],
  onTabClick: () => {},
  onTabHover: () => {},
  iconPosition: "top",
};

export default DxcTabs;
