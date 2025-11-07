import styled from "@emotion/styled";
import DxcGrid from "../grid/Grid";
import HeaderProps from "./types";
import DxcImage from "../image/Image";
import DxcDivider from "../divider/Divider";
import DxcHeading from "../heading/Heading";
import { isGroupItem } from "../base-menu/utils";
import { GroupItem, Item } from "../base-menu/types";
import { useEffect, useMemo, useState } from "react";
import DxcNavigationTree from "../navigation-tree/NavigationTree";
import { responsiveSizes } from "../common/variables";
import DxcButton from "../button/Button";

const MAX_MAIN_NAV_SIZE = "60%";
const LEVEL_LIMIT = 1;

const HeaderContainer = styled.header`
  width: 100%;
  height: var(--height-xxxl);
  box-sizing: border-box;
  background: var(--color-bg-neutral-lightest);
  box-shadow: var(--shadow-100);
  padding: 0 var(--spacing-gap-l);
`;

const SideContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  gap: var(--spacing-gap-m);
`;

const BrandingContainer = styled(SideContainer)`
  justify-content: flex-start;
  height: var(--height-m);
`;

const RightSideContainer = styled(SideContainer)`
  justify-content: flex-end;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MainNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  gap: var(--spacing-gap-s);
`;

const HamburguerButton = ({ onClick }: { onClick: () => void }) => {
  return <DxcButton icon="menu" mode="tertiary" aria-label="Menu button" onClick={onClick} />;
};

const ResponsiveMenuContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const ResponsiveMenu = styled.div`
  width: 100%;
  background-color: var(--color-bg-neutral-lightest);
  display: flex;
  padding: var(--spacing-padding-m);
  box-sizing: border-box;
  flex-direction: column;
  gap: 12px;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-alpha-medium);
  z-index: var(--z-header-overlay);
`;

/**
 * Prepares the navigation items to be rendered in the header.
 * @param navItems prop with the navigation items.
 * @return Processed navigation items with limited levels.
 */
const sanitizeNavItems = (navItems: HeaderProps["navItems"], level?: number): (GroupItem | Item)[] => {
  if (!navItems) return [];
  if (!level) level = 0;
  const sanitizedItems = navItems.reduce<(GroupItem | Item)[]>((acc, item) => {
    if (isGroupItem(item)) {
      if (level < LEVEL_LIMIT) {
        const processedGroup: GroupItem = {
          ...item,
          items: sanitizeNavItems(item.items, level + 1),
        };
        return [...acc, processedGroup];
      }
    } else {
      return [...acc, item];
    }
    return acc;
  }, []);
  return sanitizedItems;
};

const DxcNewHeader = ({ branding, navItems, sideContent }: HeaderProps): JSX.Element => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.matchMedia(`(max-width: ${responsiveSizes.medium}rem)`).matches);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    if (isResponsive && !isMenuVisible) {
      setIsMenuVisible(!isMenuVisible);
    } else {
      setIsMenuVisible(!isMenuVisible);
    }
  };

  const sanitizedNavItems = useMemo(() => (navItems ? sanitizeNavItems(navItems) : []), [navItems]);
  return (
    <DxcGrid
      templateRows={
        isResponsive && isMenuVisible
          ? ["var(--height-xxxl)", "calc(100vh - var(--height-xxxl))"]
          : ["var(--height-xxxl)"]
      }
    >
      <HeaderContainer>
        <DxcGrid
          templateColumns={
            !isResponsive && sanitizedNavItems && sanitizedNavItems.length > 0
              ? ["auto", `minmax(auto, ${MAX_MAIN_NAV_SIZE})`, "auto"]
              : ["auto", "auto"]
          }
          templateRows={["var(--height-xxxl)"]}
          gap="var(--spacing-gap-ml)"
          placeItems="center"
        >
          <BrandingContainer>
            <LogoContainer
              role={branding.logo.onClick ? "button" : undefined}
              as={branding.logo.href ? "a" : undefined}
            >
              <DxcImage src={branding.logo.src} alt={branding.logo.alt} height="var(--height-m)" objectFit="contain" />
            </LogoContainer>
            {branding.appTitle && !isResponsive && (
              <>
                <DxcDivider orientation="vertical" />
                <DxcHeading text={branding.appTitle} as="h1" level={5} />
              </>
            )}
          </BrandingContainer>
          {!isResponsive && sanitizedNavItems && sanitizedNavItems.length > 0 && (
            <MainNavContainer>
              <DxcNavigationTree
                items={sanitizedNavItems}
                displayGroupLines={false}
                displayBorder={false}
                displayControlsAfter
                hasPopOver
                isHorizontal
              />
            </MainNavContainer>
          )}
          {sideContent && (
            <RightSideContainer>
              {!isResponsive && sideContent} {isResponsive && <HamburguerButton onClick={toggleMenu} />}
            </RightSideContainer>
          )}
        </DxcGrid>
      </HeaderContainer>
      {isResponsive && isMenuVisible && (
        <ResponsiveMenuContainer>
          <ResponsiveMenu>
            {branding.appTitle && <DxcHeading text={branding.appTitle} as="h1" level={5} />}
            <DxcNavigationTree
              items={sanitizedNavItems}
              displayGroupLines={false}
              displayBorder={false}
              displayControlsAfter
            />
            {sideContent && (
              <>
                <DxcDivider />
                {sideContent}
              </>
            )}
          </ResponsiveMenu>
          <Overlay onClick={toggleMenu} />
        </ResponsiveMenuContainer>
      )}
    </DxcGrid>
  );
};

export default DxcNewHeader;
