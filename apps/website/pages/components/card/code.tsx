import Head from "next/head";
import type { ReactElement } from "react";
import CardCodePage from "screens/components/card/code/CardCodePage";
import CardPageLayout from "screens/components/card/CardPageLayout";

const Code = () => {
  return (
    <>
      <Head>
        <title>Card Code — Halstack Design System</title>
      </Head>
      <CardCodePage />
    </>
  );
};

Code.getLayout = (page: ReactElement) => <CardPageLayout>{page}</CardPageLayout>;

export default Code;
