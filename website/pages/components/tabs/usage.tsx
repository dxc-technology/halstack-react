import Head from "next/head";
import type { ReactElement } from "react";
import TabsUsagePage from "../../../screens/components/tabs/usage/TabsUsagePage";
import TabsPageLayout from "../../../screens/components/tabs/TabsPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Tabs — Halstack Design System</title>
      </Head>
      <TabsUsagePage></TabsUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <TabsPageLayout>{page}</TabsPageLayout>;
};

export default Usage;
