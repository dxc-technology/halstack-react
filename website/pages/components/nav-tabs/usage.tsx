import Head from "next/head";
import type { ReactElement } from "react";
import NavTabsPageLayout from "../../../screens/components/nav-tabs/NavTabsPageLayout";
import NavTabsUsagePage from "../../../screens/components/nav-tabs/usage/NavTabsUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Nav Tabs Usage — Halstack Design System</title>
      </Head>
      <NavTabsUsagePage></NavTabsUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <NavTabsPageLayout>{page}</NavTabsPageLayout>;
};

export default Usage;
