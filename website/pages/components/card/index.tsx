import Head from "next/head";
import type { ReactElement } from "react";
import CardUsagePage from "../../../screens/components/card/usage/CardUsagePage";
import CardPageLayout from "../../../screens/components/card/CardPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Card — Halstack Design System</title>
      </Head>
      <CardUsagePage></CardUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <CardPageLayout>{page}</CardPageLayout>;
};

export default Usage;
