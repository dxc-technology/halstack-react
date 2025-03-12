import Head from "next/head";
import type { ReactElement } from "react";
import ContextualMenuOverviewPage from "screens/components/contextual-menu/overview/ContextualMenuOverviewPage";
import ContextualMenuPageLayout from "screens/components/contextual-menu/ContextualMenuPageLayout";

const Index = () => (
  <>
    <Head>
      <title>Contextual menu — Halstack Design System</title>
    </Head>
    <ContextualMenuOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <ContextualMenuPageLayout>{page}</ContextualMenuPageLayout>;

export default Index;
