import Head from "next/head";
import type { ReactElement } from "react";
import TableSpecsPage from "../../../screens/components/table/specs/TableSpecsPage";
import TablePageLayout from "../../../screens/components/table/TablePageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Table Specs — Halstack Design System</title>
      </Head>
      <TableSpecsPage></TableSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <TablePageLayout>{page}</TablePageLayout>;
};

export default Specifications;
