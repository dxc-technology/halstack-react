import Head from "next/head";
import type { ReactElement } from "react";
import InsetPageLayout from "screens/components/inset/InsetPageLayout";
import InsetUsagePage from "screens/components/inset/usage/InsetUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Inset Usage — Halstack Design System</title>
      </Head>
      <InsetUsagePage></InsetUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <InsetPageLayout>{page}</InsetPageLayout>;
};

export default Usage;
