import Head from "next/head";
import type { ReactElement } from "react";
import PaginatorPageLayout from "screens/components/paginator/PaginatorPageLayout";
import PaginatorCodePage from "screens/components/paginator/code/PaginatorCodePage";

const Code = () => {
  return (
    <>
      <Head>
        <title>Paginator Usage — Halstack Design System</title>
      </Head>
      <PaginatorCodePage />
    </>
  );
};

Code.getLayout = (page: ReactElement) => <PaginatorPageLayout>{page}</PaginatorPageLayout>;

export default Code;
