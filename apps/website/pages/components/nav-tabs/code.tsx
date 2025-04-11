import Head from "next/head";
import type { ReactElement } from "react";
import NavTabsPageLayout from "screens/components/nav-tabs/NavTabsPageLayout";
import NavTabsCodePage from "screens/components/nav-tabs/code/NavTabsCodePage";

const Code = () => (
  <>
    <Head>
      <title>Nav tabs code — Halstack Design System</title>
    </Head>
    <NavTabsCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <NavTabsPageLayout>{page}</NavTabsPageLayout>;

export default Code;
