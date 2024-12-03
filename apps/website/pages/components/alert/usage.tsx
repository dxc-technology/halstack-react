import Head from "next/head";
import type { ReactElement } from "react";
import AlertPageLayout from "screens/components/alert/AlertPageLayout";
import AlertUsagePage from "screens/components/alert/usage/AlertUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Alert Usage — Halstack Design System</title>
      </Head>
      <AlertUsagePage></AlertUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <AlertPageLayout>{page}</AlertPageLayout>;
};

export default Usage;
