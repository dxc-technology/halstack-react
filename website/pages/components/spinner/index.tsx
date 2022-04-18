import Head from "next/head";
import type { ReactElement } from "react";
import SpinnerUsagePage from "../../../screens/components/spinner/usage/SpinnerUsagePage";
import SpinnerPageLayout from "../../../screens/components/spinner/SpinnerPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Spinner — Halstack Design System</title>
      </Head>
      <SpinnerUsagePage></SpinnerUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <SpinnerPageLayout>{page}</SpinnerPageLayout>;
};

export default Usage;
