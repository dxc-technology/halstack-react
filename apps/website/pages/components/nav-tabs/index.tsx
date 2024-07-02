import Head from "next/head";
import type { ReactElement } from "react";
import NavTabsPageLayout from "../../../screens/components/nav-tabs/NavTabsPageLayout";
import NavTabsCodePage from "../../../screens/components/nav-tabs/code/NavTabsCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Nav Tabs — Halstack Design System</title>
      </Head>
      <NavTabsCodePage></NavTabsCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <NavTabsPageLayout>{page}</NavTabsPageLayout>;
};

export default Index;
