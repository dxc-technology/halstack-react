import Head from "next/head";
import type { ReactElement } from "react";
import ResultsetTableCodePage from "../../../screens/components/resultset-table/code/ResultsetTableCodePage";
import ResultsetTablePageLayout from "../../../screens/components/resultset-table/ResultsetTablePageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Resultset Table — Halstack Design System</title>
      </Head>
      <ResultsetTableCodePage></ResultsetTableCodePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <ResultsetTablePageLayout>{page}</ResultsetTablePageLayout>;
};

export default Usage;
