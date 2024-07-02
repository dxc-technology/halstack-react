import Head from "next/head";
import type { ReactElement } from "react";
import GridPageLayout from "../../../screens/components/grid/GridPageLayout";
import GridSpecsPage from "../../../screens/components/grid/specs/GridSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Grid Specs — Halstack Design System</title>
      </Head>
      <GridSpecsPage></GridSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <GridPageLayout>{page}</GridPageLayout>;
};

export default Specifications;
