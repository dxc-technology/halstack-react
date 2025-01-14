import Head from "next/head";
import type { ReactElement } from "react";
import TableCodePage from "screens/components/table/code/TableCodePage";
import TablePageLayout from "screens/components/table/TablePageLayout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Table — Halstack Design System</title>
      </Head>
      <TableCodePage></TableCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <TablePageLayout>{page}</TablePageLayout>;
};

export default Index;
