import Head from "next/head";
import type { ReactElement } from "react";
import ToastCodePage from "screens/components/toast/code/ToastCodePage";
import ToastPageLayout from "screens/components/toast/ToastPageLayout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Toast — Halstack Design System</title>
      </Head>
      <ToastCodePage></ToastCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <ToastPageLayout>{page}</ToastPageLayout>;
};

export default Index;
