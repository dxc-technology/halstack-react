import { forwardRef, memo, Ref } from "react";
import styled from "styled-components";
import DxcBadge from "../badge/Badge";
import DxcIcon from "../icon/Icon";
import { TabPropsLegacy } from "./types";

const Tab = forwardRef(
  (
    { active, tab, tabIndex, hasLabelAndIcon, iconPosition, onClick, onMouseEnter, onMouseLeave }: TabPropsLegacy,
    ref: Ref<HTMLButtonElement>
  ): JSX.Element => (
    <TabContainer
      role="tab"
      type="button"
      tabIndex={tabIndex}
      disabled={tab.isDisabled}
      aria-selected={active}
      hasLabelAndIcon={hasLabelAndIcon}
      iconPosition={iconPosition}
      ref={ref}
      onClick={() => {
        onClick();
      }}
      onMouseEnter={() => {
        onMouseEnter();
      }}
      onMouseLeave={() => {
        onMouseLeave();
      }}
    >
      <MainLabelContainer
        notificationNumber={tab.notificationNumber}
        hasLabelAndIcon={hasLabelAndIcon}
        iconPosition={iconPosition}
        disabled={tab.isDisabled}
      >
        {tab.icon && (
          <TabIconContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
            {typeof tab.icon === "string" ? <DxcIcon icon={tab.icon} /> : tab.icon}
          </TabIconContainer>
        )}
        <LabelContainer disabled={tab.isDisabled} active={active}>
          {tab.label}
        </LabelContainer>
      </MainLabelContainer>
      {tab.notificationNumber && !tab.isDisabled && (
        <BadgeContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
          <DxcBadge
            mode="notification"
            size="small"
            label={typeof tab.notificationNumber === "number" && tab.notificationNumber}
          />
        </BadgeContainer>
      )}
    </TabContainer>
  )
);

const TabContainer = styled.button<{
  hasLabelAndIcon: TabPropsLegacy["hasLabelAndIcon"];
  iconPosition: TabPropsLegacy["iconPosition"];
}>`
  text-transform: ${(props) => props.theme.fontTextTransform};
  overflow: hidden;
  flex-shrink: 0;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  min-width: 90px;
  max-width: 360px;
  padding: ${(props) =>
    ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "12px 16px") || "8px 16px"};
  height: ${(props) =>
    ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "47px") || "71px"};
  min-height: ${(props) =>
    ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "47px") || "71px"};
  background-color: ${(props) => props.theme.unselectedBackgroundColor};

  &:hover {
    background-color: ${(props) => `${props.theme.hoverBackgroundColor} !important`};
  }
  &:active {
    background-color: ${(props) => `${props.theme.pressedBackgroundColor} !important`};
  }
  &:focus {
    outline: ${(props) => props.theme.focusOutline} solid 1px;
    outline-offset: -1px;
  }

  svg,
  span:before {
    color: ${(props) => props.theme.unselectedIconColor};
  }

  &[aria-selected="true"] {
    background-color: ${(props) => props.theme.selectedBackgroundColor};
    svg,
    span:before {
      color: ${(props) => props.theme.selectedIconColor};
    }
    opacity: 1;
  }

  &:disabled {
    background-color: ${(props) => props.theme.unselectedBackgroundColor} !important;
    cursor: not-allowed !important;
    pointer-events: all;
    font-style: ${(props) => props.theme.disabledFontStyle};
    outline: none !important;

    svg,
    span:before {
      color: ${(props) => props.theme.disabledIconColor};
    }
    > div {
      opacity: 0.5;
    }
  }
`;

const BadgeContainer = styled.div<{
  hasLabelAndIcon: TabPropsLegacy["hasLabelAndIcon"];
  iconPosition: TabPropsLegacy["iconPosition"];
}>`
  margin-left: 12px;
  height: 100%;
  display: flex;
  align-items: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "top" ? "flex-start" : "center")};
`;

const MainLabelContainer = styled.div<{
  notificationNumber: TabPropsLegacy["tab"]["notificationNumber"];
  hasLabelAndIcon: TabPropsLegacy["hasLabelAndIcon"];
  iconPosition: TabPropsLegacy["iconPosition"];
  disabled: TabPropsLegacy["tab"]["isDisabled"];
}>`
  display: flex;
  flex-direction: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "top" && "column") || "row"};
  align-items: center;
  margin-left: ${(props) =>
    props.notificationNumber && !props.disabled
      ? typeof props.notificationNumber === "number"
        ? "36px"
        : "18px"
      : "unset"};
`;

const LabelContainer = styled.span<{
  disabled: TabPropsLegacy["tab"]["isDisabled"];
  active: TabPropsLegacy["active"];
}>`
  display: inline;
  color: ${(props) =>
    props.disabled
      ? props.theme.disabledFontColor
      : props.active
        ? props.theme.selectedFontColor
        : props.theme.unselectedFontColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-style: ${(props) => (props.disabled ? props.theme.disabledFontStyle : props.theme.fontStyle)};
  font-weight: ${(props) => (props.active ? props.theme.pressedFontWeight : props.theme.fontWeight)};
  text-align: center;
  letter-spacing: 0.025em;
  line-height: 1.715em;
  text-decoration: none;
  text-overflow: unset;
  white-space: normal;
  margin: 0;
`;

const TabIconContainer = styled.div<{
  hasLabelAndIcon: TabPropsLegacy["hasLabelAndIcon"];
  iconPosition: TabPropsLegacy["iconPosition"];
}>`
  display: flex;
  margin-bottom: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "top" && "8px") || ""};
  margin-right: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "left" && "12px") || ""};
  font-size: 22px;

  svg {
    height: 22px;
    width: 22px;
  }
`;

Tab.displayName = "DxcTabLegacy";

export default memo(Tab);
