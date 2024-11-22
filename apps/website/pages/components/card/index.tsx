import Head from "next/head";
import type { ReactElement } from "react";
import CardCodePage from "screens/components/card/code/CardCodePage";
import CardPageLayout from "screens/components/card/CardPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Card — Halstack Design System</title>
      </Head>
      <CardCodePage></CardCodePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <CardPageLayout>{page}</CardPageLayout>;
};

export default Usage;
