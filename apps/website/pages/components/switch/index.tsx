import Head from "next/head";
import type { ReactElement } from "react";
import SwitchPageLayout from "screens/components/switch/SwitchPageLayout";
import SwitchOverviewPage from "screens/components/switch/overview/SwitchOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Switch — Halstack Design System</title>
    </Head>
    <SwitchOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <SwitchPageLayout>{page}</SwitchPageLayout>;

export default Index;
