import Head from "next/head";
import type { ReactElement } from "react";
import PaginatorPageLayout from "../../../screens/components/paginator/PaginatorPageLayout";
import PaginatorSpecsPage from "../../../screens/components/paginator/specs/PaginatorSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Paginator Specs — Halstack Design System</title>
      </Head>
      <PaginatorSpecsPage></PaginatorSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <PaginatorPageLayout>{page}</PaginatorPageLayout>;
};

export default Specifications;
