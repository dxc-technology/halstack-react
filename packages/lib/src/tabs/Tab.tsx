import { forwardRef, Ref, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import DxcBadge from "../badge/Badge";
import DxcIcon from "../icon/Icon";
import useTheme from "../useTheme";
import BaseTypography from "../utils/BaseTypography";
import { TabsContext } from "./TabsContext";
import { TabProps, TabsContextProps } from "./types";

const DxcTab = forwardRef(
  (
    { icon, label, disabled = false, notificationNumber = false, onClick, onHover }: TabProps,
    ref: Ref<HTMLButtonElement>
  ): JSX.Element => {
    const tabRef = useRef<HTMLButtonElement>();
    const colorsTheme = useTheme();
    const {
      iconPosition,
      tabIndex,
      focusedLabel,
      // setFocusedLabel,
      activeLabel,
      setActiveLabel,
      setActiveIndicatorWidth,
      setActiveIndicatorLeft,
    } = useContext(TabsContext);

    useEffect(() => {
      focusedLabel === label && tabRef?.current?.focus();
    }, [focusedLabel]);

    useEffect(() => {
      if (activeLabel === label) {
        setActiveIndicatorWidth(tabRef?.current?.offsetWidth);
        setActiveIndicatorLeft(tabRef?.current?.offsetLeft);
      }
    }, [activeLabel]);

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
      <TabContainer
        role="tab"
        type="button"
        tabIndex={activeLabel === label && !disabled ? tabIndex : -1}
        disabled={disabled}
        aria-selected={activeLabel === label}
        hasLabelAndIcon={!!label && !!icon}
        iconPosition={iconPosition}
        ref={(anchorRef) => {
          tabRef.current = anchorRef;

          if (ref) {
            if (typeof ref === "function") ref(anchorRef);
            else (ref as React.MutableRefObject<HTMLButtonElement | null>).current = anchorRef;
          }
        }}
        onClick={() => {
          setActiveLabel(label);
          onClick();
        }}
        onMouseEnter={() => onHover()}
        onKeyDown={handleOnKeyDown}
      >
        <MainLabelContainer
          notificationNumber={notificationNumber}
          hasLabelAndIcon={!!label && !!icon}
          iconPosition={iconPosition}
          disabled={disabled}
        >
          {icon && (
            <TabIconContainer hasLabelAndIcon={!!label && !!icon} iconPosition={iconPosition}>
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
          <BadgeContainer hasLabelAndIcon={!!label && !!icon} iconPosition={iconPosition}>
            <DxcBadge
              mode="notification"
              size="small"
              label={typeof notificationNumber === "number" && notificationNumber}
            />
          </BadgeContainer>
        )}
      </TabContainer>
    );

    // --------------------------------------------

    // return (
    //   <TabContainer active={active}>
    //     <Tab
    //       href={!disabled ? href : undefined}
    //       disabled={disabled}
    //       active={active}
    //       iconPosition={iconPosition}
    //       hasIcon={icon != null ? true : false}
    //       ref={(anchorRef) => {
    //         tabRef.current = anchorRef;

    //         if (ref) {
    //           if (typeof ref === "function") ref(anchorRef);
    //           else (ref as React.MutableRefObject<HTMLAnchorElement | null>).current = anchorRef;
    //         }
    //       }}
    //       onKeyDown={handleOnKeyDown}
    //       tabIndex={active ? tabIndex : -1}
    //       role="tab"
    //       aria-selected={active}
    //       aria-disabled={disabled}
    //     >
    //       {icon && (
    //         <TabIconContainer iconPosition={iconPosition} active={active} disabled={disabled}>
    //           {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}
    //         </TabIconContainer>
    //       )}
    //       <DxcFlex alignItems="center" gap="0.5rem">
    //         <BaseTypography
    //           color={
    //             disabled
    //               ? colorsTheme.tabs.disabledFontColor
    //               : active
    //                 ? colorsTheme.tabs.selectedFontColor
    //                 : colorsTheme.tabs.unselectedFontColor
    //           }
    //           fontFamily={colorsTheme.tabs.fontFamily}
    //           fontSize={colorsTheme.tabs.fontSize}
    //           fontStyle={colorsTheme.tabs.fontStyle}
    //           fontWeight={colorsTheme.tabs.fontWeight}
    //           textAlign="center"
    //           letterSpacing="0.025em"
    //           lineHeight="1.715em"
    //         >
    //           {children}
    //         </BaseTypography>
    //         {notificationNumber && !disabled && (
    //           <DxcBadge
    //             mode="notification"
    //             size="small"
    //             label={typeof notificationNumber === "number" && notificationNumber}
    //           />
    //         )}
    //       </DxcFlex>
    //     </Tab>
    //   </TabContainer>
    // );

    // --------------------------------------------
  }
);

// const TabContainer = styled.div<{ active: TabProps["active"] }>`
//   align-items: stretch;
//   border-bottom: 2px solid ${(props) => (props.active ? props.theme.selectedUnderlineColor : "transparent")};
//   padding: 0.5rem;
// `;

// const Tab = styled.a<{
//   disabled: TabProps["disabled"];
//   active: TabProps["active"];
//   hasIcon: boolean;
//   iconPosition: TabsPropsType["iconPosition"];
// }>`
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: ${(props) => (props.hasIcon && props.iconPosition === "top" ? "column" : "row")};
//   justify-content: center;
//   align-items: center;
//   gap: ${(props) => (props.hasIcon && props.iconPosition === "top" ? "0.375rem" : "0.625rem")};
//   height: ${(props) => (props.hasIcon && props.iconPosition === "top" ? "78px" : "100%")};
//   min-width: 176px;
//   min-height: 44px;
//   padding: 0.375rem;
//   border-radius: 4px;
//   background: ${(props) =>
//     props.active ? props.theme.selectedBackgroundColor : props.theme.unselectedBackgroundColor};
//   text-decoration-color: transparent;
//   text-decoration-line: none;
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

//   ${(props) =>
//     !props.disabled &&
//     `
//       :hover {
//         background: ${props.theme.hoverBackgroundColor};
//       }
//       :focus {
//         outline: 2px solid ${props.theme.focusOutline};
//       }
//       :active {
//         background: ${props.theme.pressedBackgroundColor};
//         outline: 2px solid #33aaff};
//       }
//   `}
// `;

// const TabIconContainer = styled.div<{
//   iconPosition: TabsPropsType["iconPosition"];
//   active: TabProps["active"];
//   disabled: TabProps["disabled"];
// }>`
//   display: flex;
//   font-size: 24px;
//   color: ${(props) =>
//     props.active
//       ? props.theme.selectedIconColor
//       : props.disabled
//         ? props.theme.disabledIconColor
//         : props.theme.unselectedIconColor};
//   svg {
//     height: 24px;
//     width: 24px;
//   }
// `;

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
