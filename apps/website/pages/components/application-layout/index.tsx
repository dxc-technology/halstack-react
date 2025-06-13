import Head from "next/head";
import type { ReactElement } from "react";
import ApplicationLayoutPageLayout from "screens/components/application-layout/ApplicationLayoutPageLayout";
import ApplicationLayoutOverviewPage from "screens/components/application-layout/overview/ApplicationLayoutOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Application layout — Halstack Design System</title>
    </Head>
    <ApplicationLayoutOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <ApplicationLayoutPageLayout>{page}</ApplicationLayoutPageLayout>;

export default Index;
