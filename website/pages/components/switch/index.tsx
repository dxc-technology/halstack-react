import Head from "next/head";
import type { ReactElement } from "react";
import SwitchPageLayout from "../../../screens/components/switch/SwitchPageLayout";
import SwitchUsagePage from "../../../screens/components/switch/usage/SwitchUsagePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Switch — Halstack Design System</title>
      </Head>
      <SwitchUsagePage></SwitchUsagePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <SwitchPageLayout>{page}</SwitchPageLayout>;
};

export default Index;
