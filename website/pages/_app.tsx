import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import styled from "styled-components";
import {
  DxcApplicationLayout,
  HalstackProvider,
} from "@dxc-technology/halstack-react";
import SidenavContent from "../screens/common/sidenav/Sidenav";
import "../global-styles.css";
import { responsiveSizes } from "../screens/common/variables.js";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  const componentWithLayout = getLayout(<Component {...pageProps} />);
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <HalstackProvider advancedTheme={{}}>
        <DxcApplicationLayout>
          <DxcApplicationLayout.SideNav mode="push">
            <SidenavContent></SidenavContent>
          </DxcApplicationLayout.SideNav>
          <DxcApplicationLayout.Main>
            <MainContainer>{componentWithLayout}</MainContainer>
          </DxcApplicationLayout.Main>
        </DxcApplicationLayout>
      </HalstackProvider>
    </>
  );
}

const MainContainer = styled.div`
  margin: 80px auto;
  max-width: 1124px;

  @media (max-width: ${responsiveSizes.laptop}px) {
    margin: 80px 32px;
  }

  @media (max-width: ${responsiveSizes.desktop}px) {
    margin: 80px 5%;
  }
`;

export default MyApp;
