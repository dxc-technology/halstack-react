import Head from "next/head";
import type { ReactElement } from "react";
import ContextualMenuCodePage from "screens/components/contextual-menu/code/ContextualMenuCodePage";
import ContextualMenuPageLayout from "screens/components/contextual-menu/ContextualMenuPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Contextual Menu — Halstack Design System</title>
      </Head>
      <ContextualMenuCodePage></ContextualMenuCodePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <ContextualMenuPageLayout>{page}</ContextualMenuPageLayout>;
};

export default Usage;
