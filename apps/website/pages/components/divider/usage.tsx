import Head from "next/head";
import type { ReactElement } from "react";
import DividerPageLayout from "../../../screens/components/divider/DividerPageLayout";
import DividerUsagePage from "../../../screens/components/divider/usage/DividerUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Divider Usage — Halstack Design System</title>
      </Head>
      <DividerUsagePage></DividerUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <DividerPageLayout>{page}</DividerPageLayout>;
};

export default Usage;
