// @ts-nocheck
import React, { forwardRef, useMemo, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import useTheme from "../useTheme";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import SidenavPropsType, { SidenavLinkPropsType, SidenavSectionPropsType, SidenavTitlePropsType } from "./types.js";
import DxcStack from "../stack/Stack";

const DxcSidenav = ({ children }: SidenavPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  return (
    <ThemeProvider theme={colorsTheme.sidenav}>
      <SideNavContainer>
        <BackgroundColorProvider color={colorsTheme.sidenav.backgroundColor}>
          {React.Children.map(children, (child) => {
            if (child.type !== Section && child.type !== Group && child.type !== Link) {
              return child;
            }
          })}
          <DxcStack divider={true} gutter="small">
            {React.Children.map(children, (child) => {
              if (child.type === Section || child.type === Group || child.type === Link) {
                return child;
              }
            })}
          </DxcStack>
        </BackgroundColorProvider>
      </SideNavContainer>
    </ThemeProvider>
  );
};

const Title = ({ children, icon }: SidenavTitlePropsType): JSX.Element => (
  <SidenavTitle>
    {icon}
    {children}
  </SidenavTitle>
);

const Section = ({ children }: SidenavSectionPropsType): JSX.Element => (
  <div>
    <DxcStack gutter="small">
      {/* {React.Children.map(children, (child) => {
        if (child.type === Group || child.type === Link) {
          return child;
        }
      })} */}
      {children}
    </DxcStack>
  </div>
);

const Group = ({ children, title, collapsable, icon }: SidenavGroupPropsType): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <SideNavGroup icon>
      {collapsable ? (
        <button className="sidenav-title" aria-expanded={collapsed} onClick={() => setCollapsed(!collapsed)}>
          <span>
            {icon}
            {title}
          </span>{" "}
          {collapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
          )}
        </button>
      ) : (
        <div className="sidenav-title">{title}</div>
      )}
      {(!collapsable || (collapsable && !collapsed)) && children}
    </SideNavGroup>
  );
};

const Link = forwardRef(
  (
    { href, children, newWindow = false, selected = false, icon, ...rest }: SidenavLinkPropsType,
    ref: Ref<HTMLAnchorElement>
  ): JSX.Element => {
    return (
      <SideNavLink
        selected={selected}
        href={href ? href : undefined}
        target={href ? (newWindow ? "_blank" : "_self") : undefined}
        ref={ref}
        {...rest}
      >
        <span>
          {icon}
          {children}
        </span>
        {newWindow && (
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
          </svg>
        )}
      </SideNavLink>
    );
  }
);

const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundColor};
  width: 280px;
  box-sizing: border-box;

  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  padding: 2rem 0;

  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollBarTrackColor};
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollBarThumbColor};
    border-radius: 3px;
  }
`;

const SidenavTitle = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;

  color: #4d4d4d;
  padding: 12px 24px;

  svg {
    margin-right: 8px;
  }
`;

const SideNavGroup = styled.div`
  width: 100%;

  button.sidenav-title {
    all: unset;
    cursor: pointer;
    ${(props) => (props.isGroupSelected ? "color: #ffffff; background: #4d4d4d;" : "")}
    &:focus {
      outline: 2px solid ${(props) => props.theme.linkFocusColor};
      outline-offset: -2px;
    }
  }
  .sidenav-title,
  button.sidenav-title {
    svg {
      width: 16px;
      fill: currentColor;
      margin-right: 8px;
    }
    box-sizing: border-box;
    width: 100%;

    font-family: ${(props) => props.theme.groupTitleFontFamily};
    font-style: ${(props) => props.theme.groupTitleFontStyle};
    font-weight: ${(props) => props.theme.groupTitleFontWeight};
    font-size: ${(props) => props.theme.groupTitleFontSize};
    line-height: 19px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px;
    padding: 7px 24px;

    span {
      display: flex;
      align-items: center;
    }
  }
  a {
    padding: 7px 24px 7px 36px;
  }
`;

type StyledLinkProps = {
  selected: boolean;
};
const SideNavLink = styled.a<StyledLinkProps>`
  letter-spacing: ${(props) => props.theme.linkFontLetterSpacing};

  text-transform: ${(props) => props.theme.linkFontTextTransform};
  text-decoration: ${(props) => props.theme.linkTextDecoration};

  font-family: ${(props) => props.theme.linkFontFamily};
  font-style: ${(props) => props.theme.linkFontStyle};
  font-weight: ${(props) => props.theme.linkFontWeight};
  font-size: ${(props) => props.theme.linkFontSize};
  line-height: 19px;

  ${(props) =>
    props.selected
      ? `color: ${props.theme.linkSelectedFontColor}; background: ${props.theme.linkSelectedBackgroundColor};`
      : `color: ${props.theme.linkFontColor}; background: transparent;`}

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 0 0 2px transparent;

  padding: 7px 24px;

  cursor: pointer;

  & > span {
    display: flex;
    align-items: center;
  }

  svg {
    width: 16px;
    fill: currentColor;
    margin-right: 8px;
  }

  &:hover {
    ${(props) =>
      props.selected
        ? `color: ${props.theme.linkSelectedHoverFontColor}; background: ${props.theme.linkSelectedHoverBackgroundColor};`
        : `color: ${props.theme.linkFontColor}; background: transparent;`}
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.linkFocusColor};
    outline-offset: -2px;
  }

  &:active {
    color: #ffffff;
    background: #4d4d4d;
    outline: 2px solid #0095ff;
    outline-offset: -2px;
  }
`;

DxcSidenav.Section = Section;
DxcSidenav.Group = Group;
DxcSidenav.Link = Link;
DxcSidenav.Title = Title;

export default DxcSidenav;
