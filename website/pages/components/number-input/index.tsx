import Head from "next/head";
import type { ReactElement } from "react";
import NumberInputUsagePage from "../../../screens/components/number-input/usage/NumberInputUsagePage";
import NumberInputPageLayout from "../../../screens/components/number-input/NumberInputPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Number Input — Halstack Design System</title>
      </Head>
      <NumberInputUsagePage></NumberInputUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <NumberInputPageLayout>{page}</NumberInputPageLayout>;
};

export default Usage;
