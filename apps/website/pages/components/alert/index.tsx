import Head from "next/head";
import type { ReactElement } from "react";
import AlertPageLayout from "screens/components/alert/AlertPageLayout";
import AlertOverviewPage from "screens/components/alert/overview/AlertOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Alert — Halstack Design System</title>
    </Head>
    <AlertOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <AlertPageLayout>{page}</AlertPageLayout>;

export default Index;
