import Head from "next/head";
import type { ReactElement } from "react";
import ColumnsPageLayout from "../../../screens/components/columns/ColumnsPageLayout";
import ColumnsCodePage from "../../../screens/components/columns/code/ColumnsCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Columns — Halstack Design System</title>
      </Head>
      <ColumnsCodePage></ColumnsCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <ColumnsPageLayout>{page}</ColumnsPageLayout>;
};

export default Index;
