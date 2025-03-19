import Head from "next/head";
import type { ReactElement } from "react";
import TabsOverviewPage from "screens/components/tabs/overview/TabsOverviewPage";
import TabsPageLayout from "screens/components/tabs/TabsPageLayout";

const Index = () => (
  <>
    <Head>
      <title>Tabs — Halstack Design System</title>
    </Head>
    <TabsOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <TabsPageLayout>{page}</TabsPageLayout>;

export default Index;
