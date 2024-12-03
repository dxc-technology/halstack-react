import Head from "next/head";
import type { ReactElement } from "react";
import ResultsetTablePageLayout from "screens/components/resultset-table/ResultsetTablePageLayout";
import ResultsetTableUsagePage from "screens/components/resultset-table/usage/ResultsetTableUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>ResultsetTable Usage — Halstack Design System</title>
      </Head>
      <ResultsetTableUsagePage></ResultsetTableUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <ResultsetTablePageLayout>{page}</ResultsetTablePageLayout>;
};

export default Usage;
