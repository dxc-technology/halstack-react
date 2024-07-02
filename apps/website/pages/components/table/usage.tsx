import Head from "next/head";
import type { ReactElement } from "react";
import TablePageLayout from "../../../screens/components/table/TablePageLayout";
import TableUsagePage from "../../../screens/components/table/usage/TableUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Table Usage — Halstack Design System</title>
      </Head>
      <TableUsagePage></TableUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <TablePageLayout>{page}</TablePageLayout>;
};

export default Usage;
