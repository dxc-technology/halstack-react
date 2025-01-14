import Head from "next/head";
import type { ReactElement } from "react";
import TextInputPageLayout from "screens/components/text-input/TextInputPageLayout";
import TextInputUsagePage from "screens/components/text-input/usage/TextInputUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Text Input Usage — Halstack Design System</title>
      </Head>
      <TextInputUsagePage></TextInputUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <TextInputPageLayout>{page}</TextInputPageLayout>;
};

export default Usage;
