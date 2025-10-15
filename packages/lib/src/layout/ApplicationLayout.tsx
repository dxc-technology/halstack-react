import { useContext, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
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
  top: 0;
  left: 0;
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  width: 100vw;
  position: absolute;
  overflow: hidden;

  @media (max-width: ${responsiveSizes.large}rem) {
    ${(props) => props.isSidenavVisible && "overflow: hidden;"}
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
  z-index: var(--z-app-layout-header);
`;

const VisibilityToggle = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: var(--spacing-padding-xxs) var(--spacing-padding-m);
  width: 100%;
  background-color: var(--color-bg-neutral-light);
  user-select: none;
  z-index: 1;
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
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const SidenavContainer = styled.div`
  width: fit-content;
  min-width: 280px;
  height: 100%;
  z-index: var(--z-app-layout-sidenav);
  position: sticky;
  overflow: auto;

  @media (max-width: ${responsiveSizes.large}rem) {
    position: absolute;
    top: 0px;
    height: 100%;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
`;

const FooterContainer = styled.div`
  height: fit-content;
  width: 100%;
`;

const MainContentContainer = styled.main`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const Main = ({ children }: AppLayoutMainPropsType): JSX.Element => <div>{children}</div>;

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
      <HeaderContainer>
        {header ?? <DxcHeader underlined />}
        {sidenav && isResponsive && (
          <VisibilityToggle>
            <Tooltip label={translatedLabels.applicationLayout.visibilityToggleTitle}>
              <HamburgerTrigger
                onClick={handleSidenavVisibility}
                aria-label={
                  visibilityToggleLabel ? undefined : translatedLabels.applicationLayout.visibilityToggleTitle
                }
              >
                <DxcIcon icon="Menu" />
                {visibilityToggleLabel}
              </HamburgerTrigger>
            </Tooltip>
          </VisibilityToggle>
        )}
      </HeaderContainer>

      <BodyContainer>
        <SidenavContextProvider value={setIsSidenavVisibleResponsive}>
          {sidenav && (isResponsive ? isSidenavVisibleResponsive : true) && (
            <SidenavContainer>{sidenav}</SidenavContainer>
          )}
        </SidenavContextProvider>
        <MainContainer id="MainScroll">
          <MainContentContainer>
            {findChildType(children, Main)}
            <FooterContainer>
              {footer ?? (
                <DxcFooter
                  copyright={`© DXC Technology ${year}. All rights reserved.`}
                  bottomLinks={bottomLinks}
                  socialLinks={socialLinks}
                />
              )}
            </FooterContainer>
          </MainContentContainer>
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
