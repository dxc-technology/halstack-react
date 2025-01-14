import Head from "next/head";
import type { ReactElement } from "react";
import SwitchPageLayout from "screens/components/switch/SwitchPageLayout";
import SwitchCodePage from "screens/components/switch/code/SwitchCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Switch — Halstack Design System</title>
      </Head>
      <SwitchCodePage></SwitchCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <SwitchPageLayout>{page}</SwitchPageLayout>;
};

export default Index;
