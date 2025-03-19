import Head from "next/head";
import type { ReactElement } from "react";
import TabsCodePage from "screens/components/tabs/overview/TabsOverviewPage";
import TabsPageLayout from "screens/components/tabs/TabsPageLayout";

const Code = () => (
  <>
    <Head>
      <title>Tabs code — Halstack Design System</title>
    </Head>
    <TabsCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <TabsPageLayout>{page}</TabsPageLayout>;

export default Code;
