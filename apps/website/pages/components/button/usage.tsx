import Head from "next/head";
import type { ReactElement } from "react";
import ButtonPageLayout from "screens/components/button/ButtonPageLayout";
import ButtonUsagePage from "screens/components/button/usage/ButtonUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Button Usage — Halstack Design System</title>
      </Head>
      <ButtonUsagePage></ButtonUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <ButtonPageLayout>{page}</ButtonPageLayout>;
};

export default Usage;
