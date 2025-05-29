import Head from "next/head";
import type { ReactElement } from "react";
import ResultsetTablePageLayout from "screens/components/resultset-table/ResultsetTablePageLayout";
import ResultsetTableCodePage from "screens/components/resultset-table/code/ResultsetTableCodePage";

const Code = () => (
  <>
    <Head>
      <title>Resultset table code — Halstack Design System</title>
    </Head>
    <ResultsetTableCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <ResultsetTablePageLayout>{page}</ResultsetTablePageLayout>;

export default Code;
