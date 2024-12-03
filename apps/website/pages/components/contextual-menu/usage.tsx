import Head from "next/head";
import type { ReactElement } from "react";
import ContextualMenuPageLayout from "screens/components/contextual-menu/ContextualMenuPageLayout";
import ContextualMenuUsagePage from "screens/components/contextual-menu/usage/ContextualMenuUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Contextual Menu Usage — Halstack Design System</title>
      </Head>
      <ContextualMenuUsagePage></ContextualMenuUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <ContextualMenuPageLayout>{page}</ContextualMenuPageLayout>;
};

export default Usage;
