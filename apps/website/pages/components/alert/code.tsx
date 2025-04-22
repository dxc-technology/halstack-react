import Head from "next/head";
import type { ReactElement } from "react";
import AlertPageLayout from "screens/components/alert/AlertPageLayout";
import AlertCodePage from "screens/components/alert/code/AlertCodePage";

const Code = () => {
  return (
    <>
      <Head>
        <title>Alert Code — Halstack Design System</title>
      </Head>
      <AlertCodePage />
    </>
  );
};

Code.getLayout = (page: ReactElement) => <AlertPageLayout>{page}</AlertPageLayout>;

export default Code;
