import Head from "next/head";
import type { ReactElement } from "react";
import RowsPageLayout from "../../../screens/components/rows/RowsPageLayout";
import RowsCodePage from "../../../screens/components/rows/code/RowsCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Rows — Halstack Design System</title>
      </Head>
      <RowsCodePage></RowsCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <RowsPageLayout>{page}</RowsPageLayout>;
};

export default Index;
