import Head from "next/head";
import type { ReactElement } from "react";
import PaginatorPageLayout from "../../../screens/components/paginator/PaginatorPageLayout";
import PaginatorCodePage from "../../../screens/components/paginator/code/PaginatorCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Paginator — Halstack Design System</title>
      </Head>
      <PaginatorCodePage></PaginatorCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <PaginatorPageLayout>{page}</PaginatorPageLayout>;
};

export default Index;
