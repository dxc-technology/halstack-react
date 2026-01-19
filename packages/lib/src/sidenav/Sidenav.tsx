import styled from "@emotion/styled";
import { responsiveSizes } from "../common/variables";
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

const COLLAPSED_WIDTH = 56;
const MIN_WIDTH = 240;
const MAX_WIDTH = 320;
const DEFAULT_WIDTH = 280;

const SidenavContainer = styled.div<{
  expanded: boolean;
  width: number;
}>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  width: ${({ expanded, width }) => (expanded ? `${width}px` : `${COLLAPSED_WIDTH}px`)};
  min-width: 56px;
  height: 100%;
  @media (max-width: ${responsiveSizes.large}rem) {
    width: 100vw;
  }
  padding-top: var(--spacing-padding-m);
  padding-bottom: var(--spacing-padding-m);
  gap: var(--spacing-gap-l);
  background-color: var(--color-bg-neutral-lightest);
  border-right: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-lighter);
  & > div {
    box-sizing: border-box;
    padding-left: var(--spacing-padding-xs);
    padding-right: var(--spacing-padding-xs);
  }
`;

// TODO: REFACTOR IN CASE SIDEPANEL CAN GO RIGHT
const ResizeHandle = styled.span<{ active: boolean }>`
  position: absolute;
  top: 0;
  right: calc(-1 * var(--spacing-padding-xs));
  padding: var(--spacing-padding-xxs);
  height: 100%;
  z-index: 10;
  cursor: ew-resize;
  background-color: ${({ active }) => (active ? "var(--color-bg-neutral-medium)" : "var(--color-bg-neutral-light)")};
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
  defaultExpanded = true,
  onExpandedChange,
  searchBar,
}: SidenavPropsType): JSX.Element => {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const { logo, headerExists } = useContext(ApplicationLayoutContext);
  const isControlled = expanded !== undefined;
  const isExpanded = isControlled ? !!expanded : internalExpanded;
  const shouldFocusSearchBar = useRef(false);
  const sidenavRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const resizing = useRef(false);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!resizing.current || !sidenavRef.current) return;

      const rect = sidenavRef?.current?.getBoundingClientRect();
      const nextWidth = e.clientX - rect.left;

      setWidth(() => Math.min(Math.max(nextWidth, MIN_WIDTH), MAX_WIDTH));
    };

    const stop = () => {
      resizing.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", stop);
    };
  }, []);

  const startResize = () => {
    resizing.current = true;
    document.body.style.cursor = "ew-resize";
    document.body.style.userSelect = "none";
  };

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
    <SidenavContainer expanded={isExpanded} width={width} ref={sidenavRef}>
      {isExpanded && <ResizeHandle active={resizing.current} onMouseDown={startResize} />}
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

        <DxcFlex direction="column" gap="var(--spacing-gap-m)" justifyContent="center" alignItems="flex-start">
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
          <SidenavTitle>{appTitle}</SidenavTitle>
        </DxcFlex>
      </DxcFlex>
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
    </SidenavContainer>
  );
};

export default DxcSidenav;
