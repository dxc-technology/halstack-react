import Head from "next/head";
import type { ReactElement } from "react";
import ContextualMenuOverviewPage from "screens/components/contextual-menu/overview/ContextualMenuOverviewPage";
import ContextualMenuPageLayout from "screens/components/contextual-menu/ContextualMenuPageLayout";

const Usage = () => (
  <>
    <Head>
      <title>Contextual Menu — Halstack Design System</title>
    </Head>
    <ContextualMenuOverviewPage />
  </>
);

Usage.getLayout = (page: ReactElement) => <ContextualMenuPageLayout>{page}</ContextualMenuPageLayout>;

export default Usage;
