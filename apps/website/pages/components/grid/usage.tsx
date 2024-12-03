import Head from "next/head";
import type { ReactElement } from "react";
import GridPageLayout from "screens/components/grid/GridPageLayout";
import GridUsagePage from "screens/components/grid/usage/GridUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Grid Usage — Halstack Design System</title>
      </Head>
      <GridUsagePage></GridUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <GridPageLayout>{page}</GridPageLayout>;
};

export default Usage;
