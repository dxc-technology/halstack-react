import Head from "next/head";
import type { ReactElement } from "react";
import CardOverviewPage from "screens/components/card/overview/CardOverviewPage";
import CardPageLayout from "screens/components/card/CardPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Card — Halstack Design System</title>
      </Head>
      <CardOverviewPage/>
    </>
  );
};

Usage.getLayout = (page: ReactElement) => <CardPageLayout>{page}</CardPageLayout>;

export default Usage;
