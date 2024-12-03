import Head from "next/head";
import type { ReactElement } from "react";
import SwitchPageLayout from "screens/components/switch/SwitchPageLayout";
import SwitchUsagePage from "screens/components/switch/usage/SwitchUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Switch Usage — Halstack Design System</title>
      </Head>
      <SwitchUsagePage></SwitchUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <SwitchPageLayout>{page}</SwitchPageLayout>;
};

export default Usage;
