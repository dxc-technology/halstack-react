import Head from "next/head";
import type { ReactElement } from "react";
import DataGridSpecsPage from "screens/components/data-grid/specs/DataGridSpecsPage";
import DataGridPageLayout from "screens/components/data-grid/DatagridPageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Date Input Specs — Halstack Design System</title>
      </Head>
      <DataGridSpecsPage />
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <DataGridPageLayout>{page}</DataGridPageLayout>;
};

export default Specifications;
