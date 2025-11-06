import styled from "@emotion/styled";
import { responsiveSizes } from "../common/variables";
import DxcFlex from "../flex/Flex";
import SidenavPropsType, { Logo } from "./types";
import DxcDivider from "../divider/Divider";
import DxcButton from "../button/Button";
import DxcImage from "../image/Image";
import { useState } from "react";
import DxcNavigationTree from "../navigation-tree/NavigationTree";

const SidenavContainer = styled.div<{ expanded: boolean }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* TODO: IMPLEMENT RESIZABLE SIDENAV */
  min-width: ${({ expanded }) => (expanded ? "240px" : "56px")};
  max-width: ${({ expanded }) => (expanded ? "320px" : "56px")};
  height: 100%;
  @media (max-width: ${responsiveSizes.large}rem) {
    width: 100vw;
  }
  padding: var(--spacing-padding-m) var(--spacing-padding-xs);
  gap: var(--spacing-gap-l);
  background-color: var(--color-bg-neutral-lightest);
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

const DxcSidenav = ({
  topContent,
  bottomContent,
  navItems,
  branding,
  displayGroupLines = false,
  expanded,
  defaultExpanded = true,
  onExpandedChange,
}: SidenavPropsType): JSX.Element => {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isControlled = expanded !== undefined;
  const isExpanded = isControlled ? !!expanded : internalExpanded;

  const handleToggle = () => {
    const nextState = !isExpanded;
    if (!isControlled) setInternalExpanded(nextState);
    onExpandedChange?.(nextState);
  };

  const isBrandingObject = (branding: SidenavPropsType["branding"]): branding is { logo?: Logo; appTitle?: string } => {
    return (
      (typeof branding === "object" && branding !== null && "logo" in branding) ||
      (!!branding && "appTitle" in branding)
    );
  };

  return (
    <SidenavContainer expanded={isExpanded}>
      <DxcFlex
        justifyContent={isExpanded ? "normal" : "center"}
        gap={isExpanded ? "var(--spacing-gap-xs)" : "var(--spacing-gap-s)"}
        direction={isExpanded ? "row" : "column-reverse"}
        alignItems={isExpanded ? "normal" : "center"}
      >
        <DxcButton
          icon={`left_panel_${isExpanded ? "close" : "open"}`}
          size={{ height: "medium" }}
          mode="tertiary"
          title={isExpanded ? "Collapse" : "Expand"}
          onClick={handleToggle}
        />
        {isBrandingObject(branding) ? (
          <DxcFlex direction="column" gap="var(--spacing-gap-m)" justifyContent="center" alignItems="flex-start">
            {branding.logo && (
              <LogoContainer
                onClick={branding.logo.onClick}
                hasAction={!!branding.logo.onClick || !!branding.logo.href}
                role={branding.logo.onClick ? "button" : branding.logo.href ? "link" : "presentation"}
                as={branding.logo.href ? "a" : undefined}
                href={branding.logo.href}
                aria-label={(branding.logo.onClick || branding.logo.href) && (branding.appTitle || "Avatar")}
              >
                <DxcImage alt={branding.logo.alt ?? ""} src={branding.logo.src} height="100%" width="100%" />
              </LogoContainer>
            )}
            <SidenavTitle>{branding.appTitle}</SidenavTitle>
          </DxcFlex>
        ) : (
          branding
        )}
      </DxcFlex>
      {topContent}
      {navItems && (
        <DxcNavigationTree
          items={navItems}
          displayGroupLines={displayGroupLines}
          displayBorder={false}
          responsiveView={!isExpanded}
          displayControlsAfter
        />
      )}
      <DxcDivider color="lightGrey" />
      {bottomContent}
    </SidenavContainer>
  );
};

export default DxcSidenav;
