import Head from "next/head";
import type { ReactElement } from "react";
import ResultsetTableOverviewPage from "screens/components/resultset-table/overview/ResultsetTableOverviewPage";
import ResultsetTablePageLayout from "screens/components/resultset-table/ResultsetTablePageLayout";

const Index = () => (
  <>
    <Head>
      <title>Resultset table — Halstack Design System</title>
    </Head>
    <ResultsetTableOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <ResultsetTablePageLayout>{page}</ResultsetTablePageLayout>;

export default Index;
