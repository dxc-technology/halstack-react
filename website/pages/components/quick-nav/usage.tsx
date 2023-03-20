import Head from "next/head";
import type { ReactElement } from "react";
import QuickNavPageLayout from "../../../screens/components/quick-nav/QuickNavPageLayout";
import QuickNavUsagePage from "../../../screens/components/quick-nav/usage/QuickNavUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Quick Nav Usage — Halstack Design System</title>
      </Head>
      <QuickNavUsagePage></QuickNavUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <QuickNavPageLayout>{page}</QuickNavPageLayout>;
};

export default Usage;
