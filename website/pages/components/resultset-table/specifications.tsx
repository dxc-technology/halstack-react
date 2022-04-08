import Head from "next/head";
import type { ReactElement } from "react";
import ResultsetTableSpecsPage from "../../../screens/components/resultset-table/specs/ResultsetTableSpecsPage";
import ResultsetTablePageLayout from "../../../screens/components/resultset-table/ResultsetTablePageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Resultset Table Specs — Halstack Design System</title>
      </Head>
      <ResultsetTableSpecsPage></ResultsetTableSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <ResultsetTablePageLayout>{page}</ResultsetTablePageLayout>;
};

export default Specifications;
