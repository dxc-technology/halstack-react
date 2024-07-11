import Head from "next/head";
import type { ReactElement } from "react";
import HeaderPageLayout from "../../../screens/components/header/HeaderPageLayout";
import HeaderUsagePage from "../../../screens/components/header/usage/HeaderUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Header Usage — Halstack Design System</title>
      </Head>
      <HeaderUsagePage></HeaderUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderPageLayout>{page}</HeaderPageLayout>;
};

export default Usage;
