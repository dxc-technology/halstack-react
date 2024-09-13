import Head from "next/head";
import type { ReactElement } from "react";
import ToastPageLayout from "../../../screens/components/toast/ToastPageLayout";
import ToastUsagePage from "../../../screens/components/toast/usage/ToastUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Toast Usage — Halstack Design System</title>
      </Head>
      <ToastUsagePage></ToastUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <ToastPageLayout>{page}</ToastPageLayout>;
};

export default Usage;
