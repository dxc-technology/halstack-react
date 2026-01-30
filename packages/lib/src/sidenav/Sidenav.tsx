import styled from "@emotion/styled";
import DxcFlex from "../flex/Flex";
import SidenavPropsType from "./types";
import DxcDivider from "../divider/Divider";
import DxcButton from "../button/Button";
import DxcImage from "../image/Image";
import { useContext, useEffect, useRef, useState } from "react";
import DxcNavigationTree from "../navigation-tree/NavigationTree";
import DxcInset from "../inset/Inset";
import ApplicationLayoutContext from "../layout/ApplicationLayoutContext";
import DxcSearchBar from "../search-bar/SearchBar";
import DxcSearchBarTrigger from "../search-bar/SearchBarTrigger";
import useResize from "../utils/useResize";
import { useBreakpoint } from "../utils/useBreakpoint";
import { responsiveSizes } from "../common/variables";

const COLLAPSED_WIDTH = 56;
const MIN_WIDTH = 0;
const MAX_WIDTH = 320;
const DEFAULT_WIDTH = 280;

const SidenavContainer = styled.div<{
  expanded: boolean;
  width: number;
  showBorder?: boolean;
  side?: "left" | "right";
  hasHeader?: boolean;
}>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ side }) => (side === "right" ? "row-reverse" : "row")};
  ${({ showBorder }) =>
    showBorder &&
    `border-right: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-lighter);`}
  width: ${({ expanded, width }) => (expanded ? `${width}px` : `${COLLAPSED_WIDTH}px`)};
  min-width: ${({ expanded }) => (expanded ? "240px" : "56px")};
  height: 100%;
  background-color: var(--color-bg-neutral-lightest);
  @media (max-width: ${responsiveSizes.medium}rem) {
    width: 100%;
    ${({ expanded, hasHeader }) =>
      expanded && (hasHeader ? "height: calc(100vh - var(--height-xxxl));" : "height: 100vh;")}
  }
`;

const SidenavContent = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: var(--spacing-padding-m);
  padding-bottom: var(--spacing-padding-m);
  gap: var(--spacing-gap-l);
  background-color: var(--color-bg-neutral-lightest);

  & > div {
    box-sizing: border-box;
    padding-left: var(--spacing-padding-xs);
    padding-right: var(--spacing-padding-xs);
  }
`;

const ResizeHandle = styled.span<{ active: boolean }>`
  padding: var(--spacing-padding-none) var(--spacing-padding-xxxs);
  height: 100%;
  cursor: col-resize;
  background-color: transparent;
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
  href?: string;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: ${(props) => (props.hasAction ? "pointer" : "default")};
  svg {
    max-width: 100%;
    max-height: 100%;
  }
`;

const DxcSidenav = ({
  topContent,
  bottomContent,
  navItems,
  appTitle,
  displayGroupLines = false,
  expanded,
  defaultExpanded,
  onExpandedChange,
  searchBar,
}: SidenavPropsType): JSX.Element => {
  const isBelowLarge = useBreakpoint("large");
  const isBelowMedium = useBreakpoint("medium");
  const { logo, headerExists } = useContext(ApplicationLayoutContext);
  const isControlled = expanded !== undefined;
  const { width, sidenavRef, isResizing, startResize } = useResize({
    minWidth: MIN_WIDTH,
    maxWidth: MAX_WIDTH,
    defaultWidth: DEFAULT_WIDTH,
  });

  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded ?? !isBelowLarge);

  useEffect(() => {
    if (defaultExpanded === undefined) {
      setInternalExpanded(!isBelowLarge && width > COLLAPSED_WIDTH);
    }
  }, [isBelowLarge, width]);

  const isExpanded = isControlled ? !!expanded : internalExpanded;
  const shouldFocusSearchBar = useRef(false);

  const handleToggle = () => {
    const nextState = !isExpanded;
    if (!isControlled) setInternalExpanded(nextState);
    onExpandedChange?.(nextState);
    if (searchBar && nextState === false) {
      shouldFocusSearchBar.current = false;
    }
  };

  const handleExpandSearch = () => {
    shouldFocusSearchBar.current = true;
    handleToggle();
  };

  return (
    <SidenavContainer
      expanded={isExpanded}
      width={width}
      showBorder={!(isBelowMedium && !isExpanded)}
      ref={sidenavRef}
      side="left"
      hasHeader={headerExists}
    >
      <SidenavContent>
        <DxcFlex
          justifyContent="flex-start"
          gap={isExpanded ? "var(--spacing-gap-xs)" : "var(--spacing-gap-s)"}
          direction={isExpanded ? "row" : isBelowMedium ? "row" : "column-reverse"}
          alignItems={isExpanded || isBelowMedium ? "flex-start" : "center"}
        >
          <DxcButton
            icon={`left_panel_${isExpanded ? "close" : "open"}`}
            size={{ height: "medium" }}
            mode="tertiary"
            title={isExpanded ? "Collapse" : "Expand"}
            onClick={handleToggle}
          />

          <DxcFlex
            direction="column"
            gap="var(--spacing-gap-m)"
            justifyContent="center"
            alignItems="flex-start"
            alignSelf="center"
          >
            {logo && !headerExists && (
              <LogoContainer
                onClick={logo.onClick}
                hasAction={!!logo.onClick || !!logo.href}
                role={logo.onClick ? "button" : logo.href ? "link" : "presentation"}
                as={logo.href ? "a" : undefined}
                href={logo.href}
              >
                {typeof logo.src === "string" ? (
                  <DxcImage alt={logo.alt ?? ""} src={logo.src} height="100%" width="100%" />
                ) : (
                  logo.src
                )}
              </LogoContainer>
            )}
            {isExpanded && <SidenavTitle>{appTitle}</SidenavTitle>}
          </DxcFlex>
        </DxcFlex>
        {!(isBelowMedium && !isExpanded) && (
          <>
            {(topContent || searchBar) && (
              <DxcFlex direction="column" gap="var(--spacing-gap-l)">
                {searchBar &&
                  (isExpanded ? (
                    <DxcSearchBar {...searchBar} autoFocus={shouldFocusSearchBar.current} />
                  ) : (
                    <DxcSearchBarTrigger onTriggerClick={handleExpandSearch} />
                  ))}
                {topContent}
              </DxcFlex>
            )}
            {navItems && (
              <DxcNavigationTree
                items={navItems}
                displayGroupLines={displayGroupLines}
                displayBorder={false}
                hasPopOver={!isExpanded}
                displayControlsAfter
              />
            )}
            {bottomContent && (
              <>
                <DxcInset horizontal="var(--spacing-padding-xs)">
                  <DxcDivider color="lightGrey" />
                </DxcInset>
                <DxcFlex direction="column" gap="var(--spacing-gap-l)">
                  {bottomContent}
                </DxcFlex>
              </>
            )}
          </>
        )}
      </SidenavContent>
      {isExpanded && <ResizeHandle active={isResizing} onMouseDown={startResize} />}
    </SidenavContainer>
  );
};

export default DxcSidenav;
