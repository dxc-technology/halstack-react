import Head from "next/head";
import type { ReactElement } from "react";
import BleedPageLayout from "screens/components/bleed/BleedPageLayout";
import BleedUsagePage from "screens/components/bleed/usage/BleedUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Bleed Usage — Halstack Design System</title>
      </Head>
      <BleedUsagePage></BleedUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <BleedPageLayout>{page}</BleedPageLayout>;
};

export default Usage;
