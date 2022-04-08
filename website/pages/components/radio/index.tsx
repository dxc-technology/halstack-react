import Head from "next/head";
import type { ReactElement } from "react";
import RadioPageLayout from "../../../screens/components/radio/RadioPageLayout";
import RadioUsagePage from "../../../screens/components/radio/usage/RadioUsagePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Radio — Halstack Design System</title>
      </Head>
      <RadioUsagePage></RadioUsagePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <RadioPageLayout>{page}</RadioPageLayout>;
};

export default Index;
