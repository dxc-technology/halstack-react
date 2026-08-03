import Head from "next/head";
import type { ReactElement } from "react";
import TimeInputOverviewPage from "screens/components/time-input/overview/TimeInputOverviewPage";
import TimeInputPageLayout from "screens/components/time-input/TimeInputPageLayout";

const Index = () => (
  <>
    <Head>
      <title>Time input — Halstack Design System</title>
    </Head>
    <TimeInputOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <TimeInputPageLayout>{page}</TimeInputPageLayout>;

export default Index;
