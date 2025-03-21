import Head from "next/head";
import type { ReactElement } from "react";
import StatusLightOverviewPage from "screens/components/status-light/overview/StatusLightOverviewPage";
import StatusLightPageLayout from "screens/components/status-light/StatusLightPageLayout";

const Index = () => (
  <>
    <Head>
      <title>Status light — Halstack Design System</title>
    </Head>
    <StatusLightOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <StatusLightPageLayout>{page}</StatusLightPageLayout>;

export default Index;
