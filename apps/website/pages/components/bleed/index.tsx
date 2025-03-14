import Head from "next/head";
import type { ReactElement } from "react";
import BleedPageLayout from "screens/components/bleed/BleedPageLayout";
import BleedOverviewPage from "screens/components/bleed/overview/BleedOverviewPage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Bleed — Halstack Design System</title>
      </Head>
      <BleedOverviewPage />
    </>
  );
};

Index.getLayout = (page: ReactElement) => <BleedPageLayout>{page}</BleedPageLayout>;

export default Index;
