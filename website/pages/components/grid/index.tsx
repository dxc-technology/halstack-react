import Head from "next/head";
import type { ReactElement } from "react";
import GridPageLayout from "../../../screens/components/grid/GridPageLayout";
import GridCodePage from "../../../screens/components/grid/code/GridCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Grid — Halstack Design System</title>
      </Head>
      <GridCodePage></GridCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <GridPageLayout>{page}</GridPageLayout>;
};

export default Index;
