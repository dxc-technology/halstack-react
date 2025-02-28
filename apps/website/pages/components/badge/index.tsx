import Head from "next/head";
import type { ReactElement } from "react";
import BadgePageLayout from "screens/components/badge/BadgePageLayout";
import BadgeOverviewPage from "screens/components/badge/overview/BadgeOverviewPage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Badge — Halstack Design System</title>
      </Head>
      <BadgeOverviewPage />
    </>
  );
};

Index.getLayout = (page: ReactElement) => <BadgePageLayout>{page}</BadgePageLayout>;

export default Index;
