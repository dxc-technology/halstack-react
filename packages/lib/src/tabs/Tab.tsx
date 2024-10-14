import { forwardRef, Ref, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import DxcBadge from "../badge/Badge";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";
import useTheme from "../useTheme";
import BaseTypography from "../utils/BaseTypography";
import { TabsContext } from "./TabsContext";
import { TabProps, TabsContextProps } from "./types";

const DxcTab = forwardRef(
  (
    {
      icon,
      label,
      title,
      disabled = false,
      active,
      notificationNumber = false,
      onClick = () => {},
      onHover = () => {},
    }: TabProps,
    ref: Ref<HTMLButtonElement>
  ): JSX.Element => {
    const tabRef = useRef<HTMLButtonElement>();
    const colorsTheme = useTheme();
    const {
      iconPosition,
      tabIndex,
      focusedLabel,
      isControlled,
      activeLabel,
      hasLabelAndIcon,
      setActiveLabel,
      setActiveIndicatorWidth,
      setActiveIndicatorLeft,
    } = useContext(TabsContext);

    useEffect(() => {
      focusedLabel === label && tabRef?.current?.focus();
    }, [focusedLabel, label]);

    useEffect(() => {
      if (activeLabel === label) {
        setActiveIndicatorWidth(tabRef?.current?.offsetWidth);
        setActiveIndicatorLeft(tabRef?.current?.offsetLeft);
      }
    }, [activeLabel, label]);

    useEffect(() => {
      if (active) {
        setActiveLabel(label);
      }
    }, [active, label]);

    const handleOnKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      switch (event.key) {
        case " ":
        case "Enter":
          event.preventDefault();
          tabRef?.current?.click();
          break;
      }
    };

    return (
      <Tooltip label={title}>
        <TabContainer
          role="tab"
          type="button"
          tabIndex={activeLabel === label && !disabled ? tabIndex : -1}
          disabled={disabled}
          aria-selected={activeLabel === label}
          hasLabelAndIcon={hasLabelAndIcon}
          iconPosition={iconPosition}
          ref={(anchorRef) => {
            tabRef.current = anchorRef;

            if (ref) {
              if (typeof ref === "function") ref(anchorRef);
              else (ref as React.MutableRefObject<HTMLButtonElement | null>).current = anchorRef;
            }
          }}
          onClick={() => {
            if (!isControlled) setActiveLabel(label);
            onClick();
          }}
          onMouseEnter={() => onHover()}
          onKeyDown={handleOnKeyDown}
        >
          <MainLabelContainer
            notificationNumber={notificationNumber}
            hasLabelAndIcon={hasLabelAndIcon}
            iconPosition={iconPosition}
            disabled={disabled}
          >
            {icon && (
              <TabIconContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
                {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}
              </TabIconContainer>
            )}
            <BaseTypography
              color={
                disabled
                  ? colorsTheme.tabs.disabledFontColor
                  : activeLabel === label
                    ? colorsTheme.tabs.selectedFontColor
                    : colorsTheme.tabs.unselectedFontColor
              }
              fontFamily={colorsTheme.tabs.fontFamily}
              fontSize={colorsTheme.tabs.fontSize}
              fontStyle={disabled ? colorsTheme.tabs.disabledFontStyle : colorsTheme.tabs.fontStyle}
              fontWeight={activeLabel === label ? colorsTheme.tabs.pressedFontWeight : colorsTheme.tabs.fontWeight}
              textAlign="center"
              letterSpacing="0.025em"
              lineHeight="1.715em"
            >
              {label}
            </BaseTypography>
          </MainLabelContainer>
          {notificationNumber && !disabled && (
            <BadgeContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
              <DxcBadge
                mode="notification"
                size="small"
                label={typeof notificationNumber === "number" && notificationNumber}
              />
            </BadgeContainer>
          )}
        </TabContainer>
      </Tooltip>
    );
  }
);

const TabContainer = styled.button<{
  hasLabelAndIcon: boolean;
  iconPosition: TabsContextProps["iconPosition"];
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
  hasLabelAndIcon: boolean;
  iconPosition: TabsContextProps["iconPosition"];
}>`
  margin-left: 12px;
  height: 100%;
  display: flex;
  align-items: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "top" ? "flex-start" : "center")};
  justify-content: flex-start;
  flex-direction: column;
`;

const MainLabelContainer = styled.div<{
  notificationNumber: TabProps["notificationNumber"];
  hasLabelAndIcon: boolean;
  iconPosition: TabsContextProps["iconPosition"];
  disabled: boolean;
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

const TabIconContainer = styled.div<{
  hasLabelAndIcon: boolean;
  iconPosition: TabsContextProps["iconPosition"];
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

export default DxcTab;
