import Head from "next/head";
import type { ReactElement } from "react";
import RadioPageLayout from "../../../screens/components/radio/RadioPageLayout";
import RadioUsagePage from "../../../screens/components/radio/usage/RadioUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Radio Usage — Halstack Design System</title>
      </Head>
      <RadioUsagePage></RadioUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <RadioPageLayout>{page}</RadioPageLayout>;
};

export default Usage;
