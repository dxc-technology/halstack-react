import Head from "next/head";
import type { ReactElement } from "react";
import DataGridCodePage from "screens/components/data-grid/code/DataGridCodePage";
import DataGridPageLayout from "screens/components/data-grid/DataGridPageLayout";

const Code = () => {
  return (
    <>
      <Head>
        <title>Data Grid — Halstack Design System</title>
      </Head>
      <DataGridCodePage />
    </>
  );
};

Code.getLayout = (page: ReactElement) => <DataGridPageLayout>{page}</DataGridPageLayout>;
export default Code;
