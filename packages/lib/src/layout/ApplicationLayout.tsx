import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { responsiveSizes } from "../common/variables";
import DxcFooter from "../footer/Footer";
import DxcHeader from "../header/Header";
import DxcIcon from "../icon/Icon";
import DxcSidenav from "../sidenav/Sidenav";
import { SidenavContextProvider, useResponsiveSidenavVisibility } from "../sidenav/SidenavContext";
import { Tooltip } from "../tooltip/Tooltip";
import ApplicationLayoutPropsType, { AppLayoutMainPropsType } from "./types";
import { bottomLinks, findChildType, socialLinks, useResponsive, year } from "./utils";
import { HalstackLanguageContext } from "../HalstackContext";

const ApplicationLayoutContainer = styled.div<{
  isSidenavVisible: boolean;
  hasSidenav: boolean;
}>`
  position: absolute;
  top: 64px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: ${responsiveSizes.large}rem) {
    ${(props) => props.hasSidenav && "top: 116px"};
    ${(props) => props.isSidenavVisible && "overflow: hidden;"}
  }
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

const VisibilityToggle = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: var(--spacing-padding-xxs) var(--spacing-padding-m);
  width: 100%;
  background-color: var(--color-bg-neutral-light);
  user-select: none;
  z-index: 2;
`;

const HamburgerTrigger = styled.button`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-gap-s);
  border: 0px solid transparent;
  border-radius: var(--border-radius-xs);
  padding: var(--spacing-gap-none) var(--spacing-gap-none);
  background-color: transparent;
  font-family: var(--typography-font-family);
  font-weight: var(--typography-label-semibold);
  font-size: var(--typography-label-m);
  color: var(--color-fg-neutral-dark);
  cursor: pointer;

  :active {
    background-color: var(--color-bg-neutral-lightest);
  }
  :focus,
  :focus-visible {
    outline: none;
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
  }
  span::before {
    font-size: var(--height-xs);
  }
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const SidenavContainer = styled.div`
  position: sticky;
  top: 64px;
  display: flex;
  height: calc(100vh - 64px);
  z-index: 1;

  @media (max-width: ${responsiveSizes.large}rem) {
    position: absolute;
    top: 0px;
    height: 100%;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainContentContainer = styled.main`
  flex: 1;
  background-color: var(--color-bg-neutral-lightest);
`;

const Main = ({ children }: AppLayoutMainPropsType): JSX.Element => <>{children}</>;

const DxcApplicationLayout = ({
  visibilityToggleLabel = "",
  header,
  sidenav,
  footer,
  children,
}: ApplicationLayoutPropsType): JSX.Element => {
  const [isSidenavVisibleResponsive, setIsSidenavVisibleResponsive] = useState(false);
  const isResponsive = useResponsive(responsiveSizes.large);
  const ref = useRef(null);
  const translatedLabels = useContext(HalstackLanguageContext);

  const handleSidenavVisibility = () => {
    setIsSidenavVisibleResponsive((currentIsSidenavVisibleResponsive) => !currentIsSidenavVisibleResponsive);
  };

  useEffect(() => {
    if (!isResponsive) {
      setIsSidenavVisibleResponsive(false);
    }
  }, [isResponsive]);

  return (
    <ApplicationLayoutContainer hasSidenav={!!sidenav} isSidenavVisible={isSidenavVisibleResponsive} ref={ref}>
      <HeaderContainer>{header ?? <DxcHeader underlined />}</HeaderContainer>
      {sidenav && isResponsive && (
        <VisibilityToggle>
          <Tooltip label={translatedLabels.applicationLayout.visibilityToggleTitle}>
            <HamburgerTrigger
              onClick={handleSidenavVisibility}
              aria-label={visibilityToggleLabel ? undefined : translatedLabels.applicationLayout.visibilityToggleTitle}
            >
              <DxcIcon icon="Menu" />
              {visibilityToggleLabel}
            </HamburgerTrigger>
          </Tooltip>
        </VisibilityToggle>
      )}
      <BodyContainer>
        <SidenavContextProvider value={setIsSidenavVisibleResponsive}>
          {sidenav && (isResponsive ? isSidenavVisibleResponsive : true) && (
            <SidenavContainer>{sidenav}</SidenavContainer>
          )}
        </SidenavContextProvider>
        <MainContainer>
          <MainContentContainer>{findChildType(children, Main)}</MainContentContainer>
          {footer ?? (
            <DxcFooter
              copyright={`© DXC Technology ${year}. All rights reserved.`}
              bottomLinks={bottomLinks}
              socialLinks={socialLinks}
            />
          )}
        </MainContainer>
      </BodyContainer>
    </ApplicationLayoutContainer>
  );
};

DxcApplicationLayout.Footer = DxcFooter;
DxcApplicationLayout.Header = DxcHeader;
DxcApplicationLayout.Main = Main;
DxcApplicationLayout.SideNav = DxcSidenav;
DxcApplicationLayout.useResponsiveSidenavVisibility = useResponsiveSidenavVisibility;

export default DxcApplicationLayout;
