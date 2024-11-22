import Head from "next/head";
import type { ReactElement } from "react";
import DataGridUsagePage from "screens/components/data-grid/usage/DataGridUsagePage";
import DataGridPageLayout from "screens/components/data-grid/DataGridPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Data Grid Usage — Halstack Design System</title>
      </Head>
      <DataGridUsagePage />
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <DataGridPageLayout>{page}</DataGridPageLayout>;
};

export default Usage;
