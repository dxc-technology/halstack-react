import Head from "next/head";
import type { ReactElement } from "react";
import PaginatorPageLayout from "../../../screens/components/paginator/PaginatorPageLayout";
import PaginatorUsagePage from "../../../screens/components/paginator/usage/PaginatorUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Paginator Usage — Halstack Design System</title>
      </Head>
      <PaginatorUsagePage></PaginatorUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <PaginatorPageLayout>{page}</PaginatorPageLayout>;
};

export default Usage;
