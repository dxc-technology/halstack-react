import Head from "next/head";
import type { ReactElement } from "react";
import ProgressBarOverviewPage from "screens/components/progress-bar/overview/ProgressBarOverviewPage";
import ProgressBarPageLayout from "screens/components/progress-bar/ProgressBarPageLayout";

const Index = () => (
  <>
    <Head>
      <title>Progress Bar — Halstack Design System</title>
    </Head>
    <ProgressBarOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <ProgressBarPageLayout>{page}</ProgressBarPageLayout>;

export default Index;
