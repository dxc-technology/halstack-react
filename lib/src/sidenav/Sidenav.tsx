import React, { forwardRef, Ref, useMemo, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { responsiveSizes } from "../common/variables.js";
import { useResponsiveSidenavVisibility } from "../layout/SidenavContext";
import useTheme from "../useTheme";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import SidenavPropsType, {
  SidenavGroupPropsType,
  SidenavLinkPropsType,
  SidenavSectionPropsType,
  SidenavTitlePropsType,
} from "./types.js";
import DxcFlex from "../flex/Flex";
import DxcBleed from "../bleed/Bleed";

const collapsedIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </svg>
);

const collapsableIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
  </svg>
);

const externalLinkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
);

const DxcSidenav = ({ children, title }: SidenavPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  return (
    <ThemeProvider theme={colorsTheme.sidenav}>
      <SidenavContainer>
        <BackgroundColorProvider color={colorsTheme.sidenav.backgroundColor}>
          {title}
          <DxcFlex direction="column" gap="1rem">
            {React.Children.map(children, (child, index) => {
              return (
                <>
                  {child}
                  {index !== React.Children.count(children) - 1 && <Divider />}
                </>
              );
            })}
          </DxcFlex>
        </BackgroundColorProvider>
      </SidenavContainer>
    </ThemeProvider>
  );
};

const Title = ({ children }: SidenavTitlePropsType): JSX.Element => (
  <DxcBleed horizontal="1rem">
    <SidenavTitle>{children}</SidenavTitle>
  </DxcBleed>
);

const Section = ({ children }: SidenavSectionPropsType): JSX.Element => (
  <DxcBleed horizontal="1rem">
    <DxcFlex direction="column">{children}</DxcFlex>
  </DxcBleed>
);

const Group = ({ children, title, collapsable = false, icon }: SidenavGroupPropsType): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);
  const selectedGroup = useMemo(() => {
    return collapsed ? React.Children.toArray(children).some((child) => child["props"]?.selected) : false;
  }, [collapsed, children]);
  return (
    <SidenavGroup>
      {collapsable && title ? (
        <SidenavGroupTitleButton
          role="button"
          aria-expanded={!collapsed}
          onClick={() => setCollapsed(!collapsed)}
          selectedGroup={selectedGroup}
        >
          <SidenavContent>
            {typeof icon === "string" ? <img src={icon} /> : icon}
            {title}
          </SidenavContent>
          {collapsed ? collapsedIcon : collapsableIcon}
        </SidenavGroupTitleButton>
      ) : (
        title && (
          <SidenavGroupTitle>
            {typeof icon === "string" ? <img src={icon} /> : icon}
            {title}
          </SidenavGroupTitle>
        )
      )}
      {!collapsed && children}
    </SidenavGroup>
  );
};

const Link = forwardRef(
  (
    {
      href,
      children,
      newWindow = false,
      selected = false,
      icon,
      tabIndex = 0,
      onClick,
      ...otherProps
    }: SidenavLinkPropsType,
    ref: Ref<HTMLAnchorElement>
  ): JSX.Element => {
    const setIsSidenavVisibleResponsive = useResponsiveSidenavVisibility();
    const handleClick = ($event) => {
      onClick?.($event);
      setIsSidenavVisibleResponsive?.(false);
    };
    return (
      <SidenavLink
        selected={selected}
        href={href ? href : undefined}
        target={href ? (newWindow ? "_blank" : "_self") : undefined}
        ref={ref}
        tabIndex={tabIndex}
        onClick={handleClick}
        {...otherProps}
      >
        <SidenavContent>
          {typeof icon === "string" ? <img src={icon} /> : icon}
          {children}
        </SidenavContent>
        {newWindow && externalLinkIcon}
      </SidenavLink>
    );
  }
);

const SidenavContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundColor};
  box-sizing: border-box;
  width: 280px;
  @media (max-width: ${responsiveSizes.medium}rem) {
    width: 100vw;
  }

  height: 100%;
  padding: 2rem 1rem;

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
  font-family: ${(props) => props.theme.titleFontFamily};
  font-style: ${(props) => props.theme.titleFontStyle};
  font-weight: ${(props) => props.theme.titleFontWeight};
  font-size: ${(props) => props.theme.titleFontSize};
  line-height: 27px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.titleFontColor};
  text-transform: ${(props) => props.theme.titleFontTextTransform};
  letter-spacing: ${(props) => props.theme.titleFontLetterSpacing};
  padding: 0.5rem 1.2rem;

  svg {
    margin-right: 0.5rem;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #999999;
`;

const SidenavGroup = styled.div`
  width: 100%;
  a {
    padding: 0.5rem 1.2rem 0.5rem 2.25rem;
  }
`;

const SidenavGroupTitle = styled.span`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem 1.2rem;
  font-family: ${(props) => props.theme.groupTitleFontFamily};
  font-style: ${(props) => props.theme.groupTitleFontStyle};
  font-weight: ${(props) => props.theme.groupTitleFontWeight};
  font-size: ${(props) => props.theme.groupTitleFontSize};
  line-height: 18px;

  img,
  svg {
    height: 16px;
    width: 16px;
  }
`;

const SidenavGroupTitleButton = styled.button<{ selectedGroup: boolean }>`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 1.2rem;

  font-family: ${(props) => props.theme.groupTitleFontFamily};
  font-style: ${(props) => props.theme.groupTitleFontStyle};
  font-weight: ${(props) => props.theme.groupTitleFontWeight};
  font-size: ${(props) => props.theme.groupTitleFontSize};
  line-height: 19px;

  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.linkFocusColor};
    outline-offset: -2px;
  }
  &:hover {
    ${(props) =>
      props.selectedGroup
        ? `color: ${props.theme.groupTitleSelectedHoverFontColor}; background: ${props.theme.groupTitleSelectedHoverBackgroundColor};`
        : `color: ${props.theme.groupTitleFontColor}; background: ${props.theme.groupTitleHoverBackgroundColor};`}
  }
  &:active {
    background-color: ${(props) => props.theme.groupTitleActiveBackgroundColor};
    color: ${(props) => props.theme.groupTitleFontColor};
  }
  ${(props) =>
    props.selectedGroup
      ? `color: ${props.theme.groupTitleSelectedFontColor}; background: ${props.theme.groupTitleSelectedBackgroundColor};`
      : `color: ${props.theme.groupTitleFontColor}; background: transparent;`}

  svg {
    height: 16px;
    width: 16px;
  }
`;

const SidenavLink = styled.a<{ selected: SidenavLinkPropsType["selected"] }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem 1.2rem;
  box-shadow: 0 0 0 2px transparent;
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

  cursor: pointer;

  &:hover {
    ${(props) =>
      props.selected
        ? `color: ${props.theme.linkSelectedHoverFontColor}; background: ${props.theme.linkSelectedHoverBackgroundColor};`
        : `color: ${props.theme.linkFontColor}; background: ${props.theme.linkHoverBackgroundColor};`}
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

  svg {
    height: 16px;
    width: 16px;
  }
`;

const SidenavContent = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img,
  svg {
    height: 16px;
    width: 16px;
  }
`;

DxcSidenav.Section = Section;
DxcSidenav.Group = Group;
DxcSidenav.Link = Link;
DxcSidenav.Title = Title;

export default DxcSidenav;
