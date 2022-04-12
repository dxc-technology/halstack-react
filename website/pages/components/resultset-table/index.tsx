import Head from "next/head";
import type { ReactElement } from "react";
import ResultsetTableUsagePage from "../../../screens/components/resultset-table/usage/ResultsetTableUsagePage";
import ResultsetTablePageLayout from "../../../screens/components/resultset-table/ResultsetTablePageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Resultset Table — Halstack Design System</title>
      </Head>
      <ResultsetTableUsagePage></ResultsetTableUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <ResultsetTablePageLayout>{page}</ResultsetTablePageLayout>;
};

export default Usage;
