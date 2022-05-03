import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  DxcApplicationLayout,
  HalstackProvider,
} from "@dxc-technology/halstack-react";
import SidenavContent from "../screens/common/sidenav/Sidenav";
import "../global-styles.css";

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
            {componentWithLayout}
          </DxcApplicationLayout.Main>
        </DxcApplicationLayout>
      </HalstackProvider>
    </>
  );
}

export default MyApp;
