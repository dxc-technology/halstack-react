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
import scrollbarStyles from "../styles/scroll";

const MAX_MAIN_NAV_SIZE = "60%";
const LEVEL_LIMIT = 1;

const MainContainer = styled.div<{ isResponsive: boolean; isMenuVisible: boolean }>`
  display: grid;
  width: 100%;
  grid-template-rows: ${(props) =>
    props.isResponsive && props.isMenuVisible
      ? "var(--height-xxxl) calc(100vh - var(--height-xxxl))"
      : "var(--height-xxxl)"};
  ${(props) => (props.isResponsive && props.isMenuVisible ? "position: fixed;" : "")}
`;

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
  svg {
    height: var(--height-m);
    width: auto;
  }
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
  return <DxcButton title="Toggle menu" icon="menu" mode="tertiary" aria-label="Menu button" onClick={onClick} />;
};

const ResponsiveMenuContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  max-height: 100%;
  overflow: auto;
  ${scrollbarStyles}
`;

const ResponsiveMenu = styled.div`
  width: 100%;
  background-color: var(--color-bg-neutral-lightest);
  display: flex;
  padding: var(--spacing-padding-m);
  box-sizing: border-box;
  flex-direction: column;
  gap: var(--spacing-gap-m);
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-alpha-medium);
  z-index: var(--z-header-overlay);
`;

/**
 * Prepares the navigation items to be rendered in the header.
 * Even though the typing does not allow this, the navigation tree does.
 * So this function limits the levels of navigation to the limit by ignoring any nested group items over that limit.
 * @param navItems prop with the navigation items.
 * @param level current level of recursion.
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

const DxcHeader = ({ logo, appTitle, navItems, sideContent, responsiveBottomContent }: HeaderProps): JSX.Element => {
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
    <MainContainer isResponsive={isResponsive} isMenuVisible={isMenuVisible}>
      <HeaderContainer>
        <DxcGrid
          templateColumns={
            !isResponsive && sanitizedNavItems && sanitizedNavItems.length > 0
              ? [
                  `minmax(auto, calc((100% - ${MAX_MAIN_NAV_SIZE}) / 2))`,
                  `minmax(auto, ${MAX_MAIN_NAV_SIZE})`,
                  `minmax(auto, calc((100% - ${MAX_MAIN_NAV_SIZE}) / 2))`,
                ]
              : ["auto", "auto"]
          }
          templateRows={["var(--height-xxxl)"]}
          gap="var(--spacing-gap-ml)"
          placeItems="center"
        >
          <BrandingContainer>
            <LogoContainer
              role={logo.onClick ? "button" : undefined}
              onClick={typeof logo.onClick === "function" ? logo.onClick : undefined}
              as={logo.href ? "a" : undefined}
            >
              {typeof logo.src === "string" ? (
                <DxcImage src={logo.src} alt={logo.alt} height="var(--height-m)" objectFit="contain" />
              ) : (
                logo.src
              )}
            </LogoContainer>
            {appTitle && !isResponsive && (
              <>
                <DxcDivider orientation="vertical" />
                <DxcHeading text={appTitle} as="h1" level={5} />
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
              {typeof sideContent === "function" ? sideContent(isResponsive) : sideContent}{" "}
              {isResponsive && <HamburguerButton onClick={toggleMenu} />}
            </RightSideContainer>
          )}
        </DxcGrid>
      </HeaderContainer>
      {isResponsive && isMenuVisible && (
        <ResponsiveMenuContainer>
          <ResponsiveMenu>
            {appTitle && <DxcHeading text={appTitle} as="h1" level={5} />}
            <DxcNavigationTree
              items={sanitizedNavItems}
              displayGroupLines={false}
              displayBorder={false}
              displayControlsAfter
            />
            {responsiveBottomContent && (
              <>
                <DxcDivider />
                {responsiveBottomContent}
              </>
            )}
          </ResponsiveMenu>
          <Overlay onClick={toggleMenu} />
        </ResponsiveMenuContainer>
      )}
    </MainContainer>
  );
};

export default DxcHeader;
