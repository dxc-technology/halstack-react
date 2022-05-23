import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import DxcBadge from "../badge/Badge";
import useTheme from "../useTheme";
import { TabProps } from "./types";
import * as ReactDOM from "react-dom";

const DxcTab = ({
  href,
  active = false,
  icon,
  disabled = false,
  notificationNumber = false,
  children,
  iconPosition,
  tabIndex,
  hasIcons = false,
  focused = false,
}: TabProps): JSX.Element => {
  const customTabRef = React.createRef<HTMLAnchorElement>();
  const tabRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (customTabRef.current) {
      ReactDOM.render(
        <MyCustomTab href={customTabRef.current.href} {...customTabRef.current.attributes}>
          {customTabRef.current.innerHTML}
        </MyCustomTab>,
        customTabRef.current.parentNode
      );
    }
  }, []);

  useLayoutEffect(() => {
    console.log(focused);
    focused && tabRef?.current?.focus();
  }, [focused]);

  const MyCustomTab = ({ href, children, ...otherProps }) => {
    return (
      <StyledTab
        href={!disabled && href ? href : undefined}
        disabled={disabled}
        iconPosition={iconPosition}
        hasIcon={hasIcons}
        tabIndex={active ? tabIndex : -1}
        ref={tabRef}
        {...otherProps}
      >
        {icon && (
          <TabIconContainer iconPosition={iconPosition}>
            {typeof icon === "string" ? <TabIcon src={icon} /> : icon}
          </TabIconContainer>
        )}
        <LabelContainer>
          {children}
          {notificationNumber && (
            <BadgeContainer>
              <DxcBadge notificationText={notificationNumber > 99 ? "+99" : notificationNumber} disabled={disabled} />
            </BadgeContainer>
          )}
        </LabelContainer>
      </StyledTab>
    );
  };

  return (
    <TabContainer active={active}>
      {typeof children === "string" ? (
        <StyledTab
          href={!disabled && href ? href : undefined}
          disabled={disabled}
          iconPosition={iconPosition}
          hasIcon={hasIcons}
          // tabIndex={active ? tabIndex : -1}
          tabIndex={disabled ? -1 : focused ? tabIndex : -1}
          ref={tabRef}
        >
          {icon && (
            <TabIconContainer iconPosition={iconPosition}>
              {typeof icon === "string" ? <TabIcon src={icon} /> : icon}
            </TabIconContainer>
          )}
          <LabelContainer>
            {children}
            {notificationNumber && (
              <BadgeContainer>
                <DxcBadge notificationText={notificationNumber > 99 ? "+99" : notificationNumber} disabled={disabled} />
              </BadgeContainer>
            )}
          </LabelContainer>
        </StyledTab>
      ) : (
        React.Children.only(children) &&
        React.cloneElement(React.Children.only(children), { ref: (ref) => (customTabRef.current = ref) })
      )}
    </TabContainer>
  );
};

type TabContainerProps = {
  active?: boolean;
};
const TabContainer = styled.div<TabContainerProps>`
  border-bottom: 2px solid ${(props) => (props.active ? "#6f2c91" : "#0000001a")};
`;

type StyledTabProps = {
  disabled: boolean;
  hasIcon: boolean;
  iconPosition: "top" | "left";
};
const StyledTab = styled.a<StyledTabProps>`
  display: flex;
  flex-direction: ${(props) => (props.hasIcon && props.iconPosition === "top" ? "column" : "row")};
  justify-content: center;
  align-items: center;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => (props.disabled ? "#0000004D" : "#333333")};
  text-decoration-color: transparent;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  height: ${(props) => (props.hasIcon && props.iconPosition === "top" ? "66px" : "32px")};
  min-width: 164px;
  margin: 0.5rem;
  padding: 0.375rem;

  border-radius: 4px;

  ${(props) =>
    !props.disabled &&
    `:hover {
    background: #0000000D;
  }

  :focus {
    outline: 2px solid #33aaff};
  }

  :active {
    background: #0000001A;
    outline: 2px solid #33aaff};
  }`}
`;

const TabIcon = styled.img``;

type TabIconContainerProps = {
  iconPosition?: "top" | "left";
};
const TabIconContainer = styled.div<TabIconContainerProps>`
  max-height: 24px;
  max-width: 24px;
  margin-bottom: ${(props) => props.iconPosition === "top" && "0.375rem"};
  margin-right: ${(props) => props.iconPosition === "left" && "0.625rem"};
  overflow: hidden;
  display: flex;
  align-items: center;
  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BadgeContainer = styled.div`
  margin-left: 0.5rem;
`;

export default DxcTab;
