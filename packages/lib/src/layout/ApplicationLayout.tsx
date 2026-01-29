import { useMemo, useRef, useState, useCallback } from "react";
import styled from "@emotion/styled";
import DxcFooter from "../footer/Footer";
import DxcHeader from "../header/Header";
import DxcSidenav from "../sidenav/Sidenav";
import ApplicationLayoutPropsType, { AppLayoutMainPropsType } from "./types";
import { bottomLinks, findChildType, socialLinks, year } from "./utils";
import ApplicationLayoutContext from "./ApplicationLayoutContext";

const ApplicationLayoutContainer = styled.div<{ header?: React.ReactNode }>`
  top: 0;
  left: 0;
  display: grid;
  grid-template-rows: ${({ header }) => (header ? "auto 1fr" : "1fr")};
  height: 100vh;
  width: 100vw;
  position: absolute;
  overflow: auto;
`;

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  min-height: var(--height-xxxl);
  height: fit-content;
  z-index: var(--z-app-layout-header);
`;

const BodyContainer = styled.div<{ hasSidenav?: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: ${({ hasSidenav }) => (hasSidenav ? "auto 1fr" : "1fr")};
  grid-template-rows: 1fr;
`;

const SidenavContainer = styled.div<{ headerHeight: string }>`
  width: fit-content;
  height: 100%;
  z-index: var(--z-app-layout-sidenav);
  position: sticky;
  top: ${({ headerHeight }) => headerHeight || "0"};
  overflow: auto;
  max-height: ${({ headerHeight }) => `calc(100vh - ${headerHeight || "0"})`};
`;

const MainContainer = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: 100%;
`;

const FooterContainer = styled.div`
  height: fit-content;
  width: 100%;
`;

const Main = ({ children }: AppLayoutMainPropsType): JSX.Element => <div>{children}</div>;

const DxcApplicationLayout = ({ logo, header, sidenav, footer, children }: ApplicationLayoutPropsType): JSX.Element => {
  const [headerHeight, setHeaderHeight] = useState("0px");

  const handleHeaderHeight = useCallback((headerElement: HTMLDivElement | null) => {
    if (headerElement) {
      const height = headerElement.offsetHeight;
      setHeaderHeight(`${height}px`);
    }
  }, []);

  const contextValue = useMemo(() => {
    return {
      logo,
      headerExists: !!header,
    };
  }, [header, logo]);
  const ref = useRef(null);

  return (
    <ApplicationLayoutContainer ref={ref} header={header}>
      <ApplicationLayoutContext.Provider value={contextValue}>
        {header && <HeaderContainer ref={handleHeaderHeight}>{header}</HeaderContainer>}
        <BodyContainer hasSidenav={!!sidenav}>
          {sidenav && <SidenavContainer headerHeight={headerHeight}>{sidenav}</SidenavContainer>}
          <MainContainer>{findChildType(children, Main)}</MainContainer>
        </BodyContainer>
        <FooterContainer>
          {footer ?? (
            <DxcFooter
              copyright={`© DXC Technology ${year}. All rights reserved.`}
              bottomLinks={bottomLinks}
              socialLinks={socialLinks}
            />
          )}
        </FooterContainer>
      </ApplicationLayoutContext.Provider>
    </ApplicationLayoutContainer>
  );
};

DxcApplicationLayout.Footer = DxcFooter;
DxcApplicationLayout.Header = DxcHeader;
DxcApplicationLayout.Main = Main;
DxcApplicationLayout.Sidenav = DxcSidenav;

export default DxcApplicationLayout;
