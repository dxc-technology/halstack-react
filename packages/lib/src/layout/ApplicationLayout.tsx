import { useRef } from "react";
import styled from "@emotion/styled";
import DxcFooter from "../footer/Footer";
import DxcHeader from "../header/Header";
import DxcSidenav from "../sidenav/Sidenav";
import ApplicationLayoutPropsType, { AppLayoutMainPropsType } from "./types";
import { bottomLinks, findChildType, socialLinks, year } from "./utils";
import { dxcLogo } from "./Icons";

const ApplicationLayoutContainer = styled.div`
  top: 0;
  left: 0;
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  width: 100vw;
  position: absolute;
  overflow: hidden;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
  z-index: var(--z-app-layout-header);
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

const defaultHeaderBranding = {
  logo: {
    src: dxcLogo,
    alt: "DXC Logo",
  },
};

const Main = ({ children }: AppLayoutMainPropsType): JSX.Element => <div>{children}</div>;

const DxcApplicationLayout = ({ header, sidenav, footer, children }: ApplicationLayoutPropsType): JSX.Element => {
  const ref = useRef(null);

  return (
    <ApplicationLayoutContainer ref={ref}>
      <HeaderContainer>{header ?? <DxcHeader branding={defaultHeaderBranding} />}</HeaderContainer>
      <BodyContainer>
        {sidenav && <SidenavContainer>{sidenav}</SidenavContainer>}
        <MainContainer>
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
DxcApplicationLayout.Sidenav = DxcSidenav;

export default DxcApplicationLayout;
