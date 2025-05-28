import { forwardRef, KeyboardEvent, MutableRefObject, Ref, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import DxcBadge from "../badge/Badge";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";
import TabsContext from "./TabsContext";
import { TabProps, TabsContextProps } from "./types";

const DxcTab = forwardRef(
  (
    {
      icon,
      label,
      title,
      tabId = label,
      disabled = false,
      active,
      notificationNumber = false,
      onClick = () => {},
      onHover = () => {},
    }: TabProps,
    ref: Ref<HTMLButtonElement>
  ): JSX.Element => {
    const tabRef = useRef<HTMLButtonElement | null>(null);

    const {
      iconPosition = "top",
      tabIndex = 0,
      focusedTab,
      isControlled,
      activeTab,
      hasLabelAndIcon = false,
      setActiveTab,
      setActiveIndicatorWidth,
      setActiveIndicatorLeft,
    } = useContext(TabsContext) ?? {};

    useEffect(() => {
      if (focusedTab === tabId) {
        tabRef?.current?.focus();
      }
    }, [focusedTab, tabId]);

    useEffect(() => {
      if (activeTab === tabId) {
        setActiveIndicatorWidth?.(tabRef.current?.offsetWidth ?? 0);
        setActiveIndicatorLeft?.(tabRef.current?.offsetLeft ?? 0);
      }
    }, [activeTab, tabId, setActiveIndicatorWidth, setActiveIndicatorLeft]);

    useEffect(() => {
      if (active) {
        setActiveTab?.(tabId);
      }
    }, [active, label, setActiveTab]);

    const handleOnKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
      switch (event.key) {
        case " ":
        case "Enter":
          event.preventDefault();
          tabRef?.current?.click();
          break;
        default:
          break;
      }
    };

    return (
      <Tooltip label={title}>
        <TabContainer
          role="tab"
          type="button"
          tabIndex={activeTab === tabId && !disabled ? tabIndex : -1}
          disabled={disabled}
          aria-label={label ?? tabId ?? "tab"}
          aria-selected={activeTab === tabId}
          hasLabelAndIcon={hasLabelAndIcon}
          iconPosition={iconPosition}
          ref={(anchorRef) => {
            tabRef.current = anchorRef;
            if (ref) {
              if (typeof ref === "function") {
                ref(anchorRef);
              } else {
                const currentRef = ref as MutableRefObject<HTMLButtonElement | null>;
                currentRef.current = anchorRef;
              }
            }
          }}
          onClick={() => {
            if (!isControlled) {
              setActiveTab?.(tabId ?? "");
              console.log(tabId);
            }
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
            {label && (
              <Label disabled={disabled} active={activeTab === tabId} label={label}>
                {label}
              </Label>
            )}
          </MainLabelContainer>
          {notificationNumber && !disabled && (
            <BadgeContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
              <DxcBadge
                mode="notification"
                size="small"
                label={typeof notificationNumber === "number" ? notificationNumber : undefined}
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

const Label = styled.span<{
  disabled: TabProps["disabled"];
  label: TabProps["label"];
  active: boolean;
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
  font-weight: ${(props) => props.theme.fontWeight};
  text-align: center;
  letter-spacing: 0.025em;
  line-height: 1.715em;
  text-decoration: none;
  text-overflow: unset;
  white-space: normal;
  margin: 0;
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
