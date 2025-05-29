import { forwardRef, MouseEvent, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import DxcBleed from "../bleed/Bleed";
import { responsiveSizes } from "../common/variables";
import DxcFlex from "../flex/Flex";
import DxcIcon from "../icon/Icon";
import { GroupContext, GroupContextProvider, useResponsiveSidenavVisibility } from "./SidenavContext";
import SidenavPropsType, {
  SidenavGroupPropsType,
  SidenavLinkPropsType,
  SidenavSectionPropsType,
  SidenavTitlePropsType,
} from "./types";
import { scrollbarStyles } from "../styles/scroll";
import DxcDivider from "../divider/Divider";

const SidenavContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 280px;
  @media (max-width: ${responsiveSizes.large}rem) {
    width: 100vw;
  }
  padding: var(--spacing-padding-xl) var(--spacing-padding-none);
  background-color: var(--color-bg-neutral-light);

  overflow-y: auto;
  overflow-x: hidden;
  ${scrollbarStyles}
`;

const SidenavTitle = styled.div`
  display: flex;
  align-items: center;
  padding: var(--spacing-padding-xs) var(--spacing-padding-m);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-xl);
  color: var(--color-fg-neutral-stronger);
  font-weight: var(--typography-label-semibold);
`;

const SidenavGroup = styled.div`
  a {
    padding: var(--spacing-padding-xs) var(--spacing-padding-xxl);
  }
`;

const SidenavGroupTitle = styled.span`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  padding: var(--spacing-padding-xs) var(--spacing-padding-ml);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-semibold);
  span::before {
    font-size: var(--height-xxs);
  }
  svg {
    height: var(--height-xxs);
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
  padding: var(--spacing-padding-xs) var(--spacing-padding-ml);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-semibold);
  cursor: pointer;

  ${(props) =>
    props.selectedGroup
      ? `color: var(--color-fg-neutral-bright); background-color: var(--color-bg-neutral-stronger);`
      : `color: var(--color-fg-neutral-stronger); background-color: transparent;`}

  &:focus, &:focus-visible {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    outline-offset: -2px;
  }
  &:hover,
  &:active {
    background-color: ${(props) =>
      props.selectedGroup ? "var(--color-bg-neutral-strongest)" : "var(--color-bg-neutral-medium)"};
  }
  span::before {
    font-size: var(--height-xxs);
  }
  svg {
    height: var(--height-xxs);
    width: 16px;
  }
`;

const SidenavLink = styled.a<{ selected: SidenavLinkPropsType["selected"] }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-padding-xs) var(--spacing-padding-ml);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  text-decoration: none;
  cursor: pointer;

  ${(props) =>
    props.selected
      ? `color: var(--color-fg-neutral-bright); background-color: var(--color-bg-neutral-stronger);`
      : `color: var(--color-fg-neutral-stronger); background-color: transparent;`}

  &:focus, &:focus-visible {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    outline-offset: -2px;
  }
  &:hover,
  &:active {
    background-color: ${(props) =>
      props.selected ? "var(--color-bg-neutral-strongest)" : "var(--color-bg-neutral-medium)"};
  }
  span::before {
    font-size: var(--height-xxs);
  }
  svg {
    height: var(--height-xxs);
    width: 16px;
  }
`;

const DxcSidenav = ({ title, children }: SidenavPropsType): JSX.Element => {
  return (
    <SidenavContainer>
      {title}
      <DxcFlex direction="column" gap="var(--spacing-gap-ml)">
        {children}
      </DxcFlex>
    </SidenavContainer>
  );
};

const Title = ({ children }: SidenavTitlePropsType): JSX.Element => <SidenavTitle>{children}</SidenavTitle>;

const Section = ({ children }: SidenavSectionPropsType): JSX.Element => (
  <>
    <DxcFlex direction="column">{children}</DxcFlex>
    <DxcDivider />
  </>
);

const Group = ({ title, collapsable = false, icon, children }: SidenavGroupPropsType): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);
  const [isSelected, changeIsSelected] = useState(false);

  return (
    <GroupContextProvider value={changeIsSelected}>
      <SidenavGroup>
        {collapsable && title ? (
          <SidenavGroupTitleButton
            aria-expanded={!collapsed}
            onClick={() => setCollapsed(!collapsed)}
            selectedGroup={collapsed && isSelected}
          >
            <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
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
    </GroupContextProvider>
  );
};

const Link = forwardRef<HTMLAnchorElement, SidenavLinkPropsType>(
  (
    { href, newWindow = false, selected = false, icon, onClick, tabIndex = 0, children, ...otherProps },
    ref
  ): JSX.Element => {
    const changeIsGroupSelected = useContext(GroupContext);
    const setIsSidenavVisibleResponsive = useResponsiveSidenavVisibility();
    const handleClick = ($event: MouseEvent<HTMLAnchorElement>) => {
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
        <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
          {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}
          {children}
        </DxcFlex>
        {newWindow && <DxcIcon icon="open_in_new" />}
      </SidenavLink>
    );
  }
);

DxcSidenav.Section = Section;
DxcSidenav.Group = Group;
DxcSidenav.Link = Link;
DxcSidenav.Title = Title;

export default DxcSidenav;
