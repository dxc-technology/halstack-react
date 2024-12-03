import Head from "next/head";
import type { ReactElement } from "react";
import AlertPageLayout from "screens/components/alert/AlertPageLayout";
import AlertCodePage from "screens/components/alert/code/AlertCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Alert — Halstack Design System</title>
      </Head>
      <AlertCodePage></AlertCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <AlertPageLayout>{page}</AlertPageLayout>;
};

export default Index;
