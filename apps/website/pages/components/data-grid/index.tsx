import Head from "next/head";
import type { ReactElement } from "react";
import DataGridCodePage from "screens/components/data-grid/code/DataGridCodePage";
import DataGridPageLayout from "screens/components/data-grid/DataGridPageLayout";


const Usage = () => {
  return (
    <>
      <Head>
        <title>Data Grid — Halstack Design System</title>
      </Head>
      <DataGridCodePage />
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <DataGridPageLayout>{page}</DataGridPageLayout>;
};

export default Usage;
