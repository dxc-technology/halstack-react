import Head from "next/head";
import type { ReactElement } from "react";
import QuickNavPageLayout from "screens/components/quick-nav/QuickNavPageLayout";
import QuickNavOverviewPage from "screens/components/quick-nav/overview/QuickNavOverviewsPage";

const Index = () => (
  <>
    <Head>
      <title>Quick nav — Halstack Design System</title>
    </Head>
    <QuickNavOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <QuickNavPageLayout>{page}</QuickNavPageLayout>;

export default Index;
