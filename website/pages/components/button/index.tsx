import Head from "next/head";
import type { ReactElement } from "react";
import ButtonPageLayout from "../../../screens/components/button/ButtonPageLayout";
import ButtonUsagePage from "../../../screens/components/button/usage/ButtonUsagePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Button — Halstack Design System</title>
      </Head>
      <ButtonUsagePage></ButtonUsagePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <ButtonPageLayout>{page}</ButtonPageLayout>;
};

export default Index;
