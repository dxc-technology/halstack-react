import Head from "next/head";
import type { ReactElement } from "react";
import ContainerCodePage from "screens/components/container/code/ContainerCodePage";
import ContainerPageLayout from "screens/components/container/ContainerPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Container — Halstack Design System</title>
      </Head>
      <ContainerCodePage></ContainerCodePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <ContainerPageLayout>{page}</ContainerPageLayout>;
};

export default Usage;
