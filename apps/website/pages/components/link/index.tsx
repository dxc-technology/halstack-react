import Head from "next/head";
import type { ReactElement } from "react";
import LinkPageLayout from "screens/components/link/LinkPageLayout";
import LinkOverviewPage from "screens/components/link/overview/LinkOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Link — Halstack Design System</title>
    </Head>
    <LinkOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <LinkPageLayout>{page}</LinkPageLayout>;

export default Index;
