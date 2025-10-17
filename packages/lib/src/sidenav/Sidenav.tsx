import styled from "@emotion/styled";
import { responsiveSizes } from "../common/variables";
import DxcFlex from "../flex/Flex";
import SidenavPropsType, { Logo } from "./types";
import scrollbarStyles from "../styles/scroll";
import DxcDivider from "../divider/Divider";
import DxcButton from "../button/Button";
import DxcContextualMenu from "../contextual-menu/ContextualMenu";
import DxcImage from "../image/Image";
import { useState } from "react";

const SidenavContainer = styled.div<{ expanded: boolean }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* TODO: ASK FINAL SIZES AND IMPLEMENT RESIZABLE SIDENAV */
  min-width: ${({ expanded }) => (expanded ? "240px" : "56px")};
  max-width: ${({ expanded }) => (expanded ? "320px" : "56px")};
  height: 100%;
  @media (max-width: ${responsiveSizes.large}rem) {
    width: 100vw;
  }
  padding: var(--spacing-padding-m) var(--spacing-padding-xs);
  gap: var(--spacing-gap-l);
  background-color: var(--color-bg-neutral-lightest);
  /* overflow-y: auto;
  overflow-x: hidden;
  ${scrollbarStyles} */
`;

const SidenavTitle = styled.div`
  display: flex;
  align-items: center;
  font-family: var(--typography-font-family);
  font-size: var(--typography-ttle-m);
  color: var(--color-fg-neutral-dark);
  font-weight: var(--typography-title-bold);
`;

const LogoContainer = styled.div<{
  hasAction?: boolean;
  href?: Logo["href"];
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const DxcSidenav = ({ title, children, items, logo }: SidenavPropsType): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(true);

  const renderedChildren = typeof children === "function" ? children(isExpanded) : children;

  return (
    <SidenavContainer expanded={isExpanded}>
      <DxcFlex justifyContent={isExpanded ? "space-between" : "center"}>
        {/* TODO: HANDLE TITLE */}
        <DxcButton
          icon={`left_panel_${isExpanded ? "close" : "open"}`}
          size={{ height: "medium" }}
          mode="tertiary"
          title={isExpanded ? "Collapse" : "Expand"}
          onClick={() => {
            setIsExpanded((previousExpanded) => !previousExpanded);
          }}
        />
        {isExpanded && (
          <DxcFlex direction="column" gap="var(--spacing-gap-m)" justifyContent="center" alignItems="flex-start">
            {logo && (
              <LogoContainer
                onClick={logo?.onClick}
                hasAction={!!logo?.onClick || !!logo?.href}
                role={logo?.onClick ? "button" : "presentation"}
                as={logo?.href ? "a" : undefined}
                href={logo?.href}
                aria-label={(logo?.onClick || logo?.href) && (title || "Avatar")}
                // tabIndex={logo?.onClick || logo?.href ? tabIndex : undefined}
              >
                <DxcImage alt={logo?.alt} src={logo?.src} height="100%" width="100%" />
              </LogoContainer>
            )}
            <SidenavTitle>{title}</SidenavTitle>
          </DxcFlex>
        )}
      </DxcFlex>
      {/* TODO: SEARCHBAR */}
      <DxcContextualMenu
        items={items}
        displayGroupsLine
        displayControlsAfter
        displayBorder={false}
        responsiveView={!isExpanded}
      />
      <DxcDivider color="lightGrey" />
      {renderedChildren}
    </SidenavContainer>
  );
};

// DxcSidenav.Section = Section;
// DxcSidenav.Group = Group;
// DxcSidenav.Link = Link;
// DxcSidenav.Title = Title;

export default DxcSidenav;
