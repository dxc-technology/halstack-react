import Head from "next/head";
import type { ReactElement } from "react";
import ContainerUsagePage from "screens/components/container/usage/ContainerUsagePage";
import ContainerPageLayout from "screens/components/container/ContainerPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Container Usage — Halstack Design System</title>
      </Head>
      <ContainerUsagePage />
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <ContainerPageLayout>{page}</ContainerPageLayout>;
};

export default Usage;
