import Head from "next/head";
import type { ReactElement } from "react";
import BoxPageLayout from "../../../screens/components/box/BoxPageLayout";
import BoxUsagePage from "../../../screens/components/box/usage/BoxUsagePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Box — Halstack Design System</title>
      </Head>
      <BoxUsagePage></BoxUsagePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <BoxPageLayout>{page}</BoxPageLayout>;
};

export default Index;
