import Head from "next/head";
import type { ReactElement } from "react";
import TableUsagePage from "../../../screens/components/table/usage/TableUsagePage";
import TablePageLayout from "../../../screens/components/table/TablePageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Table — Halstack Design System</title>
      </Head>
      <TableUsagePage></TableUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <TablePageLayout>{page}</TablePageLayout>;
};

export default Usage;
