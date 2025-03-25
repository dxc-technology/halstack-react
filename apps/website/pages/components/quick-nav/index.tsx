import Head from "next/head";
import type { ReactElement } from "react";
import QuickNavPageLayout from "screens/components/quick-nav/QuickNavPageLayout";
import QuickNavOverviewPage from "screens/components/quick-nav/overview/QuickNavOverviewsPage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Quick Nav — Halstack Design System</title>
      </Head>
      <QuickNavOverviewPage />
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <QuickNavPageLayout>{page}</QuickNavPageLayout>;
};

export default Index;
