import Head from "next/head";
import type { ReactElement } from "react";
import DataGridPageLayout from "screens/components/data-grid/DataGridPageLayout";
import DataGridOverviewPage from "screens/components/data-grid/overview/DataGridOverviewPage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Data grid — Halstack Design System</title>
      </Head>
      <DataGridOverviewPage />
    </>
  );
};

Index.getLayout = (page: ReactElement) => <DataGridPageLayout>{page}</DataGridPageLayout>;
export default Index;
