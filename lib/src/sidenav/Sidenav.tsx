import React, { forwardRef, useContext, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { responsiveSizes } from "../common/variables";
import { useResponsiveSidenavVisibility } from "./SidenavContext";
import useTheme from "../useTheme";
import SidenavPropsType, {
  SidenavGroupPropsType,
  SidenavLinkPropsType,
  SidenavSectionPropsType,
  SidenavTitlePropsType,
} from "./types.js";
import DxcFlex from "../flex/Flex";
import DxcBleed from "../bleed/Bleed";
import CoreTokens from "../common/coreTokens";
import DxcIcon from "../icon/Icon";

const DxcSidenav = ({ title, children }: SidenavPropsType): JSX.Element => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.sidenav}>
      <SidenavContainer>
        {title}
        <DxcFlex direction="column" gap="1rem">
          {children}
        </DxcFlex>
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
  <>
    <DxcBleed horizontal="1rem">
      <DxcFlex direction="column">{children}</DxcFlex>
    </DxcBleed>
    <Divider />
  </>
);

const GroupContext = React.createContext<React.Dispatch<React.SetStateAction<boolean>> | null>(null);
const Group = ({ title, collapsable = false, icon, children }: SidenavGroupPropsType): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);
  const [isSelected, changeIsSelected] = useState(false);

  return (
    <GroupContext.Provider value={changeIsSelected}>
      <SidenavGroup>
        {collapsable && title ? (
          <SidenavGroupTitleButton
            aria-expanded={!collapsed}
            onClick={() => setCollapsed(!collapsed)}
            selectedGroup={collapsed && isSelected}
          >
            <DxcFlex alignItems="center" gap="0.5rem">
              {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}
              {title}
            </DxcFlex>
            <DxcIcon icon={collapsed ? "expand_more" : "expand_less"} />
          </SidenavGroupTitleButton>
        ) : (
          title && (
            <SidenavGroupTitle>
              {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}
              {title}
            </SidenavGroupTitle>
          )
        )}
        {!collapsed && children}
      </SidenavGroup>
    </GroupContext.Provider>
  );
};

const Link = forwardRef<HTMLAnchorElement, SidenavLinkPropsType>(
  (
    { href, newWindow = false, selected = false, icon, onClick, tabIndex = 0, children, ...otherProps },
    ref
  ): JSX.Element => {
    const changeIsGroupSelected = useContext(GroupContext);
    const setIsSidenavVisibleResponsive = useResponsiveSidenavVisibility();
    const handleClick = ($event: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.($event);
      setIsSidenavVisibleResponsive?.(false);
    };

    useEffect(() => {
      changeIsGroupSelected?.((isGroupSelected) => (!isGroupSelected ? selected : isGroupSelected));
    }, [selected, changeIsGroupSelected]);

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
        <DxcFlex alignItems="center" gap="0.5rem">
          {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}
          {children}
        </DxcFlex>
        {newWindow && <DxcIcon icon="open_in_new" />}
      </SidenavLink>
    );
  }
);

const SidenavContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 280px;
  @media (max-width: ${responsiveSizes.medium}rem) {
    width: 100vw;
  }
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.backgroundColor};

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
  display: flex;
  align-items: center;
  padding: 0.5rem 1.2rem;
  font-family: ${(props) => props.theme.titleFontFamily};
  font-style: ${(props) => props.theme.titleFontStyle};
  font-weight: ${(props) => props.theme.titleFontWeight};
  font-size: ${(props) => props.theme.titleFontSize};
  color: ${(props) => props.theme.titleFontColor};
  letter-spacing: ${(props) => props.theme.titleFontLetterSpacing};
  text-transform: ${(props) => props.theme.titleFontTextTransform};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${CoreTokens.color_grey_400};

  &:last-child {
    display: none;
  }
`;

const SidenavGroup = styled.div`
  a {
    padding: 0.5rem 1.2rem 0.5rem 2.25rem;
  }
`;

const SidenavGroupTitle = styled.span`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.2rem;
  font-family: ${(props) => props.theme.groupTitleFontFamily};
  font-style: ${(props) => props.theme.groupTitleFontStyle};
  font-weight: ${(props) => props.theme.groupTitleFontWeight};
  font-size: ${(props) => props.theme.groupTitleFontSize};
  span::before {
    font-size: 16px;
  }
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
  cursor: pointer;

  ${(props) =>
    props.selectedGroup
      ? `color: ${props.theme.groupTitleSelectedFontColor}; background-color: ${props.theme.groupTitleSelectedBackgroundColor};`
      : `color: ${props.theme.groupTitleFontColor}; background-color: transparent;`}

  &:focus, &:focus-visible {
    outline: 2px solid ${(props) => props.theme.linkFocusColor};
    outline-offset: -2px;
  }
  &:hover {
    ${(props) =>
      props.selectedGroup
        ? `color: ${props.theme.groupTitleSelectedHoverFontColor}; background-color: ${props.theme.groupTitleSelectedHoverBackgroundColor};`
        : `color: ${props.theme.groupTitleFontColor}; background-color: ${props.theme.groupTitleHoverBackgroundColor};`}
  }
  &:active {
    color: #fff;
    background-color: ${(props) => (props.selectedGroup ? "#333" : props.theme.groupTitleActiveBackgroundColor)};
  }
  span::before {
    font-size: 16px;
  }
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
  font-family: ${(props) => props.theme.linkFontFamily};
  font-style: ${(props) => props.theme.linkFontStyle};
  font-weight: ${(props) => props.theme.linkFontWeight};
  font-size: ${(props) => props.theme.linkFontSize};
  letter-spacing: ${(props) => props.theme.linkFontLetterSpacing};
  text-transform: ${(props) => props.theme.linkFontTextTransform};
  text-decoration: ${(props) => props.theme.linkTextDecoration};
  cursor: pointer;

  ${(props) =>
    props.selected
      ? `color: ${props.theme.linkSelectedFontColor}; background-color: ${props.theme.linkSelectedBackgroundColor};`
      : `color: ${props.theme.linkFontColor}; background-color: transparent;`}

  &:focus, &:focus-visible {
    outline: 2px solid ${(props) => props.theme.linkFocusColor};
    outline-offset: -2px;
  }
  &:hover {
    ${(props) =>
      props.selected
        ? `color: ${props.theme.linkSelectedHoverFontColor}; background-color: ${props.theme.linkSelectedHoverBackgroundColor};`
        : `color: ${props.theme.linkFontColor}; background-color: ${props.theme.linkHoverBackgroundColor};`}
  }
  &:active {
    color: #fff;
    background-color: ${(props) => (props.selected ? "#333" : "#4d4d4d")};
    outline: 2px solid #0095ff;
    outline-offset: -2px;
  }
  span::before {
    font-size: 16px;
  }
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
