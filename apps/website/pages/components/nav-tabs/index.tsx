import Head from "next/head";
import type { ReactElement } from "react";
import NavTabsPageLayout from "screens/components/nav-tabs/NavTabsPageLayout";
import NavTabsOverviewPage from "screens/components/nav-tabs/overview/NavTabsOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Nav tabs — Halstack Design System</title>
    </Head>
    <NavTabsOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <NavTabsPageLayout>{page}</NavTabsPageLayout>;

export default Index;
