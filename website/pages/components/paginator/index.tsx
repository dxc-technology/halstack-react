import Head from "next/head";
import type { ReactElement } from "react";
import PaginatorPageLayout from "../../../screens/components/paginator/PaginatorPageLayout";
import PaginatorUsagePage from "../../../screens/components/paginator/usage/PaginatorUsagePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Paginator — Halstack Design System</title>
      </Head>
      <PaginatorUsagePage></PaginatorUsagePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <PaginatorPageLayout>{page}</PaginatorPageLayout>;
};

export default Index;
